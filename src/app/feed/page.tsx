import FeedCard from "@/components/common/feed/FeedCard";
import Header from "@/components/common/headers/Header";
import MainSideBar from "@/components/common/sidebars/MainSideBar";
import Link from "next/link";

export default function feed() {
    return (
      <>
        <Header />
        <MainSideBar />
        <main className="xxl:ml-side  xl:ml-side-sm py-2.5 xl:px-0 px-2  h-[calc(100vh-var(--m-top))] mt-top-custom">
          <div className="lg:flex xxl:gap-16 gap-12 max-w-[1065px] mx-auto">
            <div className="max-w-[680px] mx-auto">
              <div className="md:max-w-[580px] mx-auto flex-1 xl:space-y-6 space-y-3">
                <FeedCard />
              </div>
            </div>
            <div className="flex-1">waseem</div>
            </div>
        </main>
      </>
    );
  }
  