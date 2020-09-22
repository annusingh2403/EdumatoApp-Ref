import React, { Component } from 'react';
import QuickSearchDisplay from "./quickSearchDisplay";

const mealTypeUrl = "https://edumato-app.herokuapp.com/mealtype";

class QuickSearchApi extends Component {
    constructor(){
        super()

        this.state={
            mealType: ""
        }
    }

    render() { 
        return ( 
            <QuickSearchDisplay mealData={this.state.mealType} /> 
        );
    }

    componentDidMount(){
        fetch(mealTypeUrl,{method:"GET"})
        .then((res) => res.json())
        .then((data) => {
            this.setState({mealType:data})
        })
    }
}

export default QuickSearchApi;