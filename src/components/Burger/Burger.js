import React from 'react';
import classes from './Burger.css';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';

const Burger = (props) => {
    let ings = Object.keys(props.ingredients).map((key) => {
        return [...Array(props.ingredients[key])].map((_,i) => {
            return (<BurgerIngredients key={key+i} ingredientType={key} />)
        })
    })
    .reduce((arr, el) => {
        return arr.concat(el)
    }, []);
    if (ings.length === 0) {
        ings = <p>Please start adding ingredients!</p>;
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredients ingredientType="bread-top"/>
            {ings}
            <BurgerIngredients ingredientType="bread-bottom"/>
        </div>        
    )
}
export default Burger;