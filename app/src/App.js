import React, {useEffect, useState} from 'react';
import './App.css';
import {fetchCharacters} from './actions/actions'
import {connect} from 'react-redux'

function App(props) {
  useEffect(() => {
    props.fetchCharacters()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
       <h1>Rick and Morty Characters</h1>
       <div className = "characters">
       {props.characters.map(character => (
         <div className = "charinfo">
         <p>{character.name}</p>
         <img src={character.image} alt = {character.name}/>
         </div>
       ))}
       </div>
      </header>
    </div>
  );
}

const mapStateToProps = (state) => {
  return{
    characters: state.characters
}
}
export default connect(mapStateToProps, {fetchCharacters})(App);
