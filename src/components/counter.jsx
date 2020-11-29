import React, { Component } from 'react';

class Counter extends Component {
    constructor(){
        super()
        this.state = {
            counter: 0,
        }
    }

    increase = () =>{
        this.setState({
            counter: this.state.counter + this.props.count
        })
    }

    decrease = () =>{
        this.setState({
            counter: this.state.counter - this.props.count
        })
    }

    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <h1>Counter</h1>
                <h1>{this.state.counter}</h1>
                <button onClick={this.increase}>Add Counter</button>                         
                <button onClick={this.decrease}>Del Counter</button>                         
            </div>          
        );
    }
}

export default Counter;