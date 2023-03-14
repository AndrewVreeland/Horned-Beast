import React from 'react'


class HornedBeast extends React.Component{
  render(){
    return(
      <article>
        <h2>Hello {this.props.title}</h2>
        <img src={this.props.img_url} alt={this.props.description} title={this.props.title}></img>
        
      </article>
    )
  }
}

export default HornedBeast