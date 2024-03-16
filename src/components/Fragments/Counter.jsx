import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
    console.log("Constructor")
  }

  //biasanya digunakan saat narik API, karena tidak bisa digunakan pada constructor
  componentDidMount() {
    this.setState({count: 10})
    console.log("ComponentDidMount")
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate")
    if (this.state.count === 10) {
      this.setState({count: 0})
    }
  }

  render() {
    return (
        <div className="flex items-center">
          <h1 className="mr-5">{this.state.count}</h1>
          {console.log("render")}
        </div>
    )
  }
}

export default Counter
