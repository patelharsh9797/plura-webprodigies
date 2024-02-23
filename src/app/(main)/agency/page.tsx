import { getAuthUserDetails, verifyAndAcceptInvitaion } from "@/lib/queries";
import { currentUser } from "@clerk/nextjs";
import { Plan } from "@prisma/client";
import { redirect } from "next/navigation";
import React from "react";

const page = async ({
  searchParams,
}: {
  searchParams: { plan: Plan; state: string; code: string };
}) => {
  const agancyId = await verifyAndAcceptInvitaion();
  const user = await getAuthUserDetails();

  if (agancyId) {
    if (user?.role === "SUBACCOUNT_USER" || user?.role === "SUBACCOUNT_GUEST") {
      return redirect("/subaccount");
    } else if (user?.role === "AGENCY_OWNER" || user?.role === "AGENCY_ADMIN") {
      if (searchParams.plan) {
        return redirect(
          `/agancy/${agancyId}/billing?plan=${searchParams.plan}`,
        );
      }
      if (searchParams.state) {
        const statePath = searchParams.state.split("__")[0];
        const stateAgencyId = searchParams.state.split("___")[1];
        if (!stateAgencyId) return <div>Not Authorized</div>;
        return redirect(
          `/agancy/${stateAgencyId}/${statePath}?code=${searchParams.code}`,
        );
      } else return redirect(`/agancy/${agancyId}`);
    } else {
      return <div>Not Authorized</div>;
    }
  }

  const authUser = await currentUser();

  return (
    <div className="flex justify-center items-center mt-4">
      <div className="max-w-[850px] border p-4 rounded-xl">
        <h1 className="text-4xl">Create An Agency</h1>
      </div>
    </div>
  );
};

export default page;
