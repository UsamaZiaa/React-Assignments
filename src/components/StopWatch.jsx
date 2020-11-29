import React, { Component } from 'react';

class StopWatch extends Component {
    constructor(){
        super()
        this.state = {
            min: 0,
            sec: 0,
            msec: 0
        }
    }

    timer = () =>{
        // console.log("Hello")
        this.setState({
            msec: this.state.msec + 1
        })
        if(this.state.msec >= 100){
            // console.log("Boom")
            this.setState({
                sec: this.state.sec + 1,
                msec: 0
            })
        }
        else if(this.state.sec >= 60){
            this.setState({
                min: this.state.min + 1,
                sec: 0
            })
        }
    }

    start = () => {
        this.interval = setInterval(this.timer,10)    
    }

    pause = () => {
        clearInterval(this.interval)
    }

    reset = () => {
        clearInterval(this.interval)
        this.setState({
            min: 0,
            sec: 0,
            msec: 0
        })
    }

    render() {
        return (
            <div style={{textAlign: "center"}}>
                <h1>Stop Watch</h1>
                <div>
                    <div style={{display: 'inline-block', fontSize: '40px', margin: '0px 20px'}}><h1>{this.state.min}</h1></div>
                    <div style={{display: 'inline-block', fontSize: '40px', margin: '0px 20px'}}><h1>{this.state.sec}</h1></div>
                    <div style={{display: 'inline-block', fontSize: '40px', margin: '0px 20px'}}><h1>{this.state.msec}</h1></div>
                </div>
                <div>
                    <button onClick={this.start} style={{margin: '0px 20px'}}>Start</button>
                    <button onClick={this.pause} style={{margin: '0px 20px'}}>Pause</button>
                    <button onClick={this.reset} style={{margin: '0px 20px'}}>Reset</button>
                </div>
            </div>
        );
    }
}

export default StopWatch;