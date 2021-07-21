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
  const eventDate = props.Info.content.eventDate;
  console.log(eventDate);

  var thatDate = new Date(eventDate);
  function getDayOfWeek(date) {
    var week;
    if (date.getDay() == 0) week = "Sunday";
    if (date.getDay() == 1) week = "Monday";
    if (date.getDay() == 2) week = "Tuesday";
    if (date.getDay() == 3) week = "Wednesday";
    if (date.getDay() == 4) week = "Thursday";
    if (date.getDay() == 5) week = "Friday";
    if (date.getDay() == 6) week = "Saturday";
    return week;
  }

  console.log("thatday: ", new Date(Info.content.comments.commentTime));
  console.log("thatday: ", getDayOfWeek(thatDate));

  function commentTimeYMDT(commentTime) {
    return (
      new Date(commentTime).toLocaleDateString() +
      " " +
      new Date(commentTime).toLocaleTimeString()
    );
  }

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
                        {commentTimeYMDT(comment.commentTime)}
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
