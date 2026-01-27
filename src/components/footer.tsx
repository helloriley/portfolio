import { Button, Typography } from "@material-tailwind/react";
const links = ["Home", "About", "Projects"];
const currentYear = new Date().getFullYear();

const baseURL = import.meta.env.BASE_URL || "/portfolio";
const backgroundGradient = "bg-gradient-to-b from-blue-gray-50 to-blue-gray-50/10";

export function Footer() {
  return (
    <footer className={"px-8 py-8 " + backgroundGradient}>
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between gap-4 pt-4 md:flex-row ">
          <div>
            <Typography
              color="blue-gray"
              className="!text-base font-medium text-blue-gray-700"
            >
              <span className="font-semibold">MRiley Portfolio</span> | Design Engineer, UI/UX Designer and Frontend Engineer
            </Typography>
            <Typography
              color="blue-gray"
              className="!text-base font-medium text-xs text-blue-gray-300"
            >
              Copyright &copy; {currentYear}. All rights reserved.
            </Typography>
          </div>
          <div className="flex flex-col items-center gap-8 md:flex-row">
            <div className="flex items-center gap-8">
              {links.map((link, index) => (
                <ul key={index} className="">
                  <li className="px-3 py-2 rounded-lg hover:bg-accent-100/30 transition-colors">
                    <Typography
                      as="a"
                      href={baseURL + "/#" + link.toLowerCase()}
                      color="white"
                      className="font-medium text-blue-gray-900 hover:text-accent-500 transition-colors"
                    >
                      {link}
                    </Typography>
                  </li>
                </ul>
              ))}
            </div>
            <a href={baseURL + "/#contact"}>
              <Button color="gray" className="w-full md:w-fit hover:bg-accent-500 transition-colors">
                Contact
              </Button>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;