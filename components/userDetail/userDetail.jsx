import React from 'react';
import {
    List, Typography, Button, ListItemText, ListItem, Divider
} from '@mui/material';
import './userDetail.css';
import {Link} from "react-router-dom";


/**
 * Define UserDetail, a React component of project #5
 */
class UserDetail extends React.Component {
  constructor(props) {
    super(props);

      this.state = { user : null };
  }

    componentDidMount(){
      const userId = this.props.match.params.userId;

      console.log("UserId:", userId);

      const userDetails = window.models.userModel(userId);

      console.log("User Details:", userDetails);

      this.setState({user : userDetails});
    }

    componentDidUpdate(prevProps) {
        const currentUserId = this.props.match.params.userId;
        const prevUserId = prevProps.match.params.userId;

        console.log("Previous Id: " , prevUserId);
        console.log("Current Id: ", currentUserId);

        if (currentUserId !== prevUserId) {
            const userDetails = window.models.userModel(currentUserId);
            this.setState({ user: userDetails });
            console.log("User Details: ", userDetails);
        }

    }

    render() {
        const { user } = this.state;

        if(!user) return <Typography variant = "body1"> Loading...</Typography>;
    return (
        <div className="userDetail">
            <Typography variant="h4">{`${user.first_name} ${user.last_name}`}</Typography>

            <List component="nav">
                <ListItem>
                    <ListItemText primary="First Name" secondary={user.first_name} />
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemText primary="Last Name" secondary={user.last_name} />
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemText primary="Location" secondary={user.location} />
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemText primary="Description" secondary={user.description} />
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemText primary="Occupation" secondary={user.occupation} />
                </ListItem>
            </List>

            <Link to={`/photos/${user._id}`}>
                <Button variant="contained" color="primary">
                    View Photos
                </Button>
            </Link>
        </div>
    );
  }
}

export default UserDetail;
