import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';

const MeetUpList = ({ meetups }) => {
  return (
    <div className={classes.meetupList}>
      {meetups?.map((meetup) => (
        <MeetupItem meetup={meetup} />
      ))}
    </div>
  );
};

export default MeetUpList;
