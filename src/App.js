import React from 'react';
import Navbar from './components/layout/Navbar'
import Joke from './components/Meal'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import About from './components/pages/About';
import Meal from './components/Meal';
import Recepie from './components/Recepie'
import MealReducer from './store/reducers/iteh'

import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import {persistStore} from 'redux-persist';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {PersistGate} from 'redux-persist/es/integration/react';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['mealRed']
}



const rootReducer = combineReducers({
    mealRed: MealReducer
})

 
const store = createStore(persistReducer(persistConfig,rootReducer));

const persistor = persistStore(store);

function App() {
    return ( 
    <Provider store={store}>
    <PersistGate persistor={persistor}>
    <Router>
    <div className = "App">
        <Navbar/>
        <div className="">
        <Route path="/" exact component={Meal}/>
        <Route path="/about" exact component={About}/>
        <Route path="/recepie" component={Recepie}/>
        </div>
        </div>
    </Router>
    </PersistGate>
    </Provider>
    )

    }

    export default App;