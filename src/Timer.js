import React, {Component} from 'react';

    class Timer extends Component{
        constructor(props){
        super(props);
            this.state = {
                minute : 0,
                second: 0,
                millisecond : 0
            }
        }

    timerStart(e){
        e.preventDefault();
        this.setState(state => {
        this.timer = setInterval(() => {
        const {minute, second, millisecond} = this.state;
            if (millisecond > 0){
                this.setState(({ }) => ({
                millisecond : millisecond -1
            }))
            }else{
            if(second > 0){
                this.setState(({}) => ({
                second : second - 1,
                millisecond : 59
            }))
            }else{
            if(minute === 0){
                clearInterval(this.timer)
            }else{
                this.setState(({}) =>({
                minute : minute -1,
                second : 59
            }))
        }
        }
        }
    }, 1000/60);
    })
    }

    render(){
        return(
            <div>
                <body>
                <h1>{this.state.minute} : {this.state.second} : {this.state.millisecond}</h1><br></br>
                <input onChange = {(e) => this.setState({minute : (e.target.value)})}></input><br></br>
                <button onClick={(e) => this.timerStart(e)}>START!!!</button>
                </body>
            </div>
        )
    }
}

export default Timer;