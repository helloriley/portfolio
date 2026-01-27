import {
  Card,
  CardBody,
  Typography,
  CardHeader,
} from "@material-tailwind/react";
import type { CollectionEntry } from "astro:content";
import type { ITestimonialCollection } from "../../content.config";

const baseURL = import.meta.env.BASE_URL || "/portfolio";

function TestimonialCard({...props}: ITestimonialCollection) {
  const {isdraft, testimonial, name, rolecompany} = props.testimonial;
  return (
    <Card shadow={true} className="bg-blue-gray-50/40 hover:bg-accent-50/30 transition-colors rounded-2xl p-6 shadow-md ">
      <CardHeader color="transparent" floated={false} shadow={false}>
        <div>
          <Typography
            color="blue-gray"
            className="lg:mb-10 mb-4 text-lg font-medium"
          >
            <div className="mr-4 mt-1 inline-block flex-shrink-0 w-6 h-6" aria-hidden>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 216C0 149.7 53.7 96 120 96l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64L0 216zm256 0c0-66.3 53.7-120 120-120l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64l0-136z"/></svg>
            </div>

            {testimonial}
            &quot;
          </Typography>

        </div>
      </CardHeader>
      <CardBody className="px-4 py-0 flex flex-wrap-reverse gap-x-6 justify-between items-center">
        <div>
          <Typography variant="h6" color="blue-gray">
            {name}
          </Typography>
          <Typography
            variant="paragraph"
            className="font-normal !text-blue-gray-400"
          >
            {rolecompany}
          </Typography>
        </div>
      </CardBody>
    </Card>
  );
}

export function TestimonialSection({...props}: CollectionEntry<'testimonial'>[]) {
  const testimonials = props.testimonials.length > 0 ? props.testimonials : [];
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
            <TestimonialCard key={key} testimonial={props.data} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;