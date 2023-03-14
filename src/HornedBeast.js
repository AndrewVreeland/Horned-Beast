import React from 'react'


class beast extends React.Component{
  render(){
    return(
      <article>
        <h2>Hello {this.props.title}</h2>
        <p>{this.props.description}</p>
        <img img_url='' title='' alt=''></img>
      </article>
    )
  }
}

export default beast