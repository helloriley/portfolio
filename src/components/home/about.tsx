import React from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";

const baseURL = import.meta.env.BASE_URL || "/portfolio";

function FeatureCard({ icon, title, children }) {
  return (
    <Card color="transparent" shadow={true}>
      <CardBody className="grid justify-center text-center">
        {icon}
        <Typography
          variant="h5"
          color="blue-gray"
          className="mb-2 !font-semibold"
        >
          {title}
        </Typography>
        <Typography
          color="blue-gray"
          className="px-8 font-normal text-gray-700"
        >
          {children}
        </Typography>
      </CardBody>
    </Card>
  );
}

const features = [
  {
    icon: (
      <img className="w-32 mx-auto mb-4" src={baseURL + "/icon1.jpg"} alt="website and online product design"/>
    ),
    title: "Design",
    description:
      "User flows, Wireframing, Prototyping, Usability testing, Task flows, User interface design, User Experience design, Figma, Adobe XD, Adobe Photoshop",
  },
  {
    icon: (
      <img className="w-32 mx-auto mb-4" src={baseURL + "/icon2.jpg"} alt="website and online product development"/>
    ),
    title: "Development",
    description:
      "React, Astro.js, TypeScript, Vue.js, Javascript, HTML, Material Tailwind UI, Tailwind CSS, Node.js,Git, Responsive, Strapi CMS, Pages CMS",
  },
  {
    icon: (
      <img className="w-32 mx-auto mb-4" src={baseURL + "/icon4.jpg"} alt="website and online product strategy"/>
    ),
    title: "Strategy",
    description:
      "Business requirements analysis, Customer Journey mapping, Conversion and SEO optimisations",
  }
];

export function FeatureAbout() {
  return (
    <section id="about" className="py-8 px-8 lg:py-14">
      <div className="container mx-auto mb-20 text-center">
        <Typography color="dark" className="mb-2 font-bold text-lg uppercase">
          <span className="text-accent">Skills</span>
        </Typography>
        <Typography variant="h2" color="blue-gray" className="mb-4">
          Delivering value your clients will notice
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 text-blue-gray-800 md:w-10/12 lg:w-8/12 lg:px-8"
        >
          Specializing in building websites and converting complex workflows into <span className="font-bold">intuitive interfaces
          that drive measurable results</span> - from increased conversions and onboarding to streamlined 
          enterprise processes serving many users.
          <p className="pt-4">
            I&apos;m a <span className="font-bold">Frontend engineer</span> and <span className="font-bold">UI/UX Designer</span>, based in Cape Town. 
            I solve business problems through user-centered responsive design and efficient development.
          </p>
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon, title, description }) => (
          <FeatureCard key={title} icon={icon} title={title}>
            {description}
          </FeatureCard>
        ))}
      </div>
    </section>
  );
}

export default FeatureAbout;
