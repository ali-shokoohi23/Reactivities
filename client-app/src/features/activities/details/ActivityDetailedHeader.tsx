import { observer } from "mobx-react-lite";
import {
  Button,
  Header,
  Item,
  Segment,
  Image,
  SegmentGroup,
  ItemGroup,
  ItemContent,
  Label,
} from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { useStore } from "../../../app/stores/Store";

const activityImageStyle = {
  filter: "brightness(30%)",
};

const activityImageTextStyle = {
  position: "absolute",
  bottom: "5%",
  left: "5%",
  width: "100%",
  height: "auto",
  color: "white",
};

interface Props {
  activity: Activity;
}

export default observer(function ActivityDetailedHeader({ activity }: Props) {
  const {
    activityStore: { updateAttendeance, loading, cancelActivityToggle },
  } = useStore();
  return (
    <SegmentGroup>
      <Segment basic attached="top" style={{ padding: "0" }}>
        {activity.isCancelled && (
          <Label
            style={{ position: "absolute", zIndex: 1000, left: -14, top: 20 }}
            ribbon
            color="red"
            content="Cancelled"
          />
        )}
        <Image
          src={`/assets/categoryImages/${activity.category}.jpg`}
          fluid
          style={activityImageStyle}
        />
        <Segment style={activityImageTextStyle} basic>
          <ItemGroup>
            <Item>
              <ItemContent>
                <Header
                  size="huge"
                  content={activity.title}
                  style={{ color: "white" }}
                />
                <p>{format(activity.date!, "dd MMM yyyy")}</p>
                <p>
                  Hosted by{" "}
                  <strong>
                    <Link to={`/profiles/${activity.hostUsername}`}>
                      {activity.hostUsername}
                    </Link>
                  </strong>
                </p>
              </ItemContent>
            </Item>
          </ItemGroup>
        </Segment>
      </Segment>
      <Segment clearing attached="bottom">
        {activity.isHost ? (
          <>
            <Button
              color={activity.isCancelled ? "green" : "red"}
              floated="left"
              basic
              content={
                activity.isCancelled
                  ? "Re-activate activity"
                  : "Cancel Activity"
              }
              onClick={cancelActivityToggle}
              loading={loading}
            />
            <Button
              as={Link}
              to={`/manage/${activity.id}`}
              color="orange"
              floated="right"
              disabled={activity.isCancelled}
            >
              Manage Event
            </Button>
          </>
        ) : activity.isGoing ? (
          <Button onClick={updateAttendeance} loading={loading}>
            Cancel attendance
          </Button>
        ) : (
          <Button
            disabled={activity.isCancelled}
            onClick={updateAttendeance}
            loading={loading}
            color="teal"
          >
            Join Activity
          </Button>
        )}
      </Segment>
    </SegmentGroup>
  );
});
