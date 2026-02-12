import React from "react";
import { Card, CardBody, Typography, ButtonGroup, Button } from "@material-tailwind/react";
import Solution from "./solution";
import type { IProjectCollection } from "../../content.config";

const baseURL = import.meta.env.BASE_URL || "/portfolio";

export function ProjectSolutions({...props}: IProjectCollection) {
  const project = props.project;
  return (
    <section className="lg:py-10 py-4 px-8 ">
      <div className="container mx-auto mb-10 text-center lg:mb-10">
        <Typography variant="h6" className="mb-2 uppercase text-accent">
            Solutions & Impact
        </Typography>        
        <Typography
          variant="h4"
          color="blue-gray"
          className="mb-4 !text-2xl lg:!text-4xl"
        >
          Improving Customer journeys and workflows
        </Typography>
        <Typography
          variant="paragraph"
          className="mx-auto max-w-lg !text-gray-600 text-lg"
        >
          Adding value by optimising workflows and refining the customer experience at <span className="font-bold">{project.company}</span>.
        </Typography>
      </div>
      {/* Solution navigation buttons */
        project.solutions.length > 1 && (
          <div className="container mx-auto justify-center items-center lg:gap-y-10">
              <div className="flex justify-center items-center mb-10">          
                  {project.solutions.map(({ title, link }) => (
                    <a href={baseURL + project.link + "/#" + link}>
                      <Button key={link} variant="outlined" className="mr-4 items-center hover:shadow-lg hover:text-accent hover:border-accent-500 transition-colors" >
                        {title}
                      </Button>
                    </a>
                  ))}
              </div>
          </div>
        )
      }
      {project.solutions.map((solution, index) => (
        <>
          {/* Add a horizontal line between solutions, except before the first one */} 
          <a id={solution.link}></a>
          {index > 0 && (
            <div className="w-2/3 text-center mx-auto my-10">
              <hr className="border-blue-gray-200" />
            </div> 
          )}
          
          <Solution {...solution} key={solution.link}/>
        </>
      ))}
    </section>
  );
}

export default ProjectSolutions;

/*
          {project.solutions.length > 1 && index + 1 !== project.solutions.length && (
            <div className="container mx-auto my-10">
              <hr className="border-blue-gray-200" />
            </div>
          )}

*/