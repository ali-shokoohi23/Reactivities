import { createContext, useContext } from "react";
import ActivityStore from "./ActivityStore";
import CommonStore from "./CommonStore";

interface Store {
    activityStore: ActivityStore;
    commonStore: CommonStore;
}

export const store: Store = {
    activityStore: new ActivityStore(),
    commonStore: new CommonStore(),
}

export const StoreContext = createContext(store);

export const useStore = () => {
    return useContext(StoreContext);
}