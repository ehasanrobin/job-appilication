import { useSelector } from "react-redux";

export const searchByType = (item, status) => {
  return item.type.includes(status);
};
export const searchByTxt = (item, txt) => {
  return item.title.toLowerCase().includes(txt.toLowerCase());
};

export const jobsToShow = (jobs, sorted) => {
  console.log(jobs, sorted);
  if (sorted === "Salary (High to Low)") {
    return jobs.sort((a, b) => b.salary - a.salary);
  } else if (sorted === "Salary (Low to High)") {
    return jobs.sort((a, b) => a.salary - b.salary);
  } else {
    return jobs;
  }
};
