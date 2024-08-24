import { observer } from "mobx-react-lite";
import { Tab, TabPane } from "semantic-ui-react";
import ProfilePhotos from "./ProfilePhotos";
import { Profile } from "../../app/models/profile";

interface Props {
  profile: Profile;
}
const ProfileContent = ({profile}: Props) => {
  const panes = [
    { menuItem: "About", render: () => <TabPane>About</TabPane> },
    { menuItem: "Photos", render: () => <ProfilePhotos profile={profile}/> },
    { menuItem: "Events", render: () => <TabPane>Events</TabPane> },
    { menuItem: "Followers", render: () => <TabPane>Followers</TabPane> },
    { menuItem: "Following", render: () => <TabPane>Following</TabPane> },
  ];

  return (
    <Tab
      menu={{fluid:true, vertical: true}}
      menuPosition="right"
      panes={panes}
    />
  )
};

export default observer(ProfileContent);
