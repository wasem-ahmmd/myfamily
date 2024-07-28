import React from "react";
import Link from "next/link";
import SocialMedia from "./SocialMedia";

interface formCardWarrper {
  children: React.ReactNode;
  padingtop?: string;
  innerwidth?: string
  headerLabel: string;
  showSocial?: boolean;
}

const AuthCard = ({
  children,
  padingtop = "pt-5 min-h-screen xsm:w-96",
  innerwidth = "lg:max-w-sm",
  headerLabel,
  showSocial,
}: formCardWarrper) => {
  return (
    <div className="flex justify-center items-center ">
      <div className={`relative bg-white  lg:w-[580px]  w-full p-10  border  shadow-md flex items-center ${padingtop} dark:bg-slate-900 z-10`}>
        <div className={`w-full   mx-auto space-y-7 ${innerwidth}`}>
          <div className="card-header">
            <h2 className="text-lg xxs:text-xl xsm:text-xxl font-600 font-sans mb-1.5 ">
              {headerLabel}
            </h2>
          </div>
          {children}
          {showSocial && <SocialMedia />}
        </div>
      </div>
    </div>
  );
};

export default AuthCard;
