const PlanTodayLabel = (props) => {
  const Info = props.Info;
  console.log("plan", Info);
  const mood = props.Info.content.mood;
  console.log("mood", mood);
  return (
    <div className="planTodayBox_card">
      <div className="planTodayBox_card_time">
        <p>{Info.content.startTime}</p>
        <p>&nbsp;-&nbsp;</p>
        <p>{Info.content.endTime}</p>
      </div>
      {(() => {
        switch (mood) {
          case "happy":
            return (
              <div className="event_label_happy">
                <div className="event_label_markcolor_happy"></div>
                <div className="event_label_title">{Info.content.caption}</div>
                {/* <div className="event_label_time">{}Hour</div> */}
              </div>
            );
          case "sad":
            return (
              <div className="event_label_sad">
                <div className="event_label_markcolor_sad"></div>
                <div className="event_label_title">{Info.content.caption}</div>
                {/* <div className="event_label_time">{}Hour</div> */}
              </div>
            );
          case "angry":
            return (
              <div className="event_label_angry">
                <div className="event_label_markcolor_angry"></div>
                <div className="event_label_title">{Info.content.caption}</div>
                {/* <div className="event_label_time">{}Hour</div> */}
              </div>
            );
          case "fear":
            return (
              <div className="event_label_fear">
                <div className="event_label_markcolor_fear"></div>
                <div className="event_label_title">{Info.content.caption}</div>
                {/* <div className="event_label_time">{}Hour</div> */}
              </div>
            );
          case "disgust":
            return (
              <div className="event_label_disgust">
                <div className="event_label_markcolor_disgust"></div>
                <div className="event_label_title">{Info.content.caption}</div>
                {/* <div className="event_label_time">{}Hour</div> */}
              </div>
            );
          default:
            return (
              <div className="event_label">
                <div className="event_label_markcolor"></div>
                <div className="event_label_title">{Info.content.caption}</div>
                {/* <div className="event_label_time">{}Hour</div> */}
              </div>
            );
        }
      })()}
    </div>
  );
};

export default PlanTodayLabel;
