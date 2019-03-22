import React, { Component } from 'react';
import './App.css';
// import Paragraph from './components/Paragraph'
// import ReactLink from './components/ReactLink'
import Bobr from './components/Bobr'
import Comments from './components/Comments'




class App extends Component {
  state = {
    visibility: false,
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={() => this.setState({ visibility: true })}>Bóbr</button>
          <button onClick={() => this.setState({ visibility: false })}>OdBóbr</button>
          {/* <button onClick={() => this.setState({ visibility: false })}>Pokaz komentarze</button> */}
          {this.state.visibility && <Bobr />}
        </header>
      </div>
    );
  }
}

export default App;


// Polecenie

// A teraz przebuduj aplikację tak, aby pod zdjęciem widniał kolejny przycisk 
// z etykietą "Pokaz komentarze".
// Przycisk ten powinien po kliknięciu wyświetlić listę komentarzy. 
// Jako danych źródłowych uzyj array'a z tego URLa 
// https://jsonplaceholder.typicode.com/posts?_limit=10. 
// Przekopiuj te dane i zadeklaruj je sobie jako zmienną.
// Stwórz nowy komponent do wyświetlania komentarzy, który będzie odbierał w propsach:
// 1. ID autora
// 2. Tytuł komentarza
// 3. Treść
// Mapując po danych źródłowych, uzyj nowo utworzonego komponentu, 
// aby za jego pomocą wyświetlić w listę komentarzy.
// Komentarze musza wyglądać, jak to zazwyczaj wyglądają komentarze. 
// Czytelne, kazdy odseparowany od siebie,
// tytuł cięzszy wizualnie itp. Uzyj CSS.