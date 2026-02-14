import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

import type { IProjectCollection } from "../../content.config";

interface IFeatureCardProps {
  tag: string;
  title: string;
  idx: number;
  children: React.ReactNode;
}

function FeatureCard_Thirds({ tag, title, idx, children }: IFeatureCardProps) {
    let colSpan = idx == 0 ? "col-span-2" : "col-span-1"
    let classNames = "grid " + colSpan 
    return (
    <Card className={classNames} color="transparent" shadow={false}>
      <CardBody className="px-4">
        <Typography variant="h6" className="mb-2 uppercase text-accent">
          {tag}
        </Typography>
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography variant="paragraph" className="!text-gray-700 text-lg">
          {children}
        </Typography>
      </CardBody>
    </Card>
  );
}

export function FeatureChallengeRoleSection({...props}: IProjectCollection) {
  const project = props.project;
  const challengeTag = "The Challenge";
  const roleTag = "Role and Tech";
  const backgroundGradient = "bg-gradient-to-t from-blue-gray-50/50 to-blue-gray-50/30"
  return (
    <section className={"lg:py-10 py-4 px-8 lg:px-20 mx-auto " + backgroundGradient}>
      <div className="container mx-auto grid lg:gap-x-8 gap-y-8 grid-cols-1 lg:grid-cols-3">
        {
          <>
            <FeatureCard_Thirds key={challengeTag} tag={challengeTag} title={project.challengetitle} idx={0}>
              {project.challenge}
            </FeatureCard_Thirds>
            <FeatureCard_Thirds key={roleTag} tag={roleTag} title={project.role} idx={1}>
              {project.technologies}
            </FeatureCard_Thirds>
          </>
        }
      </div>
    </section>
  );
}

export default FeatureChallengeRoleSection;
