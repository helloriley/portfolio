import React from "react";
import { Typography } from "@material-tailwind/react";
import type { IProjectCollection } from "../../content.config";

const baseURL = import.meta.env.BASE_URL || "/portfolio";

export function HeroSection({...props}: IProjectCollection) {
  const project = props.project;
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false),
    );
  }, []);

  const backgroundColor = "bg-gradient-to-t from-blue-50 to-blue-50/30" 
  return (
      <div className={`relative h-9/10 w-full ${backgroundColor}`}>
        <header className="px-8 py-16 lg:py-24 mx-auto">
          <div className="container mx-auto grid h-9/10 w-full place-items-center gap-y-10 grid-cols-1 lg:grid-cols-2">
            <div className="row-start-2 lg:row-auto lg:-mt-10  bg-blue-100/40 p-6 lg:p-8 xs:rounded-3xl lg:rounded-l-3xl w-full">
              <Typography variant="h4" color="blue-gray" className="mb-2">
                {project.company}:
              </Typography>              
              <ul className="list-disc ">
                {project.banner.bullets.map((bullet:string, key) => (
                  <li key={key} className="flex items-start gap-3 text-blue-gray text-base mt-4">
                    <span className="mt-1 flex-shrink-0 w-6 h-6 text-accent" aria-hidden>
                      <svg xmlns="http://www.w3.org/2000/svg" className="fill-accent" viewBox="0 0 560 560">
                        <path d="M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512zm0-464a208 208 0 1 0 0 416 208 208 0 1 0 0-416zm70.7 121.9c7.8-10.7 22.8-13.1 33.5-5.3 10.7 7.8 13.1 22.8 5.3 33.5L243.4 366.1c-4.1 5.7-10.5 9.3-17.5 9.8-7 .5-13.9-2-18.8-6.9l-55.9-55.9c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l36 36 105.6-145.2z"/>
                      </svg>
                    </span>
                    <span className="text-blue-gray-900 text-lg font-light">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
            <img
              src={baseURL + project.banner.src}
              alt={project.banner.alt}
              className="col-span-1 object-cover object-top-left rounded-xl shadow-xl shadow-accent-800/20 w-full hover:scale-105 delay-150 duration-500 transition-transform"
            />
          </div>
        </header>
      </div>
  );
}

export default HeroSection;
