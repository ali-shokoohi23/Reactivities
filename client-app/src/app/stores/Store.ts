import { createContext, useContext } from "react";
import ActivityStore from "./ActivityStore";
import CommonStore from "./CommonStore";
import UserStore from "./userStore";
import ModalStore from "./modalStores";
import ProfileStore from "./profileStore";
import CommentStore from "./CommentStore";

interface Store {
    activityStore: ActivityStore;
    commonStore: CommonStore;
    userStore: UserStore;
    modalStore: ModalStore;
    profileStore: ProfileStore;
    commentStore: CommentStore;
}

export const store: Store = {
    activityStore: new ActivityStore(),
    commonStore: new CommonStore(),
    userStore: new UserStore,
    modalStore: new ModalStore(),
    profileStore: new ProfileStore(),
    commentStore: new CommentStore(),
}

export const StoreContext = createContext(store);

export const useStore = () => {
    return useContext(StoreContext);
}