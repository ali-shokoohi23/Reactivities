import {
  Button,
  Icon,
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemHeader,
  ItemImage,
  Label,
  Segment,
  SegmentGroup,
} from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import ActivityListItemAttendee from "./ActivityListItemAttendee";

interface Props {
  activity: Activity;
}
const ActivityListItem = ({ activity }: Props) => {
  return (
    <SegmentGroup>
      <Segment>
        {activity.isCancelled && (
          <Label
            attached="top"
            color="red"
            content="Cancelled"
            style={{ textAlign: "center" }}
          />
        )}
        <ItemGroup>
          <Item>
            <ItemImage
              size="tiny"
              style={{ marginBottom: 3 }}
              circular
              src={activity.host?.image || "/assets/user.png"}
            />
            <ItemContent>
              <ItemHeader as={Link} to={`/activities/${activity.id}`}>
                {activity.title}
              </ItemHeader>
              <ItemDescription>
                Hosted by{" "}
                <Link to={`/profiles/${activity.hostUsername}`}>
                  {" "}
                  {activity.host?.displayName}{" "}
                </Link>
              </ItemDescription>
              {activity.isHost && (
                <ItemDescription>
                  <Label basic color="orange">
                    You are hosting this activity
                  </Label>
                </ItemDescription>
              )}
              {activity.isGoing && !activity.isHost && (
                <ItemDescription>
                  <Label basic color="green">
                    You are going to this activity
                  </Label>
                </ItemDescription>
              )}
            </ItemContent>
          </Item>
        </ItemGroup>
      </Segment>
      <Segment>
        <span>
          <Icon name="clock" />
          {format(activity.date!, "dd MMM yyyy h:mm aa")}
          <Icon name="marker" />
          {activity.venue}
        </span>
      </Segment>
      {activity.attendees && (
        <Segment secondary>
          {<ActivityListItemAttendee attendees={activity.attendees} />}
        </Segment>
      )}
      <Segment clearing>
        <span>{activity.description}</span>
        <Button
          as={Link}
          to={`/activities/${activity.id}`}
          color="teal"
          floated="right"
          content="view"
        />
      </Segment>
    </SegmentGroup>
  );
};

export default ActivityListItem;
