import React, { Component } from 'react';
import axios from 'axios'

class Vote extends Component{
  constructor () {
    super();

    this.APIHOSTPORT = "nst6cqldr1.execute-api.ap-southeast-1.amazonaws.com";

    this.state = {
      vote: 0
    }
    
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    //this invokes an AJAX request to the API to vote on the current programming language
    var url = `https://${this.APIHOSTPORT}/languages/${this.props.id}/vote`;
    axios.get(url)
    .then(response => this.setState({vote: this.state.vote+1}))

  }

  componentDidMount () {
    this.setState({vote: this.props.total})
  }

  render () {
    return (
        <div id={this.props.id}>
            <button  onClick={this.handleClick} type="button" className="button btn btn-outline-success">+1</button>
            <div>
                <b>Votes</b>: {this.state.vote}
            </div>
        </div>
    )

  }
}

export default Vote;
