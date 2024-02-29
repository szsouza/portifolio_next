"use client";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
const menus: { title: string; href: string; description: string }[] = [
  {
    title: "Home",
    href: "/",
    description: "my home",
  },
  {
    title: "Projects",
    href: "/Projects",
    description: "my projects",
  },
  {
    title: "About",
    href: "About",
    description: "my projects",
  },
  {
    title: "Contact",
    href: "#contact",
    description: "my projects",
  },
];
export const Header = () => {
  return (
    <header className="w-full h-16 gap-4 flex justify-between items-center bg-white flex-1">
      <div className="flex justify-center items-center relative mt-4">
        <span className="font-bold text-md text-slate-800">
          Devel<b className="text-emerald-500">oper</b>
        </span>
      </div>
      <div className="flex relative justify-center gap-5 mt-4">
        {menus.map((menu) => (
          <a
            href={menu.href}
            className="relative inline-block text-black group"
            key={menu.title}
          >
            <span className="block text-lg">{menu.title}</span>
            <span className="absolute left-1/2 w-full h-0.5 bg-black bottom-0 origin-center transform -translate-x-1/2 transition-all duration-300 scale-x-0 group-hover:scale-x-100"></span>
          </a>
        ))}
      </div>
    </header>
  );
};
