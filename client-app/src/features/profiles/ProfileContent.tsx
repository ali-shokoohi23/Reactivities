import { observer } from "mobx-react-lite";
import { Tab, TabPane } from "semantic-ui-react";
import ProfilePhotos from "./ProfilePhotos";
import ProfileAbout from "./ProfileAbout";
import { Profile } from "../../app/models/profile";
import ProfileFollowings from "./ProfileFollowings";
import { useStore } from "../../app/stores/Store";

interface Props {
  profile: Profile;
}
const ProfileContent = ({ profile }: Props) => {
  const {profileStore} = useStore();
  const panes = [
    { menuItem: "About", render: () => <ProfileAbout /> },
    { menuItem: "Photos", render: () => <ProfilePhotos profile={profile} /> },
    { menuItem: "Events", render: () => <TabPane>Events</TabPane> },
    { menuItem: "Followers", render: () => <ProfileFollowings />},
    { menuItem: "Following", render: () => <ProfileFollowings />},
  ];

  return (
    <Tab
      menu={{ fluid: true, vertical: true }}
      menuPosition="right"
      panes={panes}
      onTabChange={(_, data) => profileStore.setActiveTab(data.activeIndex as number)}
    />
  );
};

export default observer(ProfileContent);
