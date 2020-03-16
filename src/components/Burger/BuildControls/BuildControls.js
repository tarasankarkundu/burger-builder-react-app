import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const BuildControls = (props) => {

    let controls = [
        { label: 'Salad', type: 'salad' },
        { label: 'Bacon', type: 'bacon' },
        { label: 'Cheese', type: 'cheese' },
        { label: 'Meat', type: 'meat' },
    ]
    return (
        <div className={classes.BuildControls}>
            <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
            {
                controls.map((control) => (
                    <BuildControl 
                        label={control.label} 
                        key={control.type}
                        add={()=>props.addIngredient(control.type)}
                        remove={()=>props.removeIngredient(control.type)}
                        disabled={props.ingredients[control.type] <= 0}
                        /> 
                ) )
            }
             <button 
            className={classes.OrderButton}
            disabled={!props.purchasable} onClick={props.ordered}>{props.isAuth ? 'ORDER NOW' : 'SIGN UP TO ORDER'}</button>
            
        </div>
    )
}

export default BuildControls;