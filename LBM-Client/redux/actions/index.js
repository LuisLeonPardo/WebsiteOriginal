import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  setAllProjects,
  setFilteredProjects,
  setAdminWallet,
  setUnapprovedProjects,
  setIsAdmin,
} from "../reducer/index";

// asynchronous actions

export const createProject = createAsyncThunk(
  "/projectsprivate",
  async ({ projectData }, thunkAPI) => {
    console.log(projectData);
    const config = {};
    try {
      const metaData = await axios.post(
        "/libertum/projectsprivate",
        projectData,
        config
      );
      thunkAPI.dispatch(setAllProjects());
      return metaData.data;
    } catch (err) {
      return err.response.data;
    }
  }
);

export const getAdminByWallet = createAsyncThunk(
  "/users/admin/:wallet",
  async (address, thunkAPI) => {
    try {
      let metaData = await axios.get(`/libertum/users/admin/${address}`);
      thunkAPI.dispatch(setAdminWallet(metaData.data));
    } catch (err) {
      // alert("Ups! Something went wrong...");
      return err.response.data;
    }
  }
);

export const getAllProjects = createAsyncThunk(
  "/libertum/project",
  async (obj, thunkAPI) => {
    try {
      const metaData = await axios(`/libertum/project`);
      thunkAPI.dispatch(setAllProjects(metaData.data));
      thunkAPI.dispatch(setFilteredProjects(metaData.data));
    } catch (err) {
      console.log(err);
    }
  }
);

export const getUnapprovedProjects = createAsyncThunk(
  "/libertum/projectsprivate",
  async (obj, thunkAPI) => {
    try {
      const metaData = await axios(`/libertum/projectsprivate/`);
      thunkAPI.dispatch(setUnapprovedProjects(metaData.data.projects));
    } catch (err) {
      thunkAPI.dispatch(setUnapprovedProjects([]));
    }
  }
);

export const getProjectsByCategory = createAsyncThunk(
  "/:gender/:category/:age",
  async (obj, thunkAPI) => {
    try {
      const metaData = await axios.get(
        `/libertum/project/${obj.gender}/${obj.category}/${obj.age}`
      );
      thunkAPI.dispatch(setFilteredProjects(metaData.data.project));
      return metaData.data.project;
    } catch (err) {
      thunkAPI.dispatch(setFilteredProjects([]));
      return err.response.data;
    }
  }
);

export const getProjectsByName = createAsyncThunk(
  "/project/:name",
  async (name, thunkAPI) => {
    try {
      const metaData = await axios.get(`/libertum/project/${name}`);
      thunkAPI.dispatch(setFilteredProjects(metaData.data.project));
      return metaData.data;
    } catch (err) {
      thunkAPI.dispatch(setFilteredProjects([]));
    }
  }
);

export const deleteProject = createAsyncThunk(
  "/projectsprivate/deleteProject",
  async (id, thunkAPI) => {
    try {
      let config = {
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          id: id,
        },
      };

      const metaData = await axios.delete(
        `/libertum/projectsprivate/deleteProject`,
        config
      );
      thunkAPI.dispatch(getAllProjects());
    } catch (err) {
      console.log(err.response.data);
    }
  }
);

export const approveProject = createAsyncThunk(
  "/editImage/profile",
  async (id, thunkAPI) => {
    let config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const metaData = await axios.put(
        `/libertum/projectsprivate/${id}/approve`,
        { approved: true },
        config
      );
      thunkAPI.dispatch(getUnapprovedProjects());
      return metaData.data;
    } catch (err) {
      return err.response.data;
    }
  }
);
