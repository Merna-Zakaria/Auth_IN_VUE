import { SharedState } from "./shared/types";
import { AuthState } from "./Auth/types";
export interface State {
  shared: SharedState;
  auth: AuthState
}
