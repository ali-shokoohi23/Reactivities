import { useEffect } from "react";
import { Grid, GridColumn } from "semantic-ui-react";
import ActivityList from "./ActivityList";
import { useStore } from "../../../app/stores/Store";
import { observer } from "mobx-react-lite";
import LoadingComponent from "../../../app/layout/LoadingComponent";

const ActivityDashboard = () => {
  const { activityStore } = useStore();
  const { loadActivities, activityRegistry } = activityStore;
  useEffect(() => {
    if (activityRegistry.size <= 1) loadActivities();
  }, [loadActivities]);

  if (activityStore.loadingInitial) {
    return <LoadingComponent content="Loading..." />;
  }
  return (
    <Grid>
      <GridColumn width="10">
        <ActivityList />
      </GridColumn>
      <GridColumn width="6">
        <h2>Activity Filters</h2>
      </GridColumn>
    </Grid>
  );
};

export default observer(ActivityDashboard);
