/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useDispatch } from 'react-redux'

const Activity = ({ id }) => {
    const dispatch = useDispatch();
    const deleteActivity = () => {
        dispatch({
            type: "DELETE_ACTIVITY",
            payload: {
                id: id,
            },
        });
    };
    return (
        <div className='section'>
            <p>
                <b>Activity:</b> {id}, <b>Duration:</b>
                <button onClick={deleteActivity}>Delete</button>
            </p>
        </div>
    );
};

export default Activity