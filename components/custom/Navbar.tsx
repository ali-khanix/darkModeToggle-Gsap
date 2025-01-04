import Link from "next/link";
import ToggleTheme from "./ToggleTheme";

const Navbar = () => {
  return (
    <nav className="flex justify-center items-center p-6 dark:bg-white ">
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
