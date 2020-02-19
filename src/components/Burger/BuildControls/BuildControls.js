import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl.js'



const controls = [
    {label:'Salad',type:"salad"},
    {label:'Cheese',type:"cheese"},
    {label:'Meat',type:"meat"},
    {label:'Bacon',type:"bacon"},

];

const buildControls = (props) => {

    return (
        <div className={classes.BuildControls}>
            {controls.map((ctrl) => {
                return <BuildControl
                        key={ctrl.label}
                        label={ctrl.label}
                        added = {() => props.addIng(ctrl.type)}
                        removed = {() => props.removeIng(ctrl.type)}
                        />
            })}
        </div>
    );
}

export default buildControls;