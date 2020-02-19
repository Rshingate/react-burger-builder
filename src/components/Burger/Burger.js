import React from 'react';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';

import classes from '../Burger/Burger.css'

const burger = (props) => {

    let transformedIngredients = Object.keys( props.ingredients )
             .map( igKey => {
                 return [...Array( props.ingredients[igKey] )].map( ( _, i ) => {
                   return <BurgerIngredients key={igKey + i} type={igKey} />;
                 });
             }).reduce((arr,ele) => {
                    return arr.concat(ele);
             },[]);

    if(transformedIngredients.length === 0)
    {
        transformedIngredients = <p>Please Add Ingredients</p>;
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredients type='bread-top'></BurgerIngredients>
             {transformedIngredients}
            <BurgerIngredients type='bread-bottom'></BurgerIngredients>
        </div>
    );

}

export default burger;