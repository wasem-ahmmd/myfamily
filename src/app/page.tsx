import Header from "@/components/common/headers/Header";
import MainSideBar from "@/components/common/sidebars/MainSideBar";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <Header />
      <MainSideBar />
      <main className="xxl:ml-side  xl:ml-side-sm p-2.5 h-[calc(100vh-var(--m-top))] mt-top-custom">
        <Link href={'/login'}>login</Link>
        <Link href={'/signup'}>signup</Link>
      </main>
    </>
  );
}
