import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTasks, getTasksWithPagination } from "./features/task/taskSlice";
import { Link } from "react-router-dom";
// import axios from "axios";
// import { API_URL } from "./Constant";
// import { Link } from "react-router-dom";
function Table() {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const { taskLoading, taskError, taskSuccess, taskData, taskMessage } =
    useSelector((state) => state.task);

  useEffect(() => {
    // if (taskSuccess) {
    dispatch(getTasks());

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

  return (
    <div className="table-content">
      <Link to={"/"}>Back</Link>
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
    </div>
  );
}

export default Table;
