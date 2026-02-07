import {
  Card,
  CardHeader,
  CardBody,
  Button,
  Typography,
} from "@material-tailwind/react";
import { InView } from '../motion-primitives/in-view';
import type { CollectionEntry } from "astro:content";
import type { IProjectCollection } from "../../content.config";

const baseURL = import.meta.env.BASE_URL || "/portfolio";

function ProjectCard({...props} : IProjectCollection) {
  const project = props.project;
  const imgClass = "h-full w-full object-contain object-top border-2 border-gray-100";
  return (
    <a href={baseURL + project.link}>
      <Card color="transparent" shadow={true} className="mt-6 hover:bg-accent-100/20 hover:shadow-lg hover:shadow-accent-800/20 duration-500 transition-colors">
        <CardHeader floated={true} className="h-70 w-70 relative">
          <img src={baseURL + project.featureimg} alt={project.title} className="h-64 w-full object-cover object-top border-t-2 border-gray-50 hover:scale-105 delay-150 duration-500 transition-transform"/>
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="transition-colors hover:text-accent-500">
            {project.title}
          </Typography>
          <Typography color="blue-gray" className="mb-6 font-normal text-blue-gray-400">
            {project.company}
          </Typography>
          <Button variant="outlined" className="flex items-center hover:shadow-md hover:text-accent hover:border-accent-500 transition-colors">
            View Project
            <svg className="ml-2" width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path class="fill-accent" d="M11.8314 0.306358C11.4483 -0.0914636 10.8153 -0.103408 10.4175 0.27968C10.0196 0.662768 10.0077 1.29582 10.3908 1.69364L11.8314 0.306358ZM13.2797 4.69364C13.6628 5.09146 14.2958 5.10341 14.6936 4.72032C15.0915 4.33723 15.1034 3.70418 14.7203 3.30636L13.2797 4.69364ZM14.7203 4.69364C15.1034 4.29582 15.0915 3.66277 14.6936 3.27968C14.2958 2.89659 13.6628 2.90854 13.2797 3.30636L14.7203 4.69364ZM10.3908 6.30636C10.0077 6.70418 10.0196 7.33723 10.4175 7.72032C10.8153 8.10341 11.4483 8.09146 11.8314 7.69364L10.3908 6.30636ZM14 5C14.5523 5 15 4.55228 15 4C15 3.44772 14.5523 3 14 3V5ZM1 3C0.447715 3 0 3.44772 0 4C0 4.55228 0.447715 5 1 5V3ZM10.3908 1.69364L13.2797 4.69364L14.7203 3.30636L11.8314 0.306358L10.3908 1.69364ZM13.2797 3.30636L10.3908 6.30636L11.8314 7.69364L14.7203 4.69364L13.2797 3.30636ZM14 3H1V5H14V3Z" />
            </svg>
          </Button>
        </CardBody>
      </Card>
    </a>  
  );
}

export function FeaturedProjectsSection({...props}: CollectionEntry<'project'>[]) {
  const projectsToSort = props.projects.length > 0 ? props.projects : [];
  // create a shallow copy then sort by parsed date (ISO "YYYY-MM-DD") descending (newest first)
  const projects = [...projectsToSort].sort(
    (a: CollectionEntry<"project">, b: CollectionEntry<"project">) => {
      const ta = Date.parse(String(a.data.datecompleted)) || 0;
      const tb = Date.parse(String(b.data.datecompleted)) || 0;
      return tb - ta;
    }
  );

  return (
    <section id="projects" className="py-8 px-8 lg:py-16">
      <div className="container mx-auto">
        <div className="mb-24 text-center">
          <Typography color="dark" className="mb-2 !font-semibold text-lg uppercase">
            <span className="text-accent">Projects</span>
          </Typography>
          <Typography variant="h2" color="blue-gray" className="mb-4">
            Solving business problems, improving UIX
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto w-full px-4 text-blue-gray-800 md:w-10/12 lg:w-9/12 lg:px-8"
          >
            Specializing in building websites and converting complex workflows into <span className="font-bold">intuitive interfaces
            that drive measurable results</span> - from increasing conversions and onboarding to streamlined 
            enterprise processes serving many users.
          </Typography>

          <Typography
            variant="lead"
            className="mx-auto lg:w-9/12 lg:px-20 text-blue-gray-800"
          >
            Need a new website or optimise the one you have? I&apos;m here to bring your ideas to life. See the diversity of work 
            delivered in problem-solution-impact scenarios in these projects below.
          </Typography>
        </div>
        <InView
            variants={{
              hidden: { opacity: 0, y: 70, filter: 'blur(4px)' },
              visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
            }}
            viewOptions={{ margin: '0px 0px -70px 0px' }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
          <div className="grid gap-10 grid-cols-1 md:grid-cols-2 md:mx-10 lg:mx-20 items-stretch items-center">
            {projects.map((props, key) => (
              <ProjectCard key={props.id} project={props.data} />
            ))}
          </div>
        </InView>
      </div>
    </section>
  );
}

export default FeaturedProjectsSection;
