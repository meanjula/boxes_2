import React,{ Component } from "react";
import Box from "./Box";

class MainClas extends Component{
	state={
		persons:[
			{name:'Anjula', age:32, title:'Developer', love:'plants and coding'},
		    {name:'Mary', age:32, title:'CEO',love:'swimming'},
		    {name:'Sophia', age:32, title:'Designer',love:'cycling'},
		]}
		changeNameHandler=()=>{
			console.log('WOOW')
		}
	render(){
		return(
			< >
			<main>
			<Box 
			name={this.state.persons[0].name} 
			age={this.state.persons[0].age} 
			title={this.state.persons[0].title}
			love={this.state.persons[0].love}
			/>
			<Box 
			name={this.state.persons[1].name} 
			age={this.state.persons[1].age} 
			title={this.state.persons[1].title}
			love={this.state.persons[1].love}
			/>
			<Box 
			name={this.state.persons[2].name} 
			age={this.state.persons[2].age} 
			title={this.state.persons[2].title}
			love={this.state.persons[2].love}
			/>	
		  </main>
		  <button onClick={this.changeNameHandler}>Click ME</button>
		  </>
		);
	}
}
export default MainClas;