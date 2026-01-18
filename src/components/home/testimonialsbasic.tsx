import {
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";

// TODO: Convert to auto-rotating array of Testimonials

export function TestimonialSectionTwo() {
  return (
    <section className="py-8 px-8 lg:py-16">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <Typography color="dark" className="mb-2 !font-semibold text-lg uppercase">
            <span className="text-blue">Testimonials</span>
          </Typography>
        </div>
        <Card
          shadow={false}
          className="overflow-hidden rounded-3xl !bg-blue-gray-900"
        >
          <CardBody className="flex flex-col-reverse gap-16 py-10 px-14 lg:flex-row">
            <div>
              <Typography
                variant="h4"
                color="white"
                className="mb-10 font-medium leading-normal"
              >
                &quot;We&apos;re not always in the position that we want to be
                at. We&apos;re constantly growing. We&apos;re constantly making
                mistakes. We&apos;re constantly trying to express ourselves and
                actualize our dreams. &quot;
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="font-medium"
              >
                Marcela Glock
              </Typography>
              <Typography
                color="white"
                className="font-normal opacity-70"
              >
                Chief Executive, Spotify
              </Typography>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default TestimonialSectionTwo;
