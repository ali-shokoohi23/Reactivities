import React from "react";
import {
  Button,
  ButtonGroup,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardMeta,
  Image,
} from "semantic-ui-react";
import { useStore } from "../../../app/stores/Store";
import { observer } from "mobx-react-lite";


const ActivityDetails = () => {
  const {activityStore} = useStore();
  const {selectedActivity: activity, openForm, cancelSelectedActivity} = activityStore;

  if (!activity) return;
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
          <Button onClick={cancelSelectedActivity} color="grey" content="Cancel" />
        </ButtonGroup>
      </CardContent>
    </Card>
  );
};

export default observer(ActivityDetails);
