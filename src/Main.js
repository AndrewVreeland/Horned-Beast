import React from "react";
import HornedBeast from "./HornedBeast";
import './Main.css'

class Main extends React.Component {
  render() {
    return (
      <main>
        {this.props.data.map((beast) => (
          <HornedBeast
            title = {beast.title}
            image_url = {beast.image_url}
            description = {beast.description}
            key = {beast._id}
            keyword = {beast.keyword}
            horns = {beast.horns}
            addHearts = {this.props.addHearts}
            handleOpenModal = {this.props.handleOpenModal}
          />
        ))}
      </main>
    )
  }
}

export default Main