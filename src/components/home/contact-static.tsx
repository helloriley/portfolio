
import {
  Button,
  Card,
  CardBody,
  Input,
  Textarea,
  Typography,
} from "@material-tailwind/react";
//import { actions } from "astro:actions";

const baseURL = import.meta.env.BASE_URL || "/portfolio";

export function ContactSection() {
  return (
    <section id="contact" className="px-8 py-10 lg:py-16">
      <div className="container mx-auto mb-10 text-center lg:mb-20">
        <Typography color="dark" className="mb-2 font-bold text-lg uppercase">
            <span className="text-blue">Contact</span>
        </Typography>
        <Typography
          variant="h2"
          color="blue-gray"
          className="mb-4 !text-3xl lg:!text-4xl"
        >
          Ready to improve your web business?
        </Typography>
        <Typography variant="lead" className="mx-auto lg:w-7/12 text-blue-gray-800">
          Gain better traction with your clients. How may I assist in transforming your website or product?
          Send me an email. I look forward to hearing from you and how we can work towards your goals.
        </Typography>
      </div>
      <Card
        shadow={true}
        className="max-w-[85rem] mx-auto rounded-2xl"
      >
        <CardBody className="grid grid-cols-1 gap-8 lg:grid-cols-2 items-center">
          <div className="rounded-2xl bg-gray-900 lg:p-20 p-10">
            <Typography
              variant="h4"
              color="white"
              className="mb-4 text-xl lg:text-3xl"
            >
              Get in Touch
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="lg:mb-12 mb-8 text-base opacity-70 max-w-sm"
            >
              Strategic design and development can drive measurable results for your business. Let&apos;s discuss how I can help you achieve your goals.
            </Typography>
            <a href="mailto:hello.mriley@gmail.com?subject=Portfolio%20Enquiry" target="_blank">
              <div className="my-4 flex items-center gap-5">
                  <div className="inline-block h-5 w-5 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="white" d="M290.5 287.7L491.4 86.9 359 456.3 290.5 287.7zM457.4 53L256.6 253.8 88 185.3 457.4 53zM38.1 216.8l205.8 83.6 83.6 205.8c5.3 13.1 18.1 21.7 32.3 21.7 14.7 0 27.8-9.2 32.8-23.1L570.6 8c3.5-9.8 1-20.6-6.3-28s-18.2-9.8-28-6.3L39.4 151.7c-13.9 5-23.1 18.1-23.1 32.8 0 14.2 8.6 27 21.7 32.3z"/></svg>
                  </div>
                  <Typography variant="h6" color="white" className="hover:text-blue-300">
                    hello.mriley@gmail.com
                  </Typography>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/michelle-r-3b26415/" target="_blank">
              <div className="my-4 flex items-center gap-5">
                  <div className="inline-block h-5 w-5 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="white" d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm5 170.2l66.5 0 0 213.8-66.5 0 0-213.8zm71.7-67.7a38.5 38.5 0 1 1 -77 0 38.5 38.5 0 1 1 77 0zM317.9 416l0-104c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9l0 105.8-66.4 0 0-213.8 63.7 0 0 29.2 .9 0c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9l0 117.2-66.4 0z"/></svg>
                  </div>
                  <Typography variant="h6" color="white" className="hover:text-blue-300">
                    LinkedIn
                  </Typography>
              </div>
            </a>
            <div className="my-4 flex items-center gap-5">
                  <div className="inline-block h-5 w-5 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="white" d="M55.7 199.7l30.9 30.9c6 6 14.1 9.4 22.6 9.4l21.5 0c8.5 0 16.6 3.4 22.6 9.4l29.3 29.3c6 6 9.4 14.1 9.4 22.6l0 37.5c0 8.5 3.4 16.6 9.4 22.6l13.3 13.3c6 6 9.4 14.1 9.4 22.6l0 18.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-2.7c0-8.5 3.4-16.6 9.4-22.6l45.3-45.3c6-6 9.4-14.1 9.4-22.6l0-34.7c0-17.7-14.3-32-32-32l-82.7 0c-8.5 0-16.6-3.4-22.6-9.4l-16-16c-4.2-4.2-6.6-10-6.6-16 0-12.5 10.1-22.6 22.6-22.6l34.7 0c12.5 0 22.6-10.1 22.6-22.6 0-6-2.4-11.8-6.6-16l-19.7-19.7C242 130 240 125.1 240 120s2-10 5.7-13.7l17.3-17.3c5.8-5.8 9.1-13.7 9.1-21.9 0-7.2-2.4-13.7-6.4-18.9-3.2-.1-6.4-.2-9.6-.2-95.4 0-175.7 64.2-200.3 151.7zM464 256c0-34.6-8.4-67.2-23.4-95.8-6.4 .9-12.7 3.9-17.9 9.1l-13.4 13.4c-6 6-9.4 14.1-9.4 22.6l0 34.7c0 17.7 14.3 32 32 32l24.1 0c2.5 0 5-.3 7.3-.8 .4-5 .5-10.1 .5-15.2zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z"/></svg>
                  </div>
                  <Typography variant="h6" color="white" className="">
                    Working remotely, worldwide
                    <br/><span className="font-normal text-sm text-gray-400">Based in Cape Town, South Africa</span>
                  </Typography>
              </div>
          </div>
          <div className="p-4">
            <img
              src={baseURL + "/images/workspace.jpg"}
              alt="working remotely worldwide"
              className="w-full h-full lg:max-h-[510px] rounded-2xl object-cover "
            />

          </div>
        </CardBody>
      </Card>
    </section>
  );
}

export default ContactSection;