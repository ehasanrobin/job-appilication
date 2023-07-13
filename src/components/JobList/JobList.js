import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../../features/Jobs/JobsSlice";
import {
  jobsToShow,
  searchByTxt,
  searchByType,
} from "../../utils/filterFunctions";
import Job from "../Job/Job";
import Loading from "../Loading/Loading";

const JobList = () => {
  const { jobs, isLoading, isError } = useSelector((state) => state.jobs);
  const { status } = useSelector((state) => state.filters);
  const [searched, setSearched] = useState("");
  const [sorted, setSorted] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch, sorted]);

  let content;
  console.log(sorted);

  if (isLoading && !isError) {
    content = <Loading></Loading>;
  }
  if (isError && !isLoading) {
    content = <div>An error Occured</div>;
  }
  if (jobs.length === 0 && !isLoading && !isError) {
    content = <div>No jobs Found</div>;
  }
  if (jobs.length > 0) {
    content = jobsToShow(
      jobs
        .filter((item) => searchByType(item, status))
        .filter((item) => searchByTxt(item, searched)),
      sorted
    ).map((job) => <Job key={job.id} job={job}></Job>);
  }
  return (
    <main class="max-w-3xl rounded-lg  mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
      <div class="md:flex space-y-2 md:space-y-0 justify-between mb-10 ">
        <h1 class="lws-section-title">All Available Jobs</h1>
        <div class="flex gap-4">
          <div class="search-field group flex-1">
            <i class="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>
            <input
              type="text"
              placeholder="Search Job"
              onChange={(e) => setSearched(e.target.value)}
              class="search-input"
              id="lws-searchJob"
            />
          </div>
          <select
            id="lws-sort"
            onChange={(e) => setSorted(e.target.value)}
            name="sort"
            autocomplete="sort"
            class="flex-1"
          >
            <option>Default</option>
            <option>Salary (Low to High)</option>
            <option>Salary (High to Low)</option>
          </select>
        </div>
      </div>

      <div class="jobs-list">
        {/* <!-- Single Job 1--> */}
        {content}
        {/* <!-- Single Job 1--> */}
      </div>
    </main>
  );
};

export default JobList;
