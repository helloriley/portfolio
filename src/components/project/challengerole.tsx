import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { InView } from '../motion-primitives/in-view';

import type { IProjectCollection } from "../../content.config";

interface IFeatureCardProps {
  tag: string;
  title: string;
  idx: number;
  children: React.ReactNode;
}

function FeatureCard_StretchTwo({ tag, title, idx, children }: IFeatureCardProps) {
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
          <InView
            variants={{
              hidden: { opacity: 0, y: 100, filter: 'blur(4px)' },
              visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
            }}
            viewOptions={{ margin: '0px 0px -100px 0px' }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
          <Typography variant="paragraph" className="!text-gray-600 text-lg">
            {children}
          </Typography>
        </InView>
      </CardBody>
    </Card>
  );
}

export function FeatureChallengeRoleSection({...props}: IProjectCollection) {
  const project = props.project;
  const challengeTag = "The Challenge";
  const roleTag = "Role and Tech";
  const backgroundGradient = "bg-gradient-to-t from-gray-50 to-gray-50/10"
  return (
    <section className={"lg:py-10 py-4 px-8 lg:px-20 mx-auto " + backgroundGradient}>
      <div className="container mx-auto grid lg:gap-x-8 gap-y-8 grid-cols-1 lg:grid-cols-3">
        {
          <>
            <FeatureCard_StretchTwo key={challengeTag} tag={challengeTag} title={project.challengetitle} idx={0}>
              {project.challenge}
            </FeatureCard_StretchTwo>
            <FeatureCard_StretchTwo key={roleTag} tag={roleTag} title={project.role} idx={1}>
              {project.technologies}
            </FeatureCard_StretchTwo>
          </>
        }
      </div>

    </section>
  );
}

export default FeatureChallengeRoleSection;
