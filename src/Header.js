import React from 'react';
import './Header.css';
class Header extends React.Component{
  render(){
    return <h1>Beasts With Horns {this.props.hearts}</h1>
  }
}



export default Header;