import { Grid, GridColumn } from "semantic-ui-react";
import ProfileHeader from "./ProfileHeader";
import { useParams } from "react-router-dom";
import { useStore } from "../../app/stores/Store";
import { useEffect } from "react";
import LoadingComponent from "../../app/layout/LoadingComponent";
import ProfileContent from "./ProfileContent";
import { observer } from "mobx-react-lite";

const ProfilePage = () => {
  const { username } = useParams<{ username: string }>();
  const { profileStore } = useStore();
  const { loadingProfile, loadProfile, profile, setActiveTab } = profileStore;

  useEffect(() => {
    if (username) loadProfile(username);
    return () => {
        setActiveTab(0);
    }
  }, [loadProfile, username]);

  if (loadingProfile) return <LoadingComponent content="Loading profile..." />;

  if (!profile) return <h2>Problem loading profile</h2>;

  return (
    <Grid>
      <GridColumn width={16}>
        <ProfileHeader profile={profile} />
        <ProfileContent profile={profile}/>
      </GridColumn>
    </Grid>
  );
};

export default observer(ProfilePage);
