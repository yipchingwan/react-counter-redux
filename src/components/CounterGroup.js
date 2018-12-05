import React, { Component } from 'react'
import Counter from './Counter'
import { connect } from "react-redux";

class CounterGroup extends Component {
    state = {
        //sum : 0,
        size : 4, 
        counters : new Array(3).fill(0).map(()=>{
            return {number : 0, id: new Date().getDate + Math.random()};
        })
    };

    inputUpdate = (evt) =>{
        this.setState({
            size : evt.target.value
        })
    }
    regenrateCounters = (evt) => {
        this.setState({
            counters : new Array(parseInt(this.state.size)).fill(0).map(()=>{
                return { number: 0, id: new Date().getTime + Math.random() };
            }),
            sum : 0
        })
    }

    clickUpdate = (number)=>{
    //    this.setState({
    //        sum : this.state.sum+number
    //    });
        this.props.dispatch({
            type : 'TOTALSUM',
            payload : number
        });
    }
    add = (number, id)=>{
        const counters = this.state.counters.map(items=>{
            if(items.id===id){
                return {number : items.number + number, id : id}
            }
            else{
                return items;
            }
        });
        this.setState({
            counters : counters
        });
    }
    sub = (number, id)=>{
        const counters = this.state.counters.map(items=>{
            if(items.id===id){
                return {number : items.number + number, id : id}
            }
            else{
                return items;
            }
        });
        this.setState({
            counters : counters
        });
    }
    render() {
      return (
        <div>
            <input onChange={this.inputUpdate}></input>
            <button onClick={this.regenrateCounters}>Generate</button>
            {this.state.counters.map((item)=>( 
                <Counter 
                    key={item.id}
                    id={item.id}
                    OnUpdate={this.clickUpdate} 
                    OnUpdateAdd={this.add} 
                    OnUpdateSub={this.sub} countNumber={this.state.count}
                    number={item.number}/>
            ))}
            <span>{this.props.sum}</span>   
        </div>
      );
    }
}

const mapStateToProps = state => ({
    sum: state.sum
  }); 

connect(mapStateToProps)(CounterGroup)
export default connect(mapStateToProps)(CounterGroup);
