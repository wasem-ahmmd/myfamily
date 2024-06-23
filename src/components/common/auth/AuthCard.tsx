import Link from "next/link";
import React from "react";
import SocialMedia from "./SocialMedia";

interface formCardWarrper {
  children: React.ReactNode;
  padingtop?: string;
  headerLabel: string;
  showSocial?: boolean;
}

const AuthCard = ({
  children,
  padingtop = "pt-5",
  headerLabel,
  showSocial,
}: formCardWarrper) => {
  return (
    <div className="flex justify-center items-center ">
      <div className={`relative bg-white  lg:w-[580px] xsm:w-96 w-full p-10 min-h-screen border  shadow-md flex items-center ${padingtop} dark:bg-slate-900 z-10`}>
        <div className="w-full  lg:max-w-sm mx-auto space-y-10">
          <div className="card-header">
            <h2 className="text-lg xxs:text-xl xsm:text-2xl font-600 font-sans mb-1.5 ">
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
