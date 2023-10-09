import React from "react";
import Link from "next/link";

const links = [
  { label: "Home", route: "/" },
  { label: "Links", route: "/links" },
];

const NavBar = () => {
  return (
    <nav className="w-screen px-10">
      <ul className="flex justify-center lg:justify-end text-xl gap-20">
        {links.map((item) => (
          <li className="underline-animation" key={item.route}>
            <Link href={item.route}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
