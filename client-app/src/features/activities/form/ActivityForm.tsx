import React, { ChangeEvent, useState } from "react";
import {
  Button,
  Form,
  FormInput,
  FormTextArea,
  Segment,
} from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";

interface Props {
  activity: Activity | undefined;
  closeForm: () => void;
  createOrEdit: (activity: Activity) => void;
}
const ActivityForm = ({ activity: selectedActivity, closeForm, createOrEdit}: Props) => {
  const initialState = selectedActivity ?? {
    id: "",
    title: "",
    category: "",
    description: "",
    date: "",
    city: "",
    venue: "",
  };
  const [activity, setActivity] = useState(initialState);
  
  const handleSubmit = () => {
    console.log(activity);
    createOrEdit(activity)
  }
  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
    const {name, value} = event.target;
    setActivity({...activity, [name]: value})
  }

  return (
    <Segment clearing>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <FormInput placeholder="Title" value={activity.title} onChange={handleInputChange} name="title"/>
        <FormTextArea placeholder="Description" value={activity.description} onChange={handleInputChange} name="description" />
        <FormInput placeholder="Category" value={activity.category} onChange={handleInputChange} name="category" />
        <FormInput placeholder="Date" value={activity.date} onChange={handleInputChange} name="date" />
        <FormInput placeholder="City" value={activity.city} onChange={handleInputChange} name="city" />
        <FormInput placeholder="Venue" value={activity.venue} onChange={handleInputChange} name="venue" />
        <Button floated="right" positive type="submit" content="Submit" />
        <Button
          onClick={closeForm}
          floated="right"
          type="button"
          content="Cancel"
        />
      </Form>
    </Segment>
  );
};

export default ActivityForm;
