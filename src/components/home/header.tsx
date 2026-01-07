import React from "react";
import {
  Button,
  Typography,
} from "@material-tailwind/react";

export function HeroPresentation() {
  return (
    <header className="h-full w-screen place-items-center bg-white relative px-8 py-8 lg:mb-20">
      <div id="home" className="container mx-auto grid items-center lg:grid-cols-2">
        <div className="text-center lg:text-left pt-32">
          <div className="mb-8 inline-flex items-center">
            <Typography
              variant="small"
              className="mr-3 py-0.5 px-2 font-bold text-dark uppercase"
            >
              Welcome
            </Typography>
          </div>
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-8 lg:mr-32 leading-tight font-black"
          >
            Turning <span className="text-blue">ideas</span> into <span className="text-blue">products</span> that make an impact
          </Typography>
          <Typography variant="lead" color="blue-gray" className="lg:pr-32">
            Where creativity meets functionality - user-centered responsive websites that engage users.
          </Typography>
          <div className="mt-12 flex flex-wrap justify-center gap-3 lg:justify-start">
            <a href="#about">
              <Button color="dark" className="flex items-center hover:bg-blue-gray-800">
                Find out more
              </Button>
            </a>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex">
        <img src="header.png" alt="components" className="absolute -top-10 right-0 w-1/2" />
      </div>
    </header>

  );
}

export default HeroPresentation;
