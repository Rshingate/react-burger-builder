import React from 'react';
import classes from './BuildControl.css'

const buildControl = (props) => {
    return (
        <div>
            <div className={classes.BuildControl}>{props.label}</div>
            <button className={classes.Less} onClick={props.removed}>Less</button>
            <button className={classes.More} onClick={props.added}>More</button>
        </div>
    );
}

export default buildControl;