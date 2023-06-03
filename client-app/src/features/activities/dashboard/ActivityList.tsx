import React from "react";
import { Button, Item, Label, Segment } from "semantic-ui-react";

interface Props {
    activities: Activity[],
    selectActivity: (id: string) => void
    deleteActivity: (id: string) => void
}

export default function ActivityList({ activities, selectActivity, deleteActivity }: Props) {
    return (
        <Segment>
            <Item.Group divided>
                {activities.map((activity: Activity) => (
                    <Item key={activity.id}>
                        <Item.Content>
                            <Item.Header as='a'>{activity.title}</Item.Header>
                            <Item.Meta>{activity.date}</Item.Meta>
                            <Item.Description>
                                {activity.description}，
                                {activity.city}
                            </Item.Description>
                            <Item.Extra>
                                <Button onClick={() => selectActivity(activity.id)} floated='right' content='View' color="blue" />
                                <Button onClick={() => deleteActivity(activity.id)} floated='right' content='Delete' color="red" />
                                <Label basic content={activity.category} />
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                )
                )
                }

            </Item.Group>
        </Segment>
    );
}