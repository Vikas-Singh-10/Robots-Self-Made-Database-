import React, {useState} from "react";
import CardList from "./CardList";
import { robots } from './robots.js';
import SearchBox from './SearchBox.js';
import './App.css';
import Scroll from "./Scroll.js";

const App = () => {
    const [searchfield, setSearchfield] = useState('');

    const onSearchChange = (event) => {
        setSearchfield(event.target.value);
    }

    const filteredRobots = robots.filter(robots => {
            return robots.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    if(!robots){
        return <h1>LOADING</h1>
    }
    else{
        return (
            <div className="tc">
                <h1 className="f1">Robo Freak</h1>
                <SearchBox searchchange={onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobots}/>
                </Scroll>
            </div>
        )
    }
}

export default App;