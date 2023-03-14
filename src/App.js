// REBUILD AS A CLASS COMPONENT

// 1st IMPORTS 

import React from 'react';
import Header from './Header';

// 2nd CREATE CLASS - will always have a render method 

class App extends React.Component {
  render (){

    return (
      <>
    <Header />
    <main />
    </>
    )
  }
}

// EXPORT CLASS THE CLASS FOR OTHER FILES TO IMPORT
export default App;