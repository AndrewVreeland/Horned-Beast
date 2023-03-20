// REBUILD AS A CLASS COMPONENT

// 1st IMPORTS 

import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import data from './data/data.json';
import SelectedBeast from './selectedBeast';
import { Form } from 'react-bootstrap'
// 2nd CREATE CLASS - will always have a render method 

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hearts: '',
      showModal: false,
      selectedBeastImg: '',
      selectedBeastDesc: '',
      data: data,
    }
  }


  handleCloseModal = () => {
    this.setState({
      showModal: false,

    })
  }
  handleOpenModal = (event) => {
    console.log('event:', event.target.alt)
    this.setState({
      showModal: true,
      selectedBeastImg: event.target.src,
      selectedBeastDesc: event.target.alt
    })
  }


  handleSelect = (event) => {
    let selected = event.target.value;

    // WTD 
    // Condition ? if true : if false 

let filteredHorns = data.filter(beast =>{
  if(selected === 'all'){
    return beast
  }else{
    return beast.horns === +selected;
  }
})
this.setState({
  data: filteredHorns
})



  //   if (selected === '1') {
  //     let newData = data.filter(h => h.horns === 1)
  //     this.setState({
  //       data: newData
  //     })
  //   } if (selected === '2') {
  //     let newData = data.filter(h => h.horns === 2)
  //     this.setState({
  //       data: newData
  //     })
  //   } else if (selected === '3') {
  //     let newData = data.filter(h => h.horns === 3)
  //     this.setState({
  //       data: newData
  //     })
  //   } else if (selected === '100') {
  //     let newData = data.filter(h => h.horns === 100)
  //     this.setState({
  //       data: newData
  //     })
  //   } else if (selected === 'all') {
  //     let newData = data.filter(h => h.horns < 101)
  //     this.setState({
  //       data: newData
  //     })
  //   }
  // }
  render() {
    return (
      <>
        <Header
          hearts={this.state.hearts}
        />
        <Form>
          <Form.Group>
            <div id='selectContainer'> <Form.Select id='select' name='selected' onChange={this.handleSelect}>
              <option value=''>Select an Option</option>
              <option value='1'>Beasts with 1 horn</option>
              <option value='2'>Beasts with 2 horns</option>
              <option value='3'>Beasts with 3 horns</option>
              <option value='100'>Beasts with 100 horns</option>
              <option value='all'>All horned beasts</option>
            </Form.Select></div>
          </Form.Group>
        </Form>
        <Main
          data={this.state.data}
          addHearts={this.addHearts}
          handleOpenModal={this.handleOpenModal}
        />

        <SelectedBeast
          selectedBeastImg={this.state.selectedBeastImg}
          selectedBeastDesc={this.state.selectedBeastDesc}
          showModal={this.state.showModal}
          handleCloseModal={this.handleCloseModal}
        />
        <Footer />
      </>
    )
  }
}

// EXPORT CLASS THE CLASS FOR OTHER FILES TO IMPORT
export default App;