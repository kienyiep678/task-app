import axios from "axios";
import {
  API_URL,
  API_URL_PAGINATION,
  API_URL_SEARCH,
  API_URL_FILTER,
} from "../../Constant";

// Register user
const getTasks = async () => {
  // console.log("tasks data", tasksData);

  const response1 = await axios.get(API_URL);

  console.log("response123", response1.data);
  // console.log(acct, perm);
  return response1.data;
};

const getTasksWithPagination = async (offset, pageSize) => {
  // console.log("tasks data", tasksData);

  const response1 = await axios.get(
    ` ${API_URL_PAGINATION}/${offset}/${pageSize}`
  );

  console.log("responsePaginate", response1.data.content);
  // console.log(acct, perm);
  return response1.data.content;
};

const serachTasks = async (field) => {
  console.log("search data", field);

  const response1 = await axios.get(`${API_URL_SEARCH}/${field}`);

  console.log("responseSearch", response1.data);
  // console.log(acct, perm);
  return response1.data;
};

const filterTasks = async () => {
  // console.log("search data", field);

  const response1 = await axios.get(`${API_URL_FILTER}`, {
    params: {
      status: "on-going",
      project: "",
      priority: "Medium",
    },
  });

  console.log("responseSearch", response1.data);
  // console.log(acct, perm);
  return response1.data;
};
const taskService = {
  getTasks,
  getTasksWithPagination,
  serachTasks,
  filterTasks,
};

export default taskService;
