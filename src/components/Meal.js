import React,{useState, useEffect} from 'react'
import axios from 'axios';
import { MEALS } from '../data/dummy-data';
import '../styles/style.css'
import { MealCard } from './MealCard';
import { render } from '@testing-library/react';


const Meal= props=> {
    
   
    

    return (
        <div class='grid'>
            <MealCard/>
           
        </div>
    )
}

export default Meal;
