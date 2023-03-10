import React, {Component} from "react";
import CardList from "./CardList";
import { robots } from './robots.js';
import SearchBox from './SearchBox.js';
import './App.css';
import Scroll from "./Scroll.js";

class App extends Component{
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots: users}));
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }

    render() {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if(robots.length === 0){
            return <h1>LOADING</h1>
        }
        else{
            return (
                <div className="tc">
                    <h1 className="f1">Robo Freak</h1>
                    <SearchBox searchchange={this.onSearchChange}/>
                    <Scroll>
                       <CardList robots={filteredRobots}/>
                    </Scroll>
                </div>
            )
        }
    }
}

export default App;