import React, { Component } from "react";
import Cardlist from "../Components/Cardlist";
import SearchBox from '../Components/SearchBox';
import Scroll from "../Components/Scroll";
import ErrorBoundry from "../Components/ErrorBoundry";

class App extends Component{
    constructor() {
        super()
        this.state = {
            robott : [],
            SearchField : ''
        }
    }
    // anytime you're creating a personal modified method make sure you use an arrow function syntax
    onSearchChange = (event) => {
        const searchChange = event.target.value
        // console.log(searchChange)
        this.setState({SearchField : searchChange})
    }
    componentDidMount() {
        // this.setState({robot : robot})
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(Response => Response.json())
        .then(data => this.setState({robott : data}) )
    }
    render() {
        const filteredRobot = this.state.robott.filter(element => {
            return element.username.toLowerCase().includes(this.state.SearchField.toLowerCase())
            }
            )
            if (this.state.robott.length === 0) {
                return <h1>LOADING... please wait</h1>
            } else {
                return(
                    <div>
                        <SearchBox search = {this.onSearchChange}/>
                        <Scroll>
                            <ErrorBoundry>
                                <Cardlist robots = {filteredRobot}/>
                            </ErrorBoundry>
                        </Scroll>
                    </div>
                )
            }
        
        
    }
};
export default App;
// https://jsonplaceholder.typicode.com/users