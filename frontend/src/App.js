import logo from './treble-clef.svg';
import './App.css';
import AlbumCard from './components/AlbumCard';
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
        {/* <Container fluid> */}
          <LandingPage/>
          <Row>
            <Col></Col>
            <Col><AlbumCard/></Col>
          </Row> 
      </div>
      {/* </Container> */}
    </div>
  );
}

export default App;
