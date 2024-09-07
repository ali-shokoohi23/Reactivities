import { Grid, GridColumn } from "semantic-ui-react";
import { useStore } from "../../../app/stores/Store";
import { observer } from "mobx-react-lite";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import ActivityDetailedHeader from "./ActivityDetailedHeader";
import ActivityDetailedInfo from "./ActivityDetailedInfo";
import ActivityDetailedChat from "./ActivityDetailedChat";
import ActivityDetailedSidebar from "./ActivityDetailedSidebar";

const ActivityDetails = () => {
  const { activityStore } = useStore();
  const {
    selectedActivity: activity,
    loadActivity,
    loadingInitial,
    clearSelectedActivity,
  } = activityStore;
  const { id } = useParams();

  useEffect(() => {
    if (id) loadActivity(id);
    return () => clearSelectedActivity();
  }, [id, loadActivity, clearSelectedActivity]);

  if (loadingInitial || !activity) return <LoadingComponent />;
  return (
    <Grid>
      <GridColumn width={10}>
        <ActivityDetailedHeader activity={activity} />
        <ActivityDetailedInfo activity={activity} />
        <ActivityDetailedChat activityId ={activity.id} />
      </GridColumn>
      <GridColumn width={6}>
        <ActivityDetailedSidebar activity={activity} />
      </GridColumn>
    </Grid>
  );
};

export default observer(ActivityDetails);
