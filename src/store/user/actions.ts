import { axiosInstance, users } from "@/network";
import { AxiosResponse } from "axios";
// import { UserState, User } from "./types";

export const actions = {
  async getUsersRequest(context: {
    commit: (arg0: string, arg1: AxiosResponse<any, any>) => void;
  }) {
    try {
      const response = await axiosInstance.get(users);
      context.commit("GET_USERS", response.data);
    } catch (err) {
      console.log(err);
    }
  },
};
