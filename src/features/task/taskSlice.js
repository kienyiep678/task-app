import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import taskService from "./taskService";

const initialState = {
  taskData: [],
  taskMessage: "",
  taskError: false,
  taskSuccess: false,
  taskLoading: false,
};
export const getTasks = createAsyncThunk(
  "tasks/getAll",
  async (tasksData, thunkAPI) => {
    try {
      console.log("tasksData", tasksData);
      return await taskService.getTasks();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getTasksWithPagination = createAsyncThunk(
  "tasks/getTasksWithPagination",
  async (taskPagination, thunkAPI) => {
    try {
      console.log("paginationData", taskPagination);
      const pageSize = 5;
      return await taskService.getTasksWithPagination(taskPagination, pageSize);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

//hardcoded data
export const filterTasks = createAsyncThunk(
  "tasks/filterTasks",
  async (filterTask, thunkAPI) => {
    try {
      return await taskService.filterTasks();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const searchTasks = createAsyncThunk(
  "tasks/searchTasks",
  async (searchTask, thunkAPI) => {
    try {
      console.log("searchData", searchTask);
      return await taskService.serachTasks(searchTask);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    taskReset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTasks.pending, (state) => {
        state.taskLoading = true;
      })
      .addCase(getTasks.fulfilled, (state, action) => {
        state.taskLoading = false;
        state.taskSuccess = true;
        state.taskData = action.payload;
      })
      .addCase(getTasks.rejected, (state, action) => {
        state.taskLoading = false;
        state.taskError = true;
        state.taskData = action.payload;
        state.taskMessage = action.payload;
      })
      .addCase(getTasksWithPagination.pending, (state) => {
        state.taskLoading = true;
      })
      .addCase(getTasksWithPagination.fulfilled, (state, action) => {
        state.taskLoading = false;
        state.taskSuccess = true;
        state.taskData = action.payload;
      })
      .addCase(getTasksWithPagination.rejected, (state, action) => {
        state.taskLoading = false;
        state.taskError = true;
        state.taskData = action.payload;
        state.taskMessage = action.payload;
      })
      .addCase(searchTasks.pending, (state) => {
        state.taskLoading = true;
      })
      .addCase(searchTasks.fulfilled, (state, action) => {
        state.taskLoading = false;
        state.taskSuccess = true;
        state.taskData = action.payload;
      })
      .addCase(searchTasks.rejected, (state, action) => {
        state.taskLoading = false;
        state.taskError = true;
        state.taskData = action.payload;
        state.taskMessage = action.payload;
      })
      .addCase(filterTasks.pending, (state) => {
        state.taskLoading = true;
      })
      .addCase(filterTasks.fulfilled, (state, action) => {
        state.taskLoading = false;
        state.taskSuccess = true;
        state.taskData = action.payload;
      })
      .addCase(filterTasks.rejected, (state, action) => {
        state.taskLoading = false;
        state.taskError = true;
        state.taskData = action.payload;
        state.taskMessage = action.payload;
      });
  },
});

export const { taskReset } = taskSlice.actions;
export default taskSlice.reducer;
