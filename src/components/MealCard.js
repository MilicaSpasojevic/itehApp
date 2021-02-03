import React, { useState, useEffect } from 'react'
import { MEALS } from '../data/dummy-data'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {useDispatch} from 'react-redux'
import { dodajJelo } from '../store/actions/iteh';
import axios from 'axios';




export const MealCard = (props) => {
    const allMeals = MEALS;
    const dispatch = useDispatch();

    const [mealsApi, setMealsApi] = useState("");
    const [load, setLoad]=useState(false);

    useEffect(() => {
        axios.get("http://localhost:3000/posts")
        .then(res=>{
            setMealsApi(res.data);
            setLoad(true);
            
        })
        .catch(err=>{
            console.log(err);
        })
        
    },[]);



    if (!load){
        return <div>Loading...</div>
    }

    return (
        
        
        mealsApi.map(meal =>
            <div className="box">
                <div class="rowMeal">
                    <h4>{meal.title}</h4>
                    <Link
                        to={{
                            pathname: "/recepie",
                            recepieProps: {
                                m: meal.id
                            }
                        }}
                    >
                    <button class="btn btn-success" onClick={()=>{dispatch(dodajJelo(meal));
        }}>Go to recepie</button>

                    </Link>
                </div>
                <img src={meal.imageUrl} className="imageMeal" />

            </div>
        )

    )
}



