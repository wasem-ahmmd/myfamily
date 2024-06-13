import FeedUI from "@/components/common/feed/FeedUI";
import Header from "@/components/common/headers/Header";
import MainSideBar from "@/components/common/sidebars/MainSideBar";
import PeopleKnow from "@/components/common/widget/PeopleKnow";

export default function feed() {
    return (
      <>
        <Header />
        <MainSideBar />
        <main className="xxl:ml-side  xl:ml-side-sm py-2.5 xl:pl-10 px-4  h-[calc(100vh-var(--m-top))] mt-top-custom">
          <div className="lg:flex xxl:gap-16 gap-12 max-w-[1065px] mx-auto">
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
  