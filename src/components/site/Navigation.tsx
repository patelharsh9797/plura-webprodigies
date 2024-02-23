import { UserButton } from "@clerk/nextjs";
import { User } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "../global/mode-toggle";

type Props = {
  user?: null | User;
};

function Navigation({ user }: Props) {
  return (
    <header>
      <div className="fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between p-4">
        <aside className="flex items-center gap-2">
          <Image
            src={"/assets/plura-logo.svg"}
            height={40}
            width={40}
            alt="plura logo"
          />
          <span className="text-xl font-bold">Plura.</span>
        </aside>
        <nav className="absolute left-[50%] top-[50%] hidden translate-x-[-50%] translate-y-[-50%] transform md:block">
          <ul className="flex items-center justify-center gap-8">
            <li>
              <Link href={"#"}>Pricing</Link>
            </li>
            <li>
              <Link href={"#"}>About</Link>
            </li>
            <li>
              <Link href={"#"}>Documentation</Link>
            </li>
            <li>
              <Link href={"#"}>Features</Link>
            </li>
          </ul>
        </nav>
        <aside className="flex items-center gap-2">
          <Link
            href={"/agency"}
            className="rounded-md bg-primary p-2 px-4 text-white hover:bg-primary/80"
          >
            Login
          </Link>
          <UserButton />
          <ModeToggle />
        </aside>
      </div>
    </header>
  );
}

export default Navigation;
