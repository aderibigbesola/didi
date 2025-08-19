import Image from "next/image";
import Link from "next/link";

function BenefitCard({
  imgSrc,
  imgSrc2,
  head,
  body,
}: {
  imgSrc: string;
  imgSrc2: string;
  head: string;
  body: string;
}) {
  return (
    <div className="bg-brand-primary-normal flex flex-col items-center gap-5 p-5">
      <Image
        className="block md:hidden lg:block"
        width={500}
        height={200}
        src={imgSrc}
        alt=""
      />
      <Image
        className="hidden md:block lg:hidden"
        width={1000}
        height={200}
        src={imgSrc2}
        alt=""
      />
      <div className="flex flex-col justify-center text-white">
        <p className="text-lg font-[600]">{head}</p>
        <p>{body}</p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <div className="relative flex min-h-[60svh] items-center bg-[url('/landing.png')] bg-cover p-7 lg:min-h-[95svh] lg:p-14">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="z-10 flex flex-col gap-3 md:max-w-2/3 lg:max-w-1/2">
          <h1 className="text-4xl leading-tight text-white md:text-5xl lg:text-6xl">
            Empowering the Deaf, Building Inclusive Communities
          </h1>
          <p className="text-white lg:text-lg">
            Offering vital resources and advocating for the rights of Deaf
            individuals to thrive
          </p>
          <Link href="" className="self-start rounded bg-white px-7 py-3">
            Learn More
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-10 p-7 lg:p-14">
        <h2 className="text-brand-primary-dark text-4xl lg:max-w-1/2 lg:text-center lg:text-5xl">
          Building Futures Through The Difference We Make
        </h2>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <BenefitCard
            imgSrc={`${process.env.PAGES_BASE_PATH || ""}/placeholder1.png`}
            imgSrc2={`${process.env.PAGES_BASE_PATH || ""}/placeholder2.png`}
            head="Empowering Through Education"
            body="We cultivate adult literacy in English Sign Language and provide vital academic support for Deaf students."
          />
          <BenefitCard
            imgSrc={`${process.env.PAGES_BASE_PATH || ""}/placeholder1.png`}
            imgSrc2={`${process.env.PAGES_BASE_PATH || ""}/placeholder2.png`}
            head="Championing Deaf Rights"
            body="We cultivate adult literacy in English Sign Language and provide vital academic support for Deaf students."
          />
          <BenefitCard
            imgSrc={`${process.env.PAGES_BASE_PATH || ""}/placeholder1.png`}
            imgSrc2={`${process.env.PAGES_BASE_PATH || ""}/placeholder2.png`}
            head="Bridging Communication Gaps"
            body="Facilitate communication through interpreter training and student support for Deaf inclusion"
          />
        </div>
      </div>
      <div className="bg-brand-secondary-normal p-7 lg:px-14">
        <div className="flex flex-col-reverse gap-5 rounded-xl bg-white bg-[url('/call-to-action-bg-xs.svg')] bg-cover p-5 md:bg-[url('/call-to-action-bg-s.svg')] md:p-7 lg:flex-row lg:gap-0 lg:bg-[url('/call-to-action-bg.svg')] lg:p-10">
          <div className="flex w-full flex-col justify-center gap-5">
            <div className="flex flex-col gap-2">
              <h2 className="text-brand-primary-dark text-center text-4xl lg:text-left">
                Our Driving Force
              </h2>
              <p className="text-brand-primary-dark text-center lg:text-left">
                Understand the driving force behind Deaf Inclusion and
                Development Initiative.
              </p>
            </div>
            <Link
              href={""}
              className="bg-brand-primary-normal self-center rounded px-7 py-3 text-white lg:self-start"
            >
              Our Story & Objectives
            </Link>
          </div>
          <div className="flex w-full justify-center overflow-clip rounded-xl">
            <Image
              className="hidden lg:block"
              width={1920}
              height={1080}
              src={`${process.env.PAGES_BASE_PATH || ""}/call-to-action.png`}
              alt=""
            />
            <Image
              className="block lg:hidden"
              width={720}
              height={500}
              src={`${process.env.PAGES_BASE_PATH || ""}/call-to-action-s.png`}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
