import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import axios from 'axios'

class App extends Component {


  state = {
    people: []
  };
    
    componentDidMount(){
      
      axios.get(
      url= 'https://api.salesloft.com/v2/people.json',
      headers= 
       { 'Postman-Token': '15a70771-f991-43a1-a5b6-18ca2a4786bf',
         'cache-control': 'no-cache',
        
           // Step 5: Save the response array to this.state.people
           .then((response) => {
             const people = response.data.people;
             this.setState({people: people});
           })
           .catch((error) => {
             console.error("Error: ", error);
           
          },
        

  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

export default App;
