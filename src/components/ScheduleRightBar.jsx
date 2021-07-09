import '../stylesheet/scheduleArea.css'
import WeekIcon from './WeekIcon';
import EventCard from './EventCard';

const ScehduleRightBar = (props) => {
    return (
        <div>
            <center>
                <h3>Available  Event</h3>
                <WeekIcon />
                <hr
                    style={{
                        height: 5
                    }}
                />
                <EventCard />
            
            </center>
        </div>)
}


export default ScehduleRightBar;