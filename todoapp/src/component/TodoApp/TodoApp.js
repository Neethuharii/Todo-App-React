
import React, { Component } from 'react'
import "./TodoApp.css";
export class todoApp extends Component {
 
  state={
    input:"",
    items:[]
  };
  handlechange= event => {
this.setState({
  input:event.target.value
});


  };
  storeItems=(event)=>{
    event.preventdefault();
const {input}=this.state;

this.setState({
  items:[...this.state.items,input]
});
  };
  render() {
    const{input,items}= this.state;
    console.log(items);
    return (
      < div className="todo-container">
         <form className="input section" onSubmit={this.storeItems}>
        <h1>todo App
            </h1>
            
                <input type="text" value={input} onChange={this.handlechange}placeholder="enter items..."/>
                
            </form>
            <ul>
                {items.map((data,index)=>(
                  <li key={index}>
                    {data} <i className="fas fa-trash-alt"></i></li>
                
                ))}
            </ul>
        </div>
    );
  }
}
export default todoApp;