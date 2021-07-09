import '../stylesheet/scheduleArea.css'
import WeekIcon from './WeekIcon';
import EventCard from './EventCard';

const ScehduleRightBar = (props) => {
    return (
        <div style={{position:"fixed"}}>
            <center>
                <div className="Schedule-header">
                    <h3>Available  Event</h3>
                    <WeekIcon />
                    <hr
                        style={{
                            height: 5
                        }}
                    />
                </div>
                <EventCard />
            
            </center>
        </div>)
}


export default ScehduleRightBar;