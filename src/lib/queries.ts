"use server";

import { clerkClient, currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import db from "./db";
import { UserTBType } from "./types";

export const getAuthUserDetails = async () => {
  const user = await currentUser();

  if (!user) {
    return;
  }

  const userData = await db.user.findUnique({
    where: {
      email: user.emailAddresses[0].emailAddress,
    },
    include: {
      Agency: {
        include: {
          SidebarOption: true,
          SubAccount: {
            include: {
              SidebarOption: true,
            },
          },
        },
      },
      Permissions: true,
    },
  });

  return userData;
};

export const saveActivityLogsNotification = async ({
  agencyId,
  description,
  subAccountId,
}: {
  agencyId?: string;
  description: string;
  subAccountId?: string;
}) => {
  const authUser = await currentUser();
  let userData;

  if (!authUser) {
    const response = await db.user.findFirst({
      where: {
        Agency: {
          SubAccount: {
            some: {
              id: subAccountId,
            },
          },
        },
      },
    });
    if (response) userData = response;
  } else {
    userData = await db.user.findUnique({
      where: {
        email: authUser.emailAddresses[0].emailAddress,
      },
    });
  }

  if (!userData) {
    console.log("Couldn't find a User!!!!");
    return;
  }

  let foundedAgencyId = agencyId;

  if (!foundedAgencyId) {
    if (!subAccountId) {
      throw new Error(
        "You need to provide atlest an agency ID or subaccount ID.",
      );
    }
    const response = await db.subAccount.findUnique({
      where: {
        id: subAccountId,
      },
    });

    if (response) foundedAgencyId = response.agencyId;
  }

  if (subAccountId) {
    await db.notification.create({
      data: {
        notification: `${userData.name} | ${description}`,
        User: {
          connect: {
            id: userData.id,
          },
        },
        Agency: {
          connect: {
            id: foundedAgencyId,
          },
        },
        SubAccount: {
          connect: {
            id: subAccountId,
          },
        },
      },
    });
  } else {
    await db.notification.create({
      data: {
        notification: `${userData.name} | ${description}`,
        User: {
          connect: {
            id: userData.id,
          },
        },
        Agency: {
          connect: {
            id: foundedAgencyId,
          },
        },
      },
    });
  }
};

export const createTeamUser = async (agencyId: string, user: UserTBType) => {
  if (user.role === "AGENCY_OWNER") {
    return null;
  }

  const response = await db.user.create({
    data: {
      ...user,
    },
  });

  return response;
};

export const verifyAndAcceptInvitaion = async () => {
  const user = await currentUser();

  if (!user) return redirect("/sign-in");

  const invitaionExists = await db.invitation.findUnique({
    where: {
      email: user.emailAddresses[0].emailAddress,
      status: "PENDING",
    },
  });

  if (invitaionExists) {
    const userDetails = await createTeamUser(invitaionExists.agencyId, {
      email: invitaionExists.email,
      agencyId: invitaionExists.agencyId,
      avatarUrl: user.imageUrl,
      id: user.id,
      name: `${user.firstName} ${user.lastName}`,
      role: invitaionExists.role,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    await saveActivityLogsNotification({
      agencyId: invitaionExists?.agencyId,
      description: `Joined`,
      subAccountId: undefined,
    });

    if (userDetails) {
      await clerkClient.users.updateUserMetadata(user.id, {
        privateMetadata: {
          role: userDetails.role || "SUBACCOUNT_USER",
        },
      });

      await db.invitation.delete({
        where: {
          email: userDetails.email,
        },
      });

      return userDetails.agencyId;
    } else return null;
  } else {
    const agency = await db.user.findUnique({
      where: {
        email: user.emailAddresses[0].emailAddress,
      },
    });

    return agency ? agency.agencyId : null;
  }
};
