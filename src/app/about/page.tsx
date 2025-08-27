import Image from "next/image";
import nextConfig from "../../../next.config";

const basePath = nextConfig.basePath;

import BreadCrumb from "../components/BreadCrumb";

export default function About() {
  return (
    <>
      <div className="flex flex-col gap-10 bg-blue-100 px-7 py-10 lg:px-14 lg:py-30">
        <BreadCrumb />
        <div className="flex flex-col gap-7 lg:flex-row">
          <h1 className="text-brand-primary-dark text-5xl font-bold lg:w-1/2">
            Our journey towards inclusivity
          </h1>
          <p className="lg:w-1/2">
            At Deaf Inclusion, we believe in a world where every individual,
            regardless of their abilities, has the opportunity to thrive and
            contribute meaningfully to society. Our initiative is dedicated to
            championing the rights and inclusion of the Deaf community, paving
            the way for their integration into every aspect of life – from the
            comfort of their homes to active participation in the broader
            societal landscape
          </p>
        </div>
      </div>
      <div className="">
        <div className="flex flex-col md:flex-row">
          <div className="bg-brand-primary-normal relative flex w-full flex-col justify-center gap-2 px-7 py-20 text-white lg:px-20 lg:py-54">
            <h2 className="bg-brand-secondary-normal absolute top-0 px-4 py-2 text-black">
              MISSION
            </h2>
            <Image
              height={15}
              width={15}
              src={`${basePath}/about-icon-white.svg`}
              alt=""
            />
            <p className="text-xl font-bold">
              Build a world where Deaf individuals have equal access to
              opportunities, where their unique skills and talents are
              recognized and celebrated, and where barriers to their full
              participation in entrepreneurship and technology are dismantled,
              creating a more inclusive and equitable society for all
            </p>
          </div>
          <div className="relative md:w-9/10 lg:w-2/3">
            <Image
              fill
              src={`${basePath}/about-mission.png`}
              alt=""
              className="hidden md:block"
            />
            <Image
              width={1920}
              height={1080}
              src={`${basePath}/about-mission-mobile.png`}
              alt=""
              className="block md:hidden"
            />
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row">
          <div className="relative md:w-9/10 lg:w-2/3">
            <Image
              fill
              src={`${basePath}/about-vision.png`}
              className="hidden md:block"
              alt=""
            />
            <Image
              width={1920}
              height={1080}
              src={`${basePath}/about-vision-mobile.png`}
              alt=""
              className="block md:hidden"
            />
          </div>
          <div className="bg-brand-secondary-normal relative flex w-full flex-col justify-center gap-2 px-7 py-20 lg:px-20 lg:py-54">
            <h2 className="bg-brand-primary-normal absolute top-0 px-4 py-2 text-white">
              VISION
            </h2>
            <Image
              height={15}
              width={15}
              src={`${basePath}/about-icon-black.svg`}
              alt=""
            />
            <p className="text-xl font-bold">
              Empower Deaf individuals by fostering inclusion, promoting
              entrepreneurship, and leveraging technology to create
              opportunities for their advancement and integration into society
            </p>
          </div>
        </div>
      </div>
      <div className="relative px-7 py-14 md:px-14">
        <h2 className="bg-brand-secondary-normal absolute top-0 px-4 py-2 text-black">
          OBJECTIVES
        </h2>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <div className="bg-brand-primary-normal flex flex-col gap-20 rounded-lg px-5 py-10 text-white">
            <div>
              <p className="text-xl font-bold">01.</p>
              <p className="text-xl font-bold">
                Empowerment Through Literacy & Skills
              </p>
            </div>
            <p>
              Providing English Sign Language literacy and vocational training
              to empower deaf individuals and enable them to assert their rights
            </p>
          </div>
          <div className="bg-brand-primary-normal flex flex-col gap-20 rounded-lg px-5 py-10 text-white">
            <div>
              <p className="text-xl font-bold">02.</p>
              <p className="text-xl font-bold">
                Advocating for Deaf Rights & Awareness
              </p>
            </div>
            <p>
              Championing the rights of the deaf community and disseminating
              crucial information about their needs and challenges
            </p>
          </div>
          <div className="bg-brand-primary-normal flex flex-col gap-20 rounded-lg px-5 py-10 text-white">
            <div>
              <p className="text-xl font-bold">03.</p>
              <p className="text-xl font-bold">
                Developing Sign Language Capacity
              </p>
            </div>
            <p>
              Training Sign Language Interpreters and offering tutorials and
              coaching for deaf students&apos; educational advancement
            </p>
          </div>
          <div className="bg-brand-primary-normal flex flex-col gap-20 rounded-lg px-5 py-10 text-white">
            <div>
              <p className="text-xl font-bold">04.</p>
              <p className="text-xl font-bold">
                Establishing Dedicated Deaf Education Centers
              </p>
            </div>
            <p>
              Operating specialized educational institutions for the deaf to
              provide training and further the organization&apos;s goals
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="bg-brand-primary-normal relative flex w-full flex-col gap-4 px-7 pt-20 pb-10 text-white lg:px-20 lg:py-54">
          <h2 className="bg-brand-secondary-normal absolute top-0 px-4 py-2 text-black">
            FOUNDER
          </h2>
          <Image
            height={15}
            width={15}
            src={`${basePath}/about-icon-white.svg`}
            alt=""
          />
          <p className="text-xl font-bold">
            Build a world where Deaf individuals have equal access to
            opportunities, where their unique skills and talents are recognized
            and celebrated, and where barriers to their full participation in
            entrepreneurship and technology are dismantled, creating a more
            inclusive and equitable society for all
          </p>
          <Image
            width={700}
            height={500}
            src={`${basePath}/about-founder-mobile.png`}
            alt=""
            className="block md:hidden"
          />
        </div>
        <div className="relative md:w-9/10 lg:w-2/3">
          <Image
            fill={true}
            src={`${basePath}/about-founder.png`}
            alt=""
            className="hidden md:block"
          />
        </div>
      </div>
    </>
  );
}
