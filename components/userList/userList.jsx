import React from 'react';
import {
  Divider, List, ListItem, ListItemText, Typography,
}
from '@mui/material';
import './userList.css';
import {Link} from 'react-router-dom';

/**
 * Define UserList, a React component of project #5
 */
class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
  }

  componentDidMount() {
    const users = window.models.userListModel();
    this.setState({ users });
  }

  render() {
    return (
      <div>
        <Typography variant="body1">

        </Typography>
        <List component="nav">
          {this.state.users.map(user => (
              <div key={user._id}>
                <ListItem button component={Link} to={`/users/${user._id}`}>
                  <ListItemText primary={`${user.first_name} ${user.last_name}`} secondary={user.occupation} />
                </ListItem>
                <Divider />
              </div>
          ))}
        </List>
      </div>
    );
  }
}

export default UserList;
