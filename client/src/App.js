import React, { Component } from 'react';
import axios from 'axios'

class App extends Component {

  componentDidMount(){
    axios.get('/api/product/articles').then(response=>{
      console.log(response.data)
    })
  }
  render() {
    return (
      <div className="App">
        MY APP
      </div>
    );
  }
}

export default App;
