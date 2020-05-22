import React from 'react';
import './App.css';
import Hobby from './Hobby';

class App extends React.Component{

  constructor( props ){
    super( props );
    this.state = {
      firstName : "Alex",
      lastName : "Miller",
      hobbies : [{
        name : "Play the piano"
      },
      {
        name: "Programming"
      },
      {
        name : "Swimming"
      },
      {
        name : "Sing"
      }],
      favoriteHobby : "Not selected"
    }

    //this.changeName = this.changeName.bind( this );
  }

  changeName = () =>{
    this.setState({
      firstName : "Alfredo",
      lastName : "Salazar"
    });
  }

  changeFavoriteHobby = ( hobbyName ) => {
    this.setState({
      favoriteHobby : hobbyName
    })
  }


  render(){
    // This is a normal comment
    return(
      <section>
        <h1>
          Hello there {this.state.firstName} { this.state.lastName}
        </h1>
        <p>
          Favorite hobby : {this.state.favoriteHobby}
        </p>
        {/* <ul>
          {this.state.hobbies.map( ( hobby, index ) => {
            return(
              <li>
                {hobby.name}
              </li>
            )
          })}
        </ul> */}
        <ul>
          {this.state.hobbies.map( ( hobby, index ) => {
            return( <Hobby hobbyName={hobby.name} 
                           idx={index}  
                           key={index + "-" + hobby.name}
                           changeFavoriteHobby={this.changeFavoriteHobby}/> );
          })}
        </ul>
        <button onClick={this.changeName}>
          Click me
        </button>
      </section>
    );
  }
}

export default App;
