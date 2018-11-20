import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      value: 'Type Something'
    }
  }


  render() {

    return (
      <div className="App">

        <br/>
        <hr/>
        <br/>

        <div>
          <form action="App.js" className="form">
            <input type="text" placeholder="Username" className="formInput"/>
            <input type="text" placeholder="Name"/>
            <input type="text" placeholder="Last Name"/>
            <input type="email" placeholder="Email"/>
            <label htmlFor="comment">Leave a Comment</label>
            <textarea name="comment" id="" cols="" rows="">

            </textarea>

          </form>
        </div>

      </div>
    );
  }
}

// Tasks
function ShowMany(params) {
  let rows = [];
  for (let i = 0; i < params.count; i++) {
    rows.push(<div>Labas {i + 1}</div>)
  }
  return rows;
}

function getTestArray(params) {
  let rows = [];
  for (let i = 0; i < params; i++) {
    rows.push(<div>{'Labas' + (i + 1)}</div>)
  }
  return rows;
}

export default App;
