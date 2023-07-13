import React from "react";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import AddContent from "../components/AddContent/AddContent";

const AddPage = () => {
  return (
    <>
      <Header></Header>
      <div class="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 ">
        <Sidebar></Sidebar>
        <div class="lg:pl-[14rem]  mt-[5.8125rem]">
          <AddContent></AddContent>
        </div>
      </div>
    </>
  );
};

export default AddPage;
