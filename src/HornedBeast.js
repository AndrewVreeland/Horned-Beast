import React from 'react'
// import { Card } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './HornedBeast.css'

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: 0
    }
  }

  // METHOD TO UPDATE STATE FOR EACH PERSON TO TRAVE VOTES 

  handleVote = () => {
    // react method called this.setState() -> taskes in object and rebuild state obj
    this.setState({
      votes: this.state.votes + 1
    })
  }

  render() {

    return (
      <Card>
        <Card.Body>
        <Card.Title><h3>{this.props.title}</h3></Card.Title>
        <img src={this.props.image_url} alt={this.props.title} />
        <p>{this.state.votes}❤️Favorites</p>
        </Card.Body>
        <Button  onClick={this.handleVote} variant="dark">Like!</Button>
      </Card>
    )
  }
}
export default HornedBeast

//   }
// // METHOD TO UPDATE STATE FOR EACH BEAST TO TRACK VOTES 
// handleVotes = () => {
// // react method called this.setState() this is a method that helps us change state. under hood it takes in an object and rebuild state object
// this.setState({
//   votes: this.state.votes +1
// })
// }

// //DONE NEED TO FIGURE OUT WHERE THE CARD IS PLACED. 
// //! TENERY WTF WHAT ? TRUE: FALSE
//   render() {
//     return (
//       <Card>
//         <h2> {this.props.title}</h2>
//         <p>{this.state.votes}Votes</p>
//         <img src={this.props.img_url} alt={this.props.description} title={this.props.title}></img>
//         <Button  onClick={this.handleVotes}variant="warning">Like!</Button>

// <div>{this.state.helpMe ? 'I Need help' : ''}</div>
//       </Card>
//     )
//   }
// }
