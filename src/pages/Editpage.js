import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import EditContent from "../components/EditContent/EditContent";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import { fetchJob } from "../features/Jobs/JobsSlice";
const Editpage = () => {
  return (
    <>
      <Header></Header>
      <div class="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 ">
        <Sidebar></Sidebar>
        <div class="lg:pl-[14rem]  mt-[5.8125rem]">
          <EditContent></EditContent>
        </div>
      </div>
    </>
  );
};

export default Editpage;
