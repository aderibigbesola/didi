import Image from "next/image";
import Link from "next/link";

function BenefitCard({
  imgSrc,
  head,
  body,
}: {
  imgSrc: string;
  head: string;
  body: string;
}) {
  return (
    <div className="bg-brand-primary-normal flex flex-col items-center max-w-lg p-5 gap-5">
      <Image width={500} height={200} src={imgSrc} alt="" />
      <div className="text-white flex flex-col justify-center">
        <p className="text-lg font-[600]">{head}</p>
        <p>{body}</p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <div className="relative min-h-[90svh] bg-[url('/landing.png')] bg-cover flex items-center p-14">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="z-10 flex flex-col gap-3 max-w-1/2">
          <h1 className="text-6xl text-white leading-tight">
            Empowering the Deaf, Building Inclusive Communities
          </h1>
          <p className="text-white text-lg">
            Offering vital resources and advocating for the rights of Deaf
            individuals to thrive
          </p>
          <Link href="" className="bg-white px-7 py-3 rounded self-start">
            Learn More
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center p-14 gap-10">
        <h2 className="text-5xl max-w-1/2 text-center text-brand-primary-dark">
          Building Futures Through The Difference We Make
        </h2>
        <div className="grid grid-cols-3 gap-10">
          <BenefitCard
            imgSrc="/placeholder1.png"
            head="Empowering Through Education"
            body="We cultivate adult literacy in English Sign Language and provide vital academic support for Deaf students."
          />
          <BenefitCard
            imgSrc="/placeholder1.png"
            head="Championing Deaf Rights"
            body="We cultivate adult literacy in English Sign Language and provide vital academic support for Deaf students."
          />
          <BenefitCard
            imgSrc="/placeholder1.png"
            head="Bridging Communication Gaps"
            body="Facilitate communication through interpreter training and student support for Deaf inclusion"
          />
        </div>
      </div>
      <div className="bg-brand-secondary-normal p-15">
        <div className="flex bg-white rounded-xl p-10 bg-[url('/call-to-action-bg.svg')] bg-cover">
          <div className="w-full flex flex-col justify-center gap-5">
            <div className="flex flex-col gap-2">
              <h2 className="text-brand-primary-dark text-4xl">
                Our Driving Force
              </h2>
              <p className="text-brand-primary-dark">
                Understand the driving force behind Deaf Inclusion and
                Development Initiative.
              </p>
            </div>
            <Link
              href={""}
              className="px-7 py-3 bg-brand-primary-normal text-white self-start rounded"
            >
              Our Story & Objectives
            </Link>
          </div>
          <div className="w-full rounded-xl overflow-clip">
            <Image
              width={1920}
              height={1080}
              src={"/call-to-action.png"}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
