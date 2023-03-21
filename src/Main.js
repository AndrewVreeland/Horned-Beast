import React from "react";
import HornedBeast from "./HornedBeast";
import data from './data/data.json'
import './Main.css'

class Main extends React.Component {
  render() {
    return (
      <main>
        {data.map((horned, index) => {
          return <HornedBeast title={horned.title} image_url={horned.image_url} description={horned.description} key={index} />
        })}
      </main>
    )
  }
}

export default Main