"use client";
import classNames from "classnames";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiFillBug } from "react-icons/ai";


const NavBar = () => {
  return (
    <nav className="flex border-b mb-5 px-5 h-14">
      <NavLinks />
    </nav>
  );
};

export default NavBar;

const links = [
  { label: <AiFillBug />, href: "/" },
  { label: "DashBoard", href: "/dashboard" },
  { label: "Issues", href: "/issues" },
];

const NavLinks = () => {
  const {status ,data:session} =useSession();
  const currentPath = usePathname();

  return (
    <div>
    <ul className="flex gap-6 items-center">
      {links.map((link) => (
        <Link
          className={classNames({
            "text-zinc-900": link.href === currentPath,
            "text-zinc-500": link.href !== currentPath,
            "hover:text-zinc-800 transaition-colors": true,
          })}
          key={link.href}
          href={link.href}
        >
          {link.label}
        </Link>
      ))}{" "}

      {status === "loading" && <div>Loading...</div>}
      {status === "authenticated" && (
        <div>{session.user!.name}
        <Link href="api/auth/signout" className="ml-3">
        Sign Out
        </Link>
        </div>)}
      {status === "unauthenticated" && (
        <Link href="/api/auth/signin">Login</Link>
        
      )}
    </ul>

    </div>
    
  );
};