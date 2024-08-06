import React from "react";
import {
  Button,
  ButtonGroup,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardMeta,
  Icon,
  Image,
} from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";

interface Props {
  activity: Activity;
  cancelSelectActivity: () => void;
  openForm: (id: string) => void;
}
const ActivityDetails = ({ activity, cancelSelectActivity, openForm }: Props) => {
  return (
    <Card key={activity.id} fluid>
      <Image src={`/assets/categoryImages/${activity.category}.jpg`} />
      <CardContent>
        <CardHeader>{activity.title}</CardHeader>
        <CardMeta>
          <span>{activity.date}</span>
        </CardMeta>
        <CardDescription>{activity.description}</CardDescription>
      </CardContent>
      <CardContent extra>
        <ButtonGroup widths="2">
          <Button onClick={() => openForm(activity.id)} color="blue" content="Edit" />
          <Button onClick={cancelSelectActivity} color="grey" content="Cancel" />
        </ButtonGroup>
      </CardContent>
    </Card>
  );
};

export default ActivityDetails;
