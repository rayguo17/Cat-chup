import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}));

const Comments = (props) => {
  const classes = useStyles();
  const Info = props.Info;

  return (
    <List className={classes.root}>
      {Info.content.comments.map((comment, index) => {
        return (
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src={comment.commentUserIcon} />
            </ListItemAvatar>
            <ListItemText
              primary={comment.commentUserName}
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    <div>
                      <div> {comment.commentContent}</div>
                      <div style={{ textAlign: "right" }}>
                        {comment.commentTime}
                      </div>
                    </div>
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
        );
      })}

      <Divider variant="inset" component="li" />
    </List>
  );
};

export default Comments;
