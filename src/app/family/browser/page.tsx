import CardW250 from "@/components/common/cards/CardW250";
import Cardw528 from "@/components/common/cards/Cardw528";
import Link from "next/link";

export default function FamilyHome() {
  return (
    <div className="xxl:max-w-[1220px] max-w-[1065px] mx-auto">
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-2.5">
        {/* <CardW250 /> */}
        </div>


        <div className="sm:my-6 my-3 flex items-center justify-between lg:mt-5 border-b  px-4 rounded-xl shadow-sm">
          <div className="">
            <h2 className="md:text-lg text-base font-600 font-sans text-black">
              Suggestions
            </h2>
            <p className="font-400 font-sans text-sm text-gray-500 leading-6">
              Find a Familys You Might Be Interested In.
            </p>
          </div>
          <Link href={''} className="text-blue-500 sm:block hidden text-sm">See all</Link>
        </div>


      <div className="grid md:grid-cols-2 md:gap-2 gap-3">
        <Cardw528 />
        <Cardw528 />
        <Cardw528 />
        <Cardw528 />
        <Cardw528 />
        <Cardw528 />
        <Cardw528 />
        <Cardw528 />
      </div>
    </div>
  );
}
