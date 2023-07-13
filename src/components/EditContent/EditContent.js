import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editJob, fetchJob } from "../../features/Jobs/JobsSlice";
const EditContent = () => {
  const { editingData } = useSelector((state) => state.jobs);
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchJob(id));
  }, [dispatch]);

  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(
      editJob({
        ...editingData,
        title: e.target.lwsJobTitle.value,
        type: e.target.lwsJobType.value,
        salary: e.target.lwsJobSalary.value,
        deadline: e.target.lwsJobDeadline.value,
      })
    );
    navigate("/");
  };

  return (
    <main class="max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
      <h1 class="mb-10 text-center lws-section-title">Edit Job</h1>

      <div class="max-w-3xl mx-auto">
        <form onSubmit={handleEdit} class="space-y-6">
          <div class="fieldContainer">
            <label
              for="lws-JobTitle"
              class="text-sm font-medium text-slate-300"
            >
              Job Title
            </label>
            <select
              id="lws-JobTitle"
              defaultValue={editingData?.title}
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
              defaultValue={editingData?.type}
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
                defaultValue={editingData?.salary}
                id="lws-JobSalary"
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
              value={editingData?.deadline}
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
              Edit
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default EditContent;
