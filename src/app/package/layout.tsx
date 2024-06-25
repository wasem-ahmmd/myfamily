import type { Metadata } from "next";
import Header from "@/components/common/headers/Header";
import MainSideBar from "@/components/common/sidebars/MainSideBar";
import { Button, buttonVariants } from "@/components/ui/button";
import { packageSideBar } from "@/data/Static";
import { GoPackageDependents } from "react-icons/go";
import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IoReorderThreeOutline } from "react-icons/io5";

export const metadata: Metadata = {
  title: "My Dashbord",
};

export default function DashLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              className={buttonVariants({
                size: "icon",
                className: "px-0 py-0 rounded-full hover:bg-gray-100 xl:hidden",
              })}
            >
              <IoReorderThreeOutline className="text-2xl" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className=" overflow-y-auto px-2 py-28 w-[300px]"
          >
            <div className="overflow-hidden hover:overflow-y-scroll">
              <div className="">
                {packageSideBar?.map((item, index) => (
                  <Link href={item.link} key={item.title}>
                    <div className="flex items-center gap-4 px-4 py-2 rounded-xl w-auto hover:bg-BG-4 mb-1 cursor-pointer">
                      <div className="text-xl leading-loose">{item?.icons}</div>
                      <h1 className="font-sans font-600">{item?.title}</h1>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <SheetClose asChild></SheetClose>
          </SheetContent>
        </Sheet>
      </Header>

      <MainSideBar>
        {packageSideBar?.map((item, index) => (
          <Link href={item.link} key={item.title}>
            <div className="flex items-center gap-4 px-4 py-2 rounded-xl w-auto hover:bg-BG-4 mb-1 cursor-pointer">
              <div className="text-xl leading-loose">{item?.icons}</div>
              <h1 className="font-sans font-600">{item?.title}</h1>
            </div>
          </Link>
        ))}
      </MainSideBar>
      <main className="xxl:ml-side  xl:ml-side-sm p-2.5 h-[calc(100vh-var(--m-top))] mt-top-custom">
        {children}
      </main>
    </>
  );
}
