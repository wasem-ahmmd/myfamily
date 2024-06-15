import FeedUI from "@/components/common/feed/FeedUI";
import Header from "@/components/common/headers/Header";
import MainSideBar from "@/components/common/sidebars/MainSideBar";
import PeopleKnow from "@/components/common/widget/PeopleKnow";
import { sideBarlink } from "@/data/Static";
import Link from "next/link";

export default function feed() {
  return (
    <>
      <Header />
      <MainSideBar>
        {sideBarlink?.map((item, index) => (
          <Link href={item.link} key={item.title}>
            <div className="flex items-center gap-4 px-4 py-2 rounded-xl w-auto hover:bg-BG-4 mb-1 cursor-pointer">
              <div className="text-xl leading-loose">{item?.icons}</div>
              <h1 className="font-sans font-600">{item?.title}</h1>
            </div>
          </Link>
        ))}
      </MainSideBar>
      <main className="xxl:ml-side  xl:ml-side-sm py-2.5  h-[calc(100vh-var(--m-top))] mt-top-custom">
        <div className="lg:flex xxl:gap-16 gap-12 max-w-[1065px] mx-auto xl:pl-8 px-2  ">
          <div className="max-w-[680px] mx-auto">
            <div className="md:max-w-[580px] mx-auto flex-1 xl:space-y-6 space-y-3">
              <FeedUI />
            </div>
          </div>
          <div className="flex-1 lg:pl-10">
            <div className="lg:space-y-4 lg:pb-8 max-lg:grid sm:grid-cols-2 max-lg:gap-6 uk-sticky uk-active uk-sticky-fixed">
              <PeopleKnow />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
