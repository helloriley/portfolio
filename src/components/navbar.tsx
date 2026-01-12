import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button
} from "@material-tailwind/react";

const baseURL = import.meta.env.BASE_URL || "/portfolio";
interface NavItemPropsType {
  label: string;
  linkRef: string;
}

function NavItem({ label, linkRef }: NavItemPropsType) {
  return (
    <a href={linkRef}>
      <Typography as="li" className="p-1 font-medium text-blue-gray-900 hover:!text-blue-gray-600 transition-colors">
        {label}
      </Typography>
    </a>
  );
}

function NavList() {
  return (
    <ul className="mb-4 mt-2 flex flex-col gap-3 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-8">
      <NavItem label="Home" linkRef={baseURL + "/"} />
      <NavItem label="About" linkRef={baseURL + "/#about"}/>
      <NavItem label="Projects" linkRef={baseURL + "/#projects"}/>
    </ul>
  );
}

export function NavbarBlurred() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false),
    );
  }, []);

  return (
      <Navbar 
        blurred
        color="white"
        className="sticky inset-0 z-10 mx-auto max-w-screen-2xl p-2 lg:pl-6 mt-4 transition-shadow border-b border-slate-300 shadow-none">
        <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href={baseURL + "/"}
            variant="h6"
            className="mr-4 cursor-pointer text-blue-gray-900"
          >
            MRiley Portfolio
          </Typography>
          <div className="hidden lg:flex ml-auto mr-8">
            <NavList />
          </div>
          <a href={baseURL + "/#contact"}>
            <Button
                color="gray"
                size="sm"
                className="hidden lg:inline-block hover:bg-blue-gray-800"
            >
                Contact
            </Button>
          </a>
        </div>
        <Collapse open={open}>
          <NavList />
          <a href={baseURL + "/#contact"}>
            <Button size="sm" className="mb-2 hover:bg-blue-gray-800" fullWidth>
              Contact
            </Button>
          </a>
        </Collapse>
      </Navbar>
  );
}

export default NavbarBlurred;