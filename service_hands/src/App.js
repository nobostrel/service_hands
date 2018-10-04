import React, { Component } from 'react';
import { AppComponent } from './App.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.firstInputRef = React.createRef();
    this.secondInputRef = React.createRef();
    this.state = {
      firstInput: "",
      secondInput: ""
    }
  }

  onChangeHandler = event => {
    let filterValue = event.target.value.replace(/[^0-9A-F]/, "");
    event.target.value = filterValue;
  }

  onClickHandler = event => {
    if ( this.firstInputRef.current.value.length > 5
    && this.secondInputRef.current.value.length > 5) {
      this.setState({
        firstInput: this.firstInputRef.current.value,
        secondInput: this.secondInputRef.current.value
      })
    } else {
      alert("В обоих полях должно быть минимум по 6 допустимых значений");
    }
  }

  render() {
    return (
      <div className="App" style={{background:`radial-gradient(#${this.state.firstInput}, #${this.state.secondInput})`}} >
        <AppComponent
          onClick={this.onClickHandler}
          onChange={this.onChangeHandler}
          firstInputRef={this.firstInputRef}
          secondInputRef={this.secondInputRef}
           />
      </div>
    );
  }
}

export default App;
