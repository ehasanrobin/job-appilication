import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addJobApi,
  deleteJobAPI,
  editJobAPI,
  getJobAPI,
  getJobsAPI,
} from "./JobsAPI";

const initialState = {
  isLoading: false,
  isError: false,
  isEditing: false,
  editingData: {},
  error: "",
  jobs: [],
};

export const fetchJobs = createAsyncThunk("jobs/get", async () => {
  const jobs = await getJobsAPI();
  return jobs;
});

export const fetchJob = createAsyncThunk("job/get", async (id) => {
  const job = getJobAPI(id);
  return job;
});

export const addJob = createAsyncThunk("jobs/add", async (data) => {
  const job = addJobApi(data);
  return job;
});
export const editJob = createAsyncThunk("jobs/add", async (data) => {
  const job = editJobAPI(data);
  return job;
});
export const deleteJob = createAsyncThunk("jobs/delete", async (id) => {
  const job = await deleteJobAPI(id);
  return id;
});

const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    addEditing: (state, action) => {
      state.editingData = action.payload;
    },
    rmEditing: (state, action) => {
      state.editingData = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = "";
        state.jobs = action.payload;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
        state.jobs = [];
      })
      .addCase(addJob.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = "action.error.message";
        state.jobs.push(action.payload);
      })
      .addCase(fetchJob.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = "";
        state.editingData = action.payload;
      })
      .addCase(deleteJob.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = "";
        state.jobs = state.jobs.filter((job) => job.id !== action.payload);
      });
  },
});

export default jobsSlice.reducer;
export const { addEditing, rmEditing } = jobsSlice.actions;
