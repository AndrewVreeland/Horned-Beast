// REBUILD AS A CLASS COMPONENT

// 1st IMPORTS 

import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import data from './data/data.json';
import SelectedBeast from './selectedBeast';
// 2nd CREATE CLASS - will always have a render method 

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hearts: '',
      showModal: false,
      selectedBeastImg:'',
      selectedBeastDesc: '',
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

  addHearts = () => {
    this.setState({
      hearts: this.state.hearts + '💙'
    })
  }

  render() {
    return (
      <>
        <Header 
        hearts={this.state.hearts} 
        />
        <Main
          data={data}
          addHearts={this.addHearts}
          handleOpenModal={this.handleOpenModal}
          />
          <SelectedBeast
          selectedBeastImg = {this.state.selectedBeastImg}
          selectedBeastDesc = {this.state.selectedBeastDesc}
          showModal = {this.state.showModal}
          handleCloseModal = {this.handleCloseModal}
          />
        <Footer />
      </>
    )
  }
}

// EXPORT CLASS THE CLASS FOR OTHER FILES TO IMPORT
export default App;