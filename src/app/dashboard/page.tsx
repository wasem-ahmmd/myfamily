import React from "react";
import Widget from "@/components/common/widget/Widget";
import { PiTimerFill } from "react-icons/pi";
import { IoDocuments } from "react-icons/io5";
import { HiMiniUsers } from "react-icons/hi2";
import { FiPackage } from "react-icons/fi";
import { GrMoney } from "react-icons/gr";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function DashHome() {
 
  const token = cookies().get("accessToken")
  if (!token) {
    redirect('/');
  }
  return (
    <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-3 3xl:grid-cols-6">
      <Widget
        icon={<PiTimerFill className="h-7 w-7" />}
        title={"Minutes"}
        subtitle={"200,000"}
      />

      <Widget
        icon={<IoDocuments className="h-7 w-7" />}
        title={"Spend Minutes"}
        subtitle={"50,000"}
      />

      <Widget
        icon={<GrMoney className="h-7 w-7" />}
        title={"Earnings"}
        subtitle={"5000"}
      />

      <Widget
        icon={<HiMiniUsers className="h-7 w-7" />}
        title={"Users"}
        subtitle={"133"}
      />

      <Widget
        icon={<FiPackage className="h-7 w-7" />}
        title={"Packages"}
        subtitle={"4"}
      />
    </div>
  );
}
