import React from 'react';
import { Typography, List, ListItem, ListItemText, Link } from '@mui/material';
import './userPhotos.css';

class UserPhotos extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userPhotos: [] };
  }

  componentDidMount() {
    const userId = this.props.match.params.userId;
    const userPhotos = window.models.photoOfUserModel(userId);
    this.setState({ userPhotos } );
    console.log()
  }

  render() {
    const { userPhotos } = this.state;

    if (Array.isArray(this.state.userPhotos)) {
      console.log('userPhotos is an array!', this.state.userPhotos);
    } else {
      console.log('userPhotos is NOT an array. Its value is:', this.state.userPhotos);
    }

    if (!userPhotos || userPhotos.length === 0) {
      return <Typography variant="body1">Loading...</Typography>;
    }

    return (
        <div className="userPhotos">
          {Array.isArray(userPhotos) && userPhotos.map(photo => (
              <div key={photo._id} className="photoContainer">
                <img src={`../images/${photo.file_name}`} alt="User's post" />
                <Typography variant="body1">{photo.date_time}</Typography>
                <List component="nav">
                  {Array.isArray(photo.comments) && photo.comments.map(comment => (
                      <ListItem key={comment._id}>
                        <ListItemText
                            primary={comment.comment}
                            secondary={(
                              <React.Fragment>
                                <Link to={`/users/${comment.user._id}`}>
                                  {`${comment.user.first_name} ${comment.user.last_name}`}
                                </Link>
                                {` - ${comment.date_time}`}
                              </React.Fragment>
                            )}
                        />
                      </ListItem>
                  ))}
                </List>
              </div>
          ))}
        </div>
    );
  }


}

export default UserPhotos;

