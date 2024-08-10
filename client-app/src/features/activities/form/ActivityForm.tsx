import { ChangeEvent, useEffect, useState } from "react";
import {
  Button,
  Form,
  FormInput,
  FormTextArea,
  Segment,
} from "semantic-ui-react";
import { useStore } from "../../../app/stores/Store";
import { observer } from "mobx-react-lite";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Activity } from "../../../app/models/activity";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { v4 as uuid } from "uuid";

const ActivityForm = () => {
  const { activityStore } = useStore();
  const {
    createActivity,
    updateActivity,
    loading,
    loadActivity,
    loadingInitial,
  } = activityStore;
  const { id } = useParams();
  const navigate = useNavigate();
  const [activity, setActivity] = useState<Activity>({
    id: "",
    title: "",
    category: "",
    description: "",
    date: "",
    city: "",
    venue: "",
  });

  useEffect(() => {
    if (id) {
      loadActivity(id).then((activity) => setActivity(activity!));
    }
  }, [id, loadActivity]);

  const handleSubmit = () => {
    if (!activity.id) {
      activity.id = uuid();
      createActivity(activity).then(() =>
        navigate(`/activities/${activity.id}`)
      );
    } else {
      updateActivity(activity).then(() =>
        navigate(`/activities/${activity.id}`)
      );
    }
  };
  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setActivity({ ...activity, [name]: value });
  };

  if (loadingInitial) return <LoadingComponent content="Loading Activity..." />;
  return (
    <Segment clearing>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <FormInput
          placeholder="Title"
          value={activity.title}
          onChange={handleInputChange}
          name="title"
        />
        <FormTextArea
          placeholder="Description"
          value={activity.description}
          onChange={handleInputChange}
          name="description"
        />
        <FormInput
          placeholder="Category"
          value={activity.category}
          onChange={handleInputChange}
          name="category"
        />
        <FormInput
          type="date"
          placeholder="Date"
          value={activity.date}
          onChange={handleInputChange}
          name="date"
        />
        <FormInput
          placeholder="City"
          value={activity.city}
          onChange={handleInputChange}
          name="city"
        />
        <FormInput
          placeholder="Venue"
          value={activity.venue}
          onChange={handleInputChange}
          name="venue"
        />
        <Button
          loading={loading}
          floated="right"
          positive
          type="submit"
          content="Submit"
        />
        <Button
          as={Link}
          to={id ? `/activities/${id}` : "/activities"}
          floated="right"
          type="button"
          content="Cancel"
        />
      </Form>
    </Segment>
  );
};

export default observer(ActivityForm);
