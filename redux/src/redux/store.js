import { createStoreHook } from "react-redux";
import { StoreCreator } from "redux";
import reducers from "./reducers";
export const store = createStoreHook(reducers);
