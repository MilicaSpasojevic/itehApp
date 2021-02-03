import React from 'react'
import { MEALS } from '../data/dummy-data';
import {useSelector} from 'react-redux'

const Recepie = (props) => {

   // const mealId = props.location.recepieProps;
   
   const meal = useSelector(state=>state.mealRed.jelo);
 

   

    //const meal = MEALS.find(meal=>meal.id=mealId);
    console.log(meal)

    const ingridians = meal.ingredians.map((link) =>
    <li key={link}>{link}</li> 
);

const steps = meal.steps.map((link) =>
    <li key={link}>{link}</li> 
);
    
   

   
    
    return (
        <div className="gridRecepie">
            <div className="boxRecepie">
            <div className="naslov">
                <h1>{meal.title}</h1>
                </div>
                <div className="ingredians">
                
                <h3>INGREDIANS</h3>
                
                <ul>
                    {ingridians}
                </ul>
                </div>
                <div className="steps">
                <h3>STEPS</h3>
                <ul>
                    {steps}
                </ul>
                </div>
                
            </div>
            

        </div>
    )
    }


export default Recepie;
