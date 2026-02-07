import React from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { InView } from '../motion-primitives/in-view';

const baseURL = import.meta.env.BASE_URL || "/portfolio";

function FeatureCard({ icon, title, children }) {
  return (
    <Card color="white" shadow={true} className="hover:bg-accent-100/30 delay-150 duration-400 transition-colors rounded-2xl p-2 lg:p-4">
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
          className="px-2 lg:px-4 font-normal text-gray-700"
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
      <img className="w-32 mx-auto mb-4 rounded-xl" src={baseURL + "/icon1.jpg"} alt="website and online product design"/>
    ),
    title: "Design",
    skills:
      "User flows, Wireframing, Prototyping, Usability testing, Task flows, User interface design, User Experience design, Figma, Adobe XD, Adobe Photoshop",
  },
  {
    icon: (
      <img className="w-32 mx-auto mb-4 rounded-xl" src={baseURL + "/icon2.jpg"} alt="website and online product development"/>
    ),
    title: "Development",
    skills:
      "React, Astro.js, TypeScript, Vue.js, Javascript, HTML, Material Tailwind UI, Tailwind CSS, Node.js, Git, Responsive, Strapi CMS, Pages CMS",
  },
  {
    icon: (
      <img className="w-32 mx-auto mb-4 rounded-xl" src={baseURL + "/icon4.jpg"} alt="website and online product strategy"/>
    ),
    title: "Strategy",
    skills:
      "Business requirements analysis, Customer Journey mapping, Conversion and SEO optimisations",
  }
];

export function FeatureAbout() {
  return (
    <section id="about" className="py-8 px-8 lg:py-14 bg-gradient-to-b from-blue-gray-50/40 to-blue-gray-50/30">
      <div className="container mx-auto mb-20 text-center">
        <Typography color="dark" className="mb-2 font-bold text-lg uppercase">
          <span className="text-accent">Skills</span>
        </Typography>
        <Typography variant="h2" color="blue-gray" className="mb-4">
          Delivering value your clients will notice
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 text-blue-gray-800 md:w-10/12 lg:w-9/12 lg:px-8"
        >
            As a <span className="font-bold">Design Engineer</span> - a hybrid UI/UX Designer &amp; Frontend Developer - I&apos;m passionate about crafting seamless user experiences that <span className="font-bold">bridge user goals and business objectives</span>.
            Solving business problems through user-centered responsive design and efficient development.          
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
        <div className="container mx-auto grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon, title, skills }) => (
            <FeatureCard key={title} icon={icon} title={title}>
              {skills}
            </FeatureCard>
          ))}
        </div>
      </InView>
    </section>
  );
}

export default FeatureAbout;
