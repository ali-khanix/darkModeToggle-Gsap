import Link from "next/link";
import ToggleTheme from "./ToggleTheme";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-6 dark:bg-white ">
      <div className="dark:text-black font-bold">
        DARK<span className="text-teal-700">MODE</span>
      </div>
      <ul className="gap-5 dark:text-black lg:flex sm:hidden md:hidden">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/"}>About</Link>
        </li>
        <li>
          <Link href={"/"}>Pricing</Link>
        </li>
      </ul>
      <div className="toggle-btn">
        <ToggleTheme />
      </div>
    </nav>
  );
};

export default Navbar;
