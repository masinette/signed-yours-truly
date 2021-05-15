import React from 'react'
import {Container, Row, Col, Card, Button} from 'react-bootstrap'

export default function AlbumCard() {
  return (
    <Container >
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
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
    </Container>
  )
}

