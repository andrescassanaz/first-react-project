import React, { Component }from 'react';
import './css/bootstrap.min.css';
import Header from './components/Header.js';
import NewComment from './components/NewComment';



class App extends Component {
  state = {  }
  render() {
    return (
      <div className="container">
         <Header titulo='Caja de comentarios'/>
         <NewComment />
      </div>
    );
  }
}

export default App;
