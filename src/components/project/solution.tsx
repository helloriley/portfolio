import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import type { ISolutionProps } from "../../content.config";

const baseURL = import.meta.env.BASE_URL || "/portfolio";
/**
 * 
<Typography variant="h6"
                className="text-accent uppercase"
              >
                {tag}
              </Typography>
*/

export function FeatureSolutionSection(solutionProps: ISolutionProps, islast: boolean,) {
  const { title, tag, link, problem, solution, solutionbullets, impact, impactbullets, gallery } = solutionProps;
  const isLast = islast;
  const defaultImageSrcIndex = 0; 
  const [galleryActiveIndex, setGalleryActiveIndex] = React.useState(defaultImageSrcIndex);
  return (
    <>
      <a id={link}></a>
        <section className="lg:pb-5 py-8 px-8 lg:px-20 mx-auto ">
          <div className="mb-10 container mx-auto grid lg:gap-x-8 gap-y-4 grid-cols-1 lg:grid-cols-2">
            <div className="col-span-1 lg:col-span-2 text-center mb-4">
              <Typography variant="h4"
                color="blue-gray"
                className=""
              >
                {title}
              </Typography>
            </div>
            <Card className="grid col-span-1" color="transparent" shadow={false}>
              <CardBody className="p-0">
                <Typography variant="h6" className="mb-2 text-accent uppercase">
                  Problem
                </Typography>
                <Typography variant="paragraph" color="blue-gray" className="text-lg !text-gray-600 mb-2">
                  {problem}
                </Typography>
                <Typography variant="h6" className="mb-2 text-accent uppercase">
                  Solution
                </Typography>
                <Typography variant="paragraph" color="blue-gray" className="text-lg !text-gray-600">
                  {solution}
                  <ul className="list-disc ml-3 mt-3">
                    {solutionbullets.map((bullet, key) => (
                      <li key={key} className="text-blue-gray text-lg font-semi-bold mt-2">{bullet}</li>
                    ))}
                  </ul>
                </Typography>
              </CardBody>
            </Card>
            <Card className="grid col-span-1 lg:border-l-2 lg:border-blue-gray-50 rounded-none lg:pl-6" color="transparent" shadow={false}>
              <CardBody className="p-0">
                <Typography variant="h6" className="mb-2 text-accent uppercase">
                  Impact
                </Typography>
                <Typography variant="paragraph" color="blue-gray" className="text-lg !text-gray-600 mb-2">
                    {impact}
                    <ul className="list-disc ml-3">
                      {impactbullets.map((bullet, key) => (
                        <li key={key} className="flex items-start gap-3 text-blue-gray text-lg text-bold mt-2">
                          <span className="mt-1 flex-shrink-0 w-6 h-6 text-blue-500" aria-hidden>
                            <svg xmlns="http://www.w3.org/2000/svg" height="18" width="18" viewBox="0 0 512 512"><path d="M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512zm0-464a208 208 0 1 0 0 416 208 208 0 1 0 0-416zm70.7 121.9c7.8-10.7 22.8-13.1 33.5-5.3 10.7 7.8 13.1 22.8 5.3 33.5L243.4 366.1c-4.1 5.7-10.5 9.3-17.5 9.8-7 .5-13.9-2-18.8-6.9l-55.9-55.9c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l36 36 105.6-145.2z"/></svg>
                          </span>
                          <span className="text-blue-gray text-lg font-semi-bold">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                </Typography>
              </CardBody>
            </Card>
          </div>
          <div className="flex w-full justify-items-center mt-12">
            <div className="container mx-auto grid lg:gap-x-8 gap-y-8 grid-cols-1 justify-items-center">
              <div className={"col-span-1  " + (isLast ? "" : " pt-8 border-b border-gray")}>
                <div className="grid gap-4">
                  <div className="text-center justify-items-center mb-0">
                    <div className="justify-center justify-items-center mb-0 md:w-[930px] lg:w-max-[1200px]">
                      
                      <div className="relative w-full overflow-visible">
                        <img
                          className="relative z-0 h-auto w-full max-w-full rounded-2xl object-contain object-center md:h-[550px] border-4 border-blue-gray-800 shadow-lg hover:cursor-pointer"
                          src={baseURL + gallery[galleryActiveIndex]?.src}
                          alt=""
                          onClick={() => {
                            const shiftIndex = galleryActiveIndex == gallery.length - 1 ? 0 : galleryActiveIndex + 1; 
                            setGalleryActiveIndex(shiftIndex);
                          }}
                        />
                      
                        <div className="absolute bottom-4 left-1/2 z-50 flex -translate-x-1/2 gap-3 pointer-events-auto">
                          {gallery.map((_, i) => (
                            <button
                              key={i}
                              type="button"
                              aria-label={`Show image ${i + 1}`}
                              aria-pressed={galleryActiveIndex === i}
                              onClick={() => setGalleryActiveIndex(i)}
                              color="blue-gray"
                              className={`inline-block h-3 rounded-full transition-all ring-1 ring-white/80 shadow-sm focus:outline-none focus:ring-2 focus:ring-white hover:border-2 hover:border-accent-500 ${
                                galleryActiveIndex === i ? "w-10 bg-accent shadow-md " : "w-4 bg-slate/30 "
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    
                      <Typography variant="paragraph" color="blue-gray" className="text-md p-4 mb-0 w-full justify-center text-center bg-accent-50/80 rounded-b-2xl">
                        {gallery.find((img) => img.src === gallery[galleryActiveIndex]?.src)?.caption}
                      </Typography>
                    </div>
                  </div>
                  <div className="grid grid-cols-5 gap-4 text-center justify-center justify-items-center">
                    {gallery.map(({ src, alt }, index) => (
                      <div key={index}>
                        <img
                          onClick={() => {setGalleryActiveIndex(index);}}
                          src={baseURL + src}
                          className={`h-20 max-w-full cursor-pointer rounded-lg object-cover object-center border-2 ${
                            gallery[galleryActiveIndex].src === src ? "border-accent-400" : "border-white"
                          } hover:border-2 hover:border-accent-400 transition-border`}
                          alt={alt}
                        />
                      </div>
                    ))}
                  </div>
                </div>
            </div>
          </div>
      </div>
    </section>
    </>
  );
}

export default FeatureSolutionSection;
