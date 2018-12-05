import React, { Component } from 'react'

export default class Counter extends Component {
    
    //state = {number : this.props.num}
    
    add = (id)=>{
        this.props.OnUpdate(1)
        //this.setState({number:this.state.number+1})
        this.props.OnUpdateAdd(1,id)
    }
    sub = (id)=>{
        this.props.OnUpdate(-1)
        //this.setState({number:this.state.number-1})
        this.props.OnUpdateSub(-1,id)
    }
    initialNumber = ()=>{
        this.setState({number : 0})
    }
    render() {
      return (
        <div>
          <button onClick={()=>this.add(this.props.id)}>+</button>
          {this.props.number}
          <button onClick={()=>this.sub(this.props.id)}>-</button>
          
        </div>
      );
    }
}
