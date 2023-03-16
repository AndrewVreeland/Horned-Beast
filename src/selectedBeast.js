import React from 'react'
import { Button } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import './SelectedBeast.css'
class SelectedBeast extends React.Component {
  render() {
    console.log('hello',)

  





    return <Modal 
      show={this.props.showModal}
      onHide={this.props.handleCloseModal}
      >
      <Modal.Header id='modalHead'>
        
        <div class='descriptionText'>{this.props.selectedBeastDesc}</div>
        <Modal.Title></Modal.Title>
      </Modal.Header>
    <Modal.Body id = 'modalBody'>
      <div id='imgContainer'>
      <img class='img1'
        src={this.props.selectedBeastImg}
      alt ={this.props.selectedBeastDesc}
      />
      </div>
      </Modal.Body>
      <Modal.Footer id='footer'>
      <Button onClick={this.props.handleCloseModal} variant='danger'>Close</Button>
      </Modal.Footer>
    </Modal>

  }
}

export default SelectedBeast






