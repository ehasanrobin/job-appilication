import React from "react";
import Header from "../components/Header/Header";
import JobList from "../components/JobList/JobList";
import Sidebar from "../components/Sidebar/Sidebar";

const Home = () => {
  return (
    <>
      <Header></Header>
      <div class="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 ">
        <Sidebar></Sidebar>
        <div class="lg:pl-[14rem]  mt-[5.8125rem]">
          <JobList></JobList>
        </div>
      </div>
    </>
  );
};

export default Home;
