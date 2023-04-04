import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getTasks,
  getTasksWithPagination,
  searchTasks,
  filterTasks,
} from "./features/task/taskSlice";
// import axios from "axios";
// import { API_URL } from "./Constant";
import { Link } from "react-router-dom";
function Table() {
  const [dataSearched, searchData] = useState("");
  const [paramData, setParamData] = useState({
    priority: "",
    project: "",
    status: "",
  });

  const dispatch = useDispatch();
  const { taskLoading, taskError, taskSuccess, taskData, taskMessage } =
    useSelector((state) => state.task);

  useEffect(() => {
    // if (taskSuccess) {
    dispatch(getTasksWithPagination(0));

    if (taskSuccess) {
      // console.log("task data", Object.keys(taskData[0]));
    }
  }, [dispatch, taskSuccess]);

  const handleClick = (e) => {
    console.log(e);

    const value = e.currentTarget.getAttribute("data-example");
    dispatch(getTasksWithPagination(value));
    console.log("value: ", value);
  };

  const filterClick = (e) => {
    console.log(e);

    dispatch(filterTasks());
  };

  const onChange = (e) => {
    console.log("search value: ", e.target.value);
    searchData(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(searchTasks(dataSearched));
  };

  return (
    <div className="table-content">
      <div className="table-header">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="searchText"
              name="searchText"
              value={dataSearched}
              onChange={onChange}
              placeholder="Search for project"
              required
            />
            <button className="btn btn-notification">Submit</button>
          </div>
        </form>

        <button
          filter-status="status"
          filter-priority="priority"
          filter-project="project"
          onClick={filterClick}
        >
          Filter
        </button>
        <Link to={"/showAll"}>Show All</Link>
      </div>
      <table>
        <thead>
          <tr className="table-row">
            <th>ID</th>
            <th>Priority</th>
            <th>Project</th>
            <th>Resources</th>
            <th>PIC</th>
            <th>Period</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {taskData.map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.priority}</td>
              <td>{user.project}</td>
              <td>{user.resources}</td>
              <td>{user.pic}</td>
              <td>{user.period}</td>
              <td>{user.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <button onClick={handleClick}>previous</button>
        <button data-example="0" onClick={handleClick}>
          1
        </button>
        <button data-example="1" onClick={handleClick}>
          2
        </button>
        <button data-example="2" onClick={handleClick}>
          3
        </button>
        <button data-example="3" onClick={handleClick}>
          4
        </button>
        <button>next</button>
      </div>
    </div>
  );
}

export default Table;
