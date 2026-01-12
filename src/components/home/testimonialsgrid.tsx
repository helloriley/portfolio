import {
  Card,
  CardBody,
  Typography,
  CardHeader,
} from "@material-tailwind/react";

const baseURL = import.meta.env.BASE_URL || "/portfolio";
interface TestimonialCardPropsType {
  img: string;
  client: string;
  title: string;
  clientInfo: string;
}

function TestimonialCard({
  img,
  client,
  title,
  clientInfo,
}: TestimonialCardPropsType) {
  return (
    <Card shadow={true} className="bg-blue-gray-50/50 rounded-2xl p-6 shadow-md ">
      <CardHeader color="transparent" floated={false} shadow={false}>
        <div>
          <Typography
            color="blue-gray"
            className="lg:mb-10 mb-4 text-lg font-medium"
          >
            <div className="mr-4 mt-1 inline-block flex-shrink-0 w-6 h-6" aria-hidden>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 216C0 149.7 53.7 96 120 96l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64L0 216zm256 0c0-66.3 53.7-120 120-120l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64l0-136z"/></svg>
            </div>

            {title}
            &quot;
          </Typography>

        </div>
      </CardHeader>
      <CardBody className="px-4 py-0 flex flex-wrap-reverse gap-x-6 justify-between items-center">
        <div>
          <Typography variant="h6" color="blue-gray">
            {client}
          </Typography>
          <Typography
            variant="paragraph"
            className="font-normal !text-blue-gray-400"
          >
            {clientInfo}
          </Typography>
        </div>
        {
          img == "" ? null :    
          <img src={baseURL + img} className="max-w-[8rem]" alt={client} />
        }
      </CardBody>
    </Card>
  );
}

const testimonials = [
  {
    title:
      "... From my perspective, Michelle was a critical part of our team, being able to bring a range of perspectives from strategic to user centric design to coding and for me, this is the crucial talent that a UX designer should have - thinking about the work at macro or holistic level and ensuring that it fits within a system or framework so that we can be more efficient in building out new journeys...",
    client: "Richard H",
    clientInfo: "Chief Technical Officer, The Sun Exchange",
    img: "",
  },
  {
    title:
      "...She played a pivotal role in enhancing the user experience and interface of our products, resulting in increased user satisfaction and improved product usability. Michelle's ability to translate complex technical requirements into user-friendly designs and interactions showcased her talent for marrying aesthetics with functionality...",
    client: "Sean de G",
    clientInfo: "Director, Pandoran InSpec",
    img: "",
  },
  {
    title:
      "...She worked with a number of our teams who were in the process of rewriting the existing hospital administration system for the organisation (Life Healthcare owns over 75 facilities in Southern Africa). She worked with a number of technical (backend) designers, developers, and user representatives to produce what we felt was a simple, sophisticated aesthetic for these applications ...",
    client: "Gavin P",
    clientInfo: "Senior Solutions Architect, Dariel Solutions",
    img: "",
  },
  {
    title:
      "...Michelle has been deployed on a number of projects ranging from the Healthcare industry to Entertainment and Broadcasting. She has proven to us many times over that she is a capable and talented UX Designer and Front-end Developer, on whom we can trust and rely on to deliver mission critical business projects... Without exception the quality of Michelle’s work has been of the highest order, displaying not only a high level of technical competence but also a passion for the work she does ...",
    client: "Greg V",
    clientInfo: "Executive Director, Dariel Solutions",
    img: "",
  }
];

export function TestimonialSection() {
  return (
    <section className="px-8 py-10 lg:py-16">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <Typography color="dark" className="mb-2 !font-semibold text-lg uppercase">
            <span className="text-accent">Testimonials</span>
          </Typography>
          <Typography
            variant="h2"
            color="blue-gray"
            className="mb-4 !text-2xl lg:!text-4xl"
          >
            Generous words from clients and colleagues
          </Typography>
        </div>
        <div className="grid gap-10 grid-cols-1 lg:grid-cols-2 md:mx-10 lg:mx-20">
          {testimonials.map((props, key) => (
            <TestimonialCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;