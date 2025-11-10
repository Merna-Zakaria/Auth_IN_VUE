import { SharedState } from "./shared/types";
import { UserState, User } from "./user/types";
export interface State {
  user: UserState;
  shared: SharedState;
}
