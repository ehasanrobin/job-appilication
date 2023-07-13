import React from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addStatus } from "../../features/filters/filterSlice";
const Sidebar = () => {
  const dispatch = useDispatch();
  return (
    <div class="sidebar">
      <nav>
        <ul class="space-y-4">
          <li>
            <Link
              to="/"
              class="main-menu menu-active"
              onClick={(e) => dispatch(addStatus(""))}
              id="lws-alljobs-menu"
            >
              <i class="fa-solid fa-briefcase"> </i>{" "}
              <span> All Available Jobs</span>
            </Link>
            <ul class="space-y-6 lg:space-y-2 ">
              <li>
                <Link
                  class="sub-menu"
                  href="#"
                  onClick={(e) => dispatch(addStatus("Internship"))}
                  id="lws-internship-menu"
                >
                  <i class="fa-solid fa-stop !text-[#FF5757]"></i> Internship
                </Link>
              </li>
              <li>
                <Link
                  class="sub-menu"
                  onClick={(e) => dispatch(addStatus("Full Time"))}
                  id="lws-fulltime-menu"
                >
                  <i class="fa-solid fa-stop !text-[#FF8A00]"></i> Full Time
                </Link>
              </li>
              <li>
                <Link
                  class="sub-menu"
                  onClick={(e) => dispatch(addStatus("Remote"))}
                  id="lws-remote-menu"
                >
                  <i class="fa-solid fa-stop !text-[#56E5C4]"></i> Remote
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/add-job" class="main-menu" id="lws-addJob-menu">
              <i class="fa-solid fa-file-circle-plus"></i>{" "}
              <span>Add NewJob</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
