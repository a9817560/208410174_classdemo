import React, { Component } from 'react'
import { robots } from './Ten_74'
import CardList_74 from './CardList_74';
import SearchBox_74 from './SearchBox_74'

class App_74 extends Component {
    constructor() {
        super();
        this.state = {
            robots: robots,
            searchField: ''
        }
    }

    onSearchChange = event => {
        this.setState({ searchField: event.target.value });
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        });
        return (
            <div className="tc">
                <h1>208410174_ClassDemo</h1>
                <SearchBox_74 searchChange={this.onSearchChange} />
                <CardList_74 robots={filteredRobots} />
            </div>
        )
    }

}

export default App_74

