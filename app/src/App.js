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
         <p className = "charinfo">{character.name}</p>
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
