import React from 'react'
import {Container, Row, Col, Card, Button, CardDeck} from 'react-bootstrap'
import axios from 'axios';

export default function AlbumCard() {

  // useEffect(() => {
  //   effect
  //   return () => {
  //     cleanup
  //   }
  // }, [input])


  return (
    <CardDeck >
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="../logo.png/100px180" />
        <Card.Body>
          <Card.Title>Album Title</Card.Title>
          <Card.Text>
            This is where the album artist and tracks will go, and year
          </Card.Text>
          <Card.Footer>
            <Card.Title>$100</Card.Title>
            <Button variant="primary">Go somewhere</Button>
          </Card.Footer>
        </Card.Body>
      </Card>
    </CardDeck>
  )
}

