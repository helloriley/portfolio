import { Button, Typography } from "@material-tailwind/react";
const links = ["Home", "About", "Projects"];
const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="px-8 py-10">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 md:flex-row ">
          <div>
            <Typography
              color="blue-gray"
              className="!text-base font-semibold text-blue-gray-700"
            >
              MRiley Portfolio - Turning ideas into solutions
            </Typography>
            <Typography
              color="blue-gray"
              className="!text-base font-medium text-blue-gray-700"
            >
              UI/UX Designer and Frontend Engineer
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
                  <li>
                    <Typography
                      as="a"
                      href={`/#` + link.toLowerCase()}
                      color="white"
                      className="font-medium text-blue-gray-900 hover:!text-blue-gray-600 transition-colors"
                    >
                      {link}
                    </Typography>
                  </li>
                </ul>
              ))}
            </div>
            <a href="/#contact">
              <Button color="gray" className="w-full md:w-fit hover:bg-blue-gray-800">
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