import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
const baseURL = import.meta.env.BASE_URL || "/portfolio";
interface NavItemPropsType {
  label: string;
  linkRef: string;
}

function NavItem({ label, linkRef }: NavItemPropsType) {
  return (
    <a href={linkRef}>
      <Typography as="li" className="px-3 py-1 rounded-lg font-medium text-blue-gray-900 hover:!text-accent-500 hover:bg-accent-100/30 transition-colors">
        {label}
      </Typography>
    </a>
  );
}

function NavList() {
  return (
    <ul className="flex flex-col gap-3 md:mb-0 md:mt-0 md:flex-row md:items-center md:gap-8">
      <NavItem label="Home" linkRef={baseURL + "/"} />
      <NavItem label="About" linkRef={baseURL + "/#about"}/>
      <NavItem label="Projects" linkRef={baseURL + "/#projects"}/>
    </ul>
  );
}

export function NavbarBlurred() {
  const [openNav, setOpenNav] = React.useState(false);
  const handleOpen = () => setOpenNav((cur) => !cur);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
 
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
      <Navbar 
        blurred
        color="white"
        className="sticky inset-0 z-10 mx-auto max-w-screen-2xl p-2 md:pl-6 mt-4 transition-shadow border-b border-blue-gray-50 shadow-none">
        <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href={baseURL + "/"}
            variant="h6"
            className="mr-4 cursor-pointer text-blue-gray-900 hover:!text-accent-500 transition-colors"
          >
            MRiley Portfolio
          </Typography>
          <div className="hidden md:flex ml-auto mr-8">
            <NavList />
            <a href={baseURL + "/#contact"}>
              <Button
                  color="gray"
                  size="sm"
                  className="hidden md:inline-block ml-8 hover:bg-accent-500 transition-colors"
              >
                  Contact
              </Button>
            </a>
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent md:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <XMarkIcon className="h-6 w-6" strokeWidth={2} />
              ) : (
                <Bars3Icon className="h-6 w-6" strokeWidth={2} />
              )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList />
          <a href={baseURL + "/#contact"}>
            <Button size="sm" className="mb-2 hover:bg-accent-500 transition-colors" fullWidth>
              Contact
            </Button>
          </a>
        </Collapse>
      </Navbar>
  );
}

export default NavbarBlurred;