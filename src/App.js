import React, { Component }from 'react';
import './css/bootstrap.min.css';
import Header from './components/Header.js';
import NewComment from './components/NewComment';


class App extends Component {
  state = { 
      messages: []

   }

  createNewComment = data => {
    const actualMessages = [...this.state.messages, data];

    this.setState({
      messages: actualMessages
    })
  }


  render() {
    return (
      <div className="container">
         <Header titulo='Caja de comentarios'/>
         <NewComment createNewComment={this.createNewComment}/>
      </div>
    );
  }
}

export default App;
