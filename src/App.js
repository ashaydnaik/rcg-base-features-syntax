import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            {name: 'Max', age: 28},
            {name: 'Man', age: 29},
            {name: 'Stephanie', age: 26}
        ]
    };

    switchNameHandler = (newName) => {
        // DON'T DO THIS: this.state.persons[0].name = 'Maximum';
        this.setState({
            persons: [
                {name: newName, age: 28},
                {name: 'Manly', age: 39},
                {name: 'Step', age: 16}
            ]
        });
    };

    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                {name: 'Max', age: 28},
                {name: event.target.value, age: 39},
                {name: 'Step', age: 16}
            ]
        });
    };

    render() {
        const style = {
          backgroundColor: 'white',
          font: 'inherit',
          border: '1px solid blue',
          padding: '8px',
          cursor: 'pointer'
        };
        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <button style={style} onClick={() => this.switchNameHandler('Harry')}>Switch Name</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                    changed={this.nameChangedHandler}
                    click={this.switchNameHandler.bind(this, 'Jacob')}/>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
            </div>
        );
    }
}

export default App;
