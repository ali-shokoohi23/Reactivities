import { observer } from "mobx-react-lite";
import { Button, Reveal, RevealContent } from "semantic-ui-react";
import { Profile } from "../../app/models/profile";
import { useStore } from "../../app/stores/Store";
import { SyntheticEvent } from "react";

interface Props {
  profile: Profile;
}
const FollowButton = ({ profile }: Props) => {
  const { profileStore, userStore } = useStore();
  const { updateFollowing, loading } = profileStore;

  const handleFollow = (e: SyntheticEvent, username: string) => {
    e.preventDefault();
    profile.following ? updateFollowing(username, false) : updateFollowing(username, true);
  }

  if (userStore.user?.username === profile.username) return null;

  return (
    <Reveal animated="move">
      <RevealContent visible style={{ width: "100%" }}>
        <Button
          fluid
          color="teal"
          content={profile.following ? "Following" : "Not Following"}
        />
      </RevealContent>
      <RevealContent hidden style={{ width: "100%" }}>
        <Button
          fluid
          basic
          loading={loading}
          color={profile.following ? "red" : "green"}
          content={profile.following ? "Unfollow" : "Follow"}
          onClick={(e) => handleFollow(e, profile.username)}
        />
      </RevealContent>
    </Reveal>
  );
};

export default observer(FollowButton);
