import Link from "next/link";
import React from "react";
import SocialMedia from "./SocialMedia";

interface formCardWarrper {
  children: React.ReactNode;
  headerLabel: string;
  headerPara: string;
  footerDivder: string;
  buttonLabel: string;
  buttonHref: string;
  showSocial?: boolean;
}

const AuthCard = ({
  children,
  headerLabel,
  headerPara,
  buttonLabel,
  footerDivder,
  buttonHref,
  showSocial,
}: formCardWarrper) => {
  return (
    <div className="flex justify-center items-center ">
      <div className="relative bg-white  lg:w-[580px] xsm:w-96 w-full p-10 min-h-screen border  shadow-md flex items-center pt-10 dark:bg-slate-900 z-10">
        <div className="w-full  lg:max-w-sm mx-auto space-y-10">
          <div className="card-header">
            <h2 className="text-lg xxs:text-xl xsm:text-2xl font-600 font-sans mb-1.5 ">
              {headerLabel}
            </h2>
            <p className="text-xs xxs:text-sm text-gray-700 font-400 font-sans">
              {headerPara}
              {" "}
              <Link href={buttonHref} className="text-blue-700 font-600 font-sans hover:underline">
                {buttonLabel}
              </Link>
            </p>
          </div>
          {children}
          <div className="text-center flex items-center gap-6">
          <hr className="flex-1 border-slate-200 dark:border-slate-800" />
          {footerDivder}
          <hr className="flex-1 border-slate-200 dark:border-slate-800"/>
          </div>
          {showSocial && <SocialMedia />}
        </div>
      </div>
    </div>
  );
};

export default AuthCard;
