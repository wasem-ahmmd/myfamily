import Header from "@/components/common/headers/Header";
import MainSideBar from "@/components/common/sidebars/MainSideBar";
// import { sideBarlink } from "@/data/Static";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      {/* <MainSideBar>
        {sideBarlink?.map((item, index) => (
          <Link href={item.link} key={item.title}>
            <div className="flex items-center gap-4 px-4 py-2 rounded-xl w-auto hover:bg-BG-4 mb-1 cursor-pointer">
              <div className="text-xl leading-loose">{item?.icons}</div>
              <h1 className="font-sans font-600">{item?.title}</h1>
            </div>
          </Link>
        ))}
      </MainSideBar> */}
      <main className="xxl:ml-side  xl:ml-side-sm p-2.5 h-[calc(100vh-var(--m-top))] mt-top-custom">
        <Link href={"/login"}>login</Link>
        <Link href={"/signup"}>signup</Link>
        <Link href={"/family"}>family</Link>
      </main>
    </>
  );
}
