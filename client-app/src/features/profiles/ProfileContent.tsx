import { Tab } from "semantic-ui-react";
import ProfilePhotos from "./ProfilePhoto";
import { Profile } from "../../app/models/profile";
import { observer } from "mobx-react-lite";
import ProfileFollowings from "./ProfileFollowings";
import { useStore } from "../../app/stores/store";
import ProfileActivities from "./ProfileActivities";

interface Props {
    profile: Profile
}

export default observer(function ProfileContent({ profile }: Props) {
    const {profileStore} = useStore();
    
    const panes = [
        { menuItem: 'About', render: () => <Tab.Pane>About Content</Tab.Pane> },
        { menuItem: 'Photos', render: () => <ProfilePhotos profile={profile}/> },
        { menuItem: 'Events', render: () => <ProfileActivities />},
        { menuItem: 'Followers', render: () => <ProfileFollowings /> },
        { menuItem: 'Following', render: () => <ProfileFollowings /> },
    ]

    return (
        <Tab
            menu={{ fluid: true, vertical: true }}
            menuPosition="right"
            panes={panes}
            onTabChange={(_, data) => profileStore.setActiveTab(data.activeIndex as number)}
        />
    )
})