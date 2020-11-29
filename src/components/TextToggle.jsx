import React, { Component } from 'react';

class TextToggle extends Component {
    constructor(){
        super()
        this.lessDesc = "React is an open-source, front end, JavaScript library for building user interfaces or UI components."
        this.moreDesc = "React is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications"
        this.state={
            showMore: false
        }
    }

    toggleText = () => {
        // console.log("Hello")
        this.setState({
            showMore: !this.state.showMore
        })
    } 

    render() {
        return (
            <div>
                <p style={this.state.showMore? {color: 'green'} : {color: 'red'}}>{this.state.showMore ? this.moreDesc : this.lessDesc}
                    <span onClick={this.toggleText} style={{fontWeight: 'bold', cursor: 'pointer', color: 'black'}}>{this.state.showMore? ' Show Less' : ' Show More'}</span>
                </p>       
            </div>
        );
    }
}

export default TextToggle;