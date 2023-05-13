import React from "react";

/**este componente sera de classe
 -- lo primero es importar react
 --crear la estructura base del componente de clase
 -- crear el componente

 **/

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = 0;
  }
  render() {
    return <h1>Este es el about</h1>;
  }
}

export default About;
