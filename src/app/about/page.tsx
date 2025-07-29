import Image from "next/image";

import BreadCrumb from "../components/BreadCrumb";

export default function About() {
  return (
    <>
      <div className="flex flex-col gap-10 bg-gray-300 p-7 lg:p-14">
        <BreadCrumb />
        <div className="flex flex-col gap-7 lg:flex-row">
          <h1 className="text-brand-primary-dark text-5xl lg:w-1/2">
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
          <div className="bg-brand-primary-normal relative px-7 py-30 lg:py-56 text-white md:w-2/3 lg:px-20">
            <h2 className="bg-brand-secondary-normal absolute top-0 px-4 py-2 text-black">
              MISSION
            </h2>
            <Image height={15} width={15} src="/about-icon-white.svg" alt="" />
            <p>
              Build a world where Deaf individuals have equal access to
              opportunities, where their unique skills and talents are
              recognized and celebrated, and where barriers to their full
              participation in entrepreneurship and technology are dismantled,
              creating a more inclusive and equitable society for all
            </p>
          </div>
          <div className="md:w-1/3"></div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3"></div>
          <div className="bg-brand-secondary-normal relative px-7 py-30 lg:py-56 md:w-2/3 lg:px-20">
            <h2 className="bg-brand-primary-normal absolute top-0 px-4 py-2 text-white">
              VISION
            </h2>
            <Image height={15} width={15} src="/about-icon-black.svg" alt="" />
            <p>
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
              <p className="text-xl">01.</p>
              <p className="text-xl">Empowerment Through Literacy & Skills</p>
            </div>
            <p>
              Providing English Sign Language literacy and vocational training
              to empower deaf individuals and enable them to assert their rights
            </p>
          </div>
          <div className="bg-brand-primary-normal flex flex-col gap-20 rounded-lg px-5 py-10 text-white">
            <div>
              <p className="text-xl">02.</p>
              <p className="text-xl">Advocating for Deaf Rights & Awareness</p>
            </div>
            <p>
              Championing the rights of the deaf community and disseminating
              crucial information about their needs and challenges
            </p>
          </div>
          <div className="bg-brand-primary-normal flex flex-col gap-20 rounded-lg px-5 py-10 text-white">
            <div>
              <p className="text-xl">03.</p>
              <p className="text-xl">Developing Sign Language Capacity</p>
            </div>
            <p>
              Training Sign Language Interpreters and offering tutorials and
              coaching for deaf students' educational advancement
            </p>
          </div>
          <div className="bg-brand-primary-normal flex flex-col gap-20 rounded-lg px-5 py-10 text-white">
            <div>
              <p className="text-xl">04.</p>
              <p className="text-xl">
                Establishing Dedicated Deaf Education Centers
              </p>
            </div>
            <p>
              Operating specialized educational institutions for the deaf to
              provide training and further the organization's goals
            </p>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="bg-brand-primary-normal relative px-7 py-56 text-white md:w-3/5 lg:px-20">
          <h2 className="bg-brand-secondary-normal absolute top-0 px-4 py-2 text-black">
            FOUNDER
          </h2>
          <Image height={15} width={15} src="/about-icon-white.svg" alt="" />
          <p>
            Build a world where Deaf individuals have equal access to
            opportunities, where their unique skills and talents are recognized
            and celebrated, and where barriers to their full participation in
            entrepreneurship and technology are dismantled, creating a more
            inclusive and equitable society for all
          </p>
        </div>
        <div className="md:w-2/5"></div>
      </div>
    </>
  );
}
