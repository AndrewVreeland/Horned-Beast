import React from 'react'
// import { Card } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './HornedBeast.css'

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: 0,
      needInfo: false
    }
  }

  needsInfo = () => {
    this.setState({
      needInfo: true
    })
  }
  gotInfo = () => {
    this.setState({
      needInfo: false
    })
  }
  // METHOD TO UPDATE STATE FOR EACH PERSON TO TRAVE VOTES 

  handleVote = () => {
    // react method called this.setState() -> taskes in object and rebuild state obj
    this.setState({
      votes: this.state.votes + 1
    })
  }


  // HELPER FUNCTIONS
  // handleNameClick = () => {
  //   this.props.handleOpenModal(this.props.title)
  // }
  //

  render() {
    return (
      <Card>
        <Card.Body >
          <Card.Title>
            <h3>{this.props.title}</h3>
          </Card.Title>
          <Card.Text>
            <Card.Img
              onClick={this.props.handleOpenModal}
              src={this.props.image_url}
              alt={this.props.description}
            />
            {/* <p>{this.props.description}</p> */}
            <p>{this.state.votes}❤️Favorites</p>
          </Card.Text>
          <div id='buttons'>
            
            <Button onClick={this.handleVote} variant="dark">Like!</Button>
          </div>
          <div
            className={this.state.InfoMe ? 'info-me' : ''}>
            {this.state.InfoMe ? 'I want more information about this beast.' : ''}
          </div>
        </Card.Body>
      </Card>
    )
  }
}
export default HornedBeast
