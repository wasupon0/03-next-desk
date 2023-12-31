import Image from "next/image";
import Link from "next/link";
import Logo from "./school-desk.png";
import LogoutButton from "./LogoutButton";

export default function Navbar({ user }) {
  return (
    <nav>
      <Image
        src={Logo}
        alt="Desk logo"
        width={70}
        quality={100}
        placeholder="blur"
      />
      <h1>Desk website</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets" className="mr-auto">
        Tickets
      </Link>

      {user && <span>Hello, {user.email}</span>}
      <LogoutButton />
    </nav>
  );
}
