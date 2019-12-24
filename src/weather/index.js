import React, {Component} from 'react';



export default class Weather extends Component{
    minmaxTemp = (min, max) => {
        if(min && max){
        return(
            <h1>
                <span>{min}&deg;</span>{' '}
                <span>{max}&deg;</span>
            </h1>
        )
    }
    }
    render(){
        return(
            <div style={{color:"white"}}>
                
                <i className={`wi ${this.props.icon} display-1 mt-4`} /> 
                <div className="mt-4">
               {this.props.temp_celsius ? (<h1>{this.props.temp_celsius}&deg;</h1>) : null}
               
                {this.minmaxTemp(this.props.temp_min, this.props.temp_max)}
                </div>
                <h1>{this.props.description}</h1>
            </div>
        )
    }
}

