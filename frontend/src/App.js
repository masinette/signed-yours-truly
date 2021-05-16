import logo from './treble-clef.svg';
import './App.css';
import AlbumCard from './components/AlbumCard'
import {Container, Row, Col} from 'react-bootstrap'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

        <Container >
          <Row>
            <Col></Col>
            <Col><AlbumCard/></Col>
          </Row> 
      </Container>

    </div>
  );
}

export default App;