import { Button, Typography } from "@material-tailwind/react";
const links = ["Home", "About", "Projects"];
const currentYear = new Date().getFullYear();

const baseURL = import.meta.env.BASE_URL || "/portfolio";
const backgroundGradient = "bg-gradient-to-b from-blue-gray-50/50 to-blue-gray-50/10";

export function Footer() {
  return (
    <footer className={"px-8 py-8 " + backgroundGradient}>
      <div className="container mx-auto">
        <div className="flex flex-col items-start justify-between gap-4 pt-4 md:flex-row ">
          <div>
            <Typography
              color="blue-gray"
              className="text-base font-semibold text-blue-gray-700"
            >
              MRiley Portfolio
            </Typography>
            <Typography
              color="blue-gray"
              className="text-base font-medium text-blue-gray-700"
            >
              Design Engineer - where creativity meets functionality
            </Typography>
            <Typography
              color="blue-gray"
              className="text-sm font-normal text-blue-gray-300 mt-2"
            >
              Made with <a href="https://astro.build/" target="_blank" className="text-blue-gray-600 hover:underline">Astro</a>, React, Tailwind CSS, Material Tailwind UI, GitHub
              <br />Copyright &copy; {currentYear}. All rights reserved.
            </Typography>
          </div>

          <div className="flex flex-col items-center gap-4 md:flex-row">
            <div className="flex items-center gap-4">
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

/*
<span className="h-5 w-5 inline-block align-top mx-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
  </svg>
</span>
*/