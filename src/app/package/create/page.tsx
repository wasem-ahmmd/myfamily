import React from "react";
import CreatePackInput from "@/components/package/CreatePackInput";
import CreateCountry from "@/components/package/CreateCountry";

const page = () => {
  return (
    <>
      <CreateCountry /> 
      <CreatePackInput />
    </>
  );
};

export default page;
