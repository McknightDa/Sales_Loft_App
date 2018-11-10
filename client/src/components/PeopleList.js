import React, { Component } from 'react';
import axios from 'axios';
class PeopleList extends Component {

    state = {
        people: []
      };

 componentDidMount(){
  
    axios.get(process.env.SALESLOFT_URL)
    this.setState({
        people: response.data,
      });
    } catch (e) {
      this.setState({
        error: e.message,
         });
  }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default PeopleList;