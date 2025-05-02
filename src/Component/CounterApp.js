import React,{Component} from 'react';
class CounterApp extends Component{
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }
  handleIncrement=()=>{
  this.setState({count:this.state.count+1})
  }
  handleDecrement=()=>{
    if(this.state.count<=0)return;
    this.setState({count:this.state.count-1})
  }
 
  render(){
    
    
    return(
      <div>
         <h1>Counter App </h1>
         <h3>Counter: {this.state.count}</h3>
         <button onClick={this.handleIncrement}>Increment(+)</button><br>
         </br>
         <button onClick={this.handleDecrement}>Decrement(-)</button>
      </div>
      
    )
  }  
}
export default CounterApp;