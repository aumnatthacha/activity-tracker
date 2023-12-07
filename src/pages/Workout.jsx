/* eslint-disable no-unused-vars */
import { useState } from 'react'
import Activity from "../components/Activity";
import AddActivity from "../components/AddActivity";
import { useDispatch, useSelector } from 'react-redux';

const Workout = () => {
    const [add, setAdd] = useState(false);
    const allActivities = useSelector((state) => state);
    const handleClick = () => {
        setAdd(!add);
    };
    console.log(allActivities);

    return (
        <div className="workour-wrapper">
            <h2>My Workout</h2>
            <button onClick={handleClick}>Add Activity</button>
            {add && <AddActivity />}
            {allActivities.map((activity) => {
                return (
                    <Activity
                        key={activity.id}
                        id={activity.id}
                        name={activity.name}
                        duration={activity.duration}
                    />
                );
            })}
        </div>
    );
};

export default Workout