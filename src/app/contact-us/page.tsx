import BreadCrumb from "../components/BreadCrumb";
import Image from "next/image";
import nextConfig from "../../../next.config";

const basePath = nextConfig.basePath;

export default function ContactUs() {
  return (
    <>
      <div className="flex flex-col lg:flex-row">
        <div className="bg-brand-secondary-normal flex flex-col gap-4 p-14 lg:w-1/2">
          <BreadCrumb />
          <form className="flex flex-col gap-8" method="POST">
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="h-10 border border-gray-500 p-2"
                placeholder="Enter Email"
                required
                name="email"
                id="email"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                className="h-10 border border-gray-500 p-2"
                placeholder="Enter Subject"
                required
                name="_subject"
                id="subject"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message">Message</label>
              <textarea
                rows={7}
                className="resize-none border border-gray-500 p-2"
                placeholder="Enter Message"
                required
                name="message"
                id="message"
              ></textarea>
            </div>
            <button className="bg-brand-primary-normal resize-none p-4 text-white">
              Send
            </button>
          </form>
        </div>
        <div className="relative lg:w-1/2">
          <Image fill={true} src={`${basePath}/contact-us.png`} alt="" />
        </div>
      </div>
    </>
  );
}
