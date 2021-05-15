import logo from './treble-clef.svg';
import './App.css';
import AlbumCard from './components/AlbumCard'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <AlbumCard />

    </div>
  );
}

export default App;
