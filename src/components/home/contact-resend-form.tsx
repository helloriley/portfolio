import React, {useState, useMemo} from "react";
import {
  Button,
  Card,
  CardBody,
  Input,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import { actions } from "astro:actions";

// Note: Override fix for TextArea border focus issue in contact form below.

export function ContactSection() {
  const [email, setEmail] = useState('');
  const [emailsent, setEmailSent] = useState(false);
  const emailIsValid = useMemo(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email), [email]);

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
        <CardBody className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
          <div className="rounded-2xl bg-gray-900 lg:p-20 p-10 lg:max-w-xl">
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
              className="lg:mb-12 mb-8 text-base opacity-60 max-w-sm"
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
          </div>
          <form
            action={actions.send} method="POST"
            className="flex flex-col gap-12 p-2 lg:max-w-xl"
          >
            <div className="grid grid-cols-2 gap-6">
              <Input
                color="gray"
                size="lg"
                variant="static"
                label="First Name"
                name="first-name"
                placeholder="eg. Tony"
                containerProps={{
                  className: "!min-w-full md:mb-0",
                }}
              />
              <Input
                color="gray"
                size="lg"
                variant="static"
                label="Last Name"
                name="last-name"
                placeholder="eg. Stark"
                containerProps={{
                  className: "!min-w-full",
                }}
              />
            </div>
            <div>
              <Input
                color="gray"
                size="lg"
                variant="static"
                label="Your Email *"
                name="from-email"
                type="email"
                placeholder="eg. tonystark@mail.com"
                value={email}
                onChange={(e) => setEmail((e.target as HTMLInputElement).value)}
                containerProps={{
                  className: "!min-w-full",
                }}
              />
              {/* simple inline validation message */}
              <Typography variant="small" color={email ? (emailIsValid ? "blue" : "red") : "gray"} className="mt-1">
                {email ? (emailIsValid ? "Email looks good" : "Enter a valid email address") : "Email will be used to reply to you"}
              </Typography>
            </div>            
            <Textarea
              rows={2}
              color="gray"
              placeholder="What improvements or solutions would you like to work on?"
              name="from-message"
              className="placeholder:border-none border-none focus:border-none placeholder:outline-1 placeholder:outline-blue-gray-200 outline-1 outline-blue-gray-200 focus:outline-2 focus:outline-gray-900 "
              containerProps={{
                className: "!min-w-full",
              }}
              labelProps={{
                className: "hidden",
              }}
            />
            <div className="grid grid-cols-2 gap-6">
              <Typography variant="small" color="blue-gray" className="mt-1">
                {emailsent ? "Thank you! Your message has been sent. We'll get back to you soon." : ""}
              </Typography>
              <div className="flex w-full !justify-end">
                <Button
                  type="submit"
                  disabled={!emailIsValid}
                  className={`w-full md:w-fit ${!emailIsValid ? "opacity-60 pointer-events-none" : "hover:bg-blue-gray-800"}`}
                  color="gray"
                  onClick={() => setEmailSent(true)}
                >
                  Send message
                </Button>
              </div>
            </div>
          </form>
        </CardBody>
      </Card>
    </section>
  );
}

export default ContactSection;