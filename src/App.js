import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      value: 'Type Something',
      style: {
        backgroundColor: 'orangered',
        padding: '16px',
        cursor: 'pointer',
        color: '#fff'
      }
    }
  }



  changeHandler(event, value) {
    console.log(event);
    this.setState({ 'value': event.target.value })

  }



  clickHandler(event) {
    console.log(event);
    this.setState({
      style: {
        backgroundColor: 'salmon',
        padding: '16px',
        transform: 'scale(2)',
        color: '#fff',
        fontSize: '20px'
      }
    })
  }

  mouseOverHandler(event) {
    this.setState({
      style: {
        backgroundColor: 'salmon',
        padding: '16px',
        color: '#fff',
        cursor: 'pointer',
        transform: 'scale(2)',
        marginBottom: '26px',
        fontSize: '20px',
        transition: 'all .5s'
      }
    })
  }

  mouseLeaveHandler(event) {
    this.setState({
      style: {
        backgroundColor: 'orangered',
        padding: '16px',
        transition: 'all .5s'
      }
    })
  }



  render() {

    return (
      <div className="App">

        <br></br>
        <hr></hr>
        <br></br>

        <ShowMany count={3} />

        <br></br>
        <hr></hr>
        <br></br>

        {getTestArray(5).map(element => {
          return (<div>{element}</div>)
        })}

        <br></br>
        <hr></hr>
        <br></br>

        <div>
          <input
            onClick={this.clickHandler.bind(this)}
            onChange={this.changeHandler.bind(this)}
            onMouseOver={this.mouseOverHandler.bind(this)}
            onMouseLeave={this.mouseLeaveHandler.bind(this)}
            value={this.state.value}
            style={this.state.style} />
        </div>

        <div>
          {this.state.value}
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
