import React from "react";
import {
  Button,
  Typography,
} from "@material-tailwind/react";

import { TextEffect } from '../motion-primitives/text-effect';

const baseURL = import.meta.env.BASE_URL || "/portfolio";

export function HeroPresentation() {
  return (
    <header className="h-full w-screen place-items-center bg-white relative px-8 py-8 lg:mb-16">
      <div id="home" className="container mx-auto grid items-center lg:grid-cols-2">
        <div className="text-center lg:text-left pt-32">
          <div className="mb-4 inline-flex items-center">
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
            Turning <span className="text-accent">ideas</span> into <span className="text-accent">products</span> that make an impact
          </Typography>
          <Typography variant="lead" color="blue-gray" className="lg:pr-32">
            <TextEffect per='char' preset='fade' delay={0.5}>
              Where creativity meets functionality. User-centered responsive websites that engage users.
            </TextEffect>
          </Typography>
          <div className="mt-12 flex flex-wrap justify-center gap-3 lg:justify-start">
            <a href={baseURL + "#about"}>
              <Button className="flex items-center hover:bg-accent-500 transition-colors">
                Explore
              </Button>
            </a>
          </div>
        </div>
      </div>
      <div className="flex lg:flex">
        <img src={baseURL + "/images/banner-home-4-1100x1016.jpg"} alt="components" className="absolute -top-10 right-0 w-1/2 hover:scale-105 transition-transform" />
      </div>
    </header>

  );
}

export default HeroPresentation;
