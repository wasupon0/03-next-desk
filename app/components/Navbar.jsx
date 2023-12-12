import Image from "next/image";
import Link from "next/link";
import Logo from "./school-desk.png";

export default function Navbar() {
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
      <Link href="/tickets">Tickets</Link>
    </nav>
  );
}
