import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addJob } from "../../features/Jobs/JobsSlice";
import { useNavigate } from "react-router-dom";
const AddContent = () => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [salary, setSalary] = useState("");
  const [deadline, setDeadline] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddJob = (e) => {
    e.preventDefault();

    dispatch(addJob({ title, type, salary, deadline }));
    navigate("/");
  };
  return (
    <main class="max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
      <h1 class="mb-10 text-center lws-section-title">Add New Job</h1>

      <div class="max-w-3xl mx-auto">
        <form onSubmit={handleAddJob} class="space-y-6">
          <div class="fieldContainer">
            <label
              for="lws-JobTitle"
              class="text-sm font-medium text-slate-300"
            >
              Job Title
            </label>
            <select
              id="lws-JobTitle"
              onChange={(e) => setTitle(e.target.value)}
              name="lwsJobTitle"
              required
            >
              <option value="" hidden selected>
                Select Job
              </option>
              <option>Software Engineer</option>
              <option>Software Developer</option>
              <option>Full Stack Developer</option>
              <option>MERN Stack Developer</option>
              <option>DevOps Engineer</option>
              <option>QA Engineer</option>
              <option>Product Manager</option>
              <option>Social Media Manager</option>
              <option>Senior Executive</option>
              <option>Junior Executive</option>
              <option>Android App Developer</option>
              <option>IOS App Developer</option>
              <option>Frontend Developer</option>
              <option>Frontend Engineer</option>
            </select>
          </div>

          <div class="fieldContainer">
            <label for="lws-JobType">Job Type</label>
            <select
              id="lws-JobType"
              onChange={(e) => setType(e.target.value)}
              name="lwsJobType"
              required
            >
              <option value="" hidden selected>
                Select Job Type
              </option>
              <option>Full Time</option>
              <option>Internship</option>
              <option>Remote</option>
            </select>
          </div>

          <div class="fieldContainer">
            <label for="lws-JobSalary">Salary</label>
            <div class="flex border rounded-md shadow-sm border-slate-600">
              <span class="input-tag">BDT</span>
              <input
                type="number"
                name="lwsJobSalary"
                id="lws-JobSalary"
                onChange={(e) => setSalary(e.target.value)}
                required
                class="!rounded-l-none !border-0"
                placeholder="20,00,000"
              />
            </div>
          </div>

          <div class="fieldContainer">
            <label for="lws-JobDeadline">Deadline</label>
            <input
              type="date"
              name="lwsJobDeadline"
              onChange={(e) => setDeadline(e.target.value)}
              id="lws-JobDeadline"
              required
            />
          </div>

          <div class="text-right">
            <button
              type="submit"
              id="lws-submit"
              class="cursor-pointer btn btn-primary w-fit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default AddContent;
