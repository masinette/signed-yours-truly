import logo from './treble-clef.svg';
import './App.css';
import AlbumCard from './components/album/AlbumCard';
import AlbumDeck from "./components/album/AlbumDeck";
import {Container, Row, Col, Navbar} from 'react-bootstrap';
import LandingPage from "./components/LandingPage";


function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>

      <div class="sidebar">
        <img src={logo} className="App-logo" alt="logo" />
      </div>

      <div class="main-page-wrapper">
        <LandingPage/>
          <Row>
            {/* <Col></Col> */}
            <Col><AlbumDeck/></Col>
          </Row> 
      </div>
    </div>
  );
}

export default App;
