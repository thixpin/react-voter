import React, { Component } from 'react';
import Vote from './Vote';
import axios from 'axios';

class ProgrammingLanguage extends Component {
    constructor() {
        super();

        this.APIURL = process.env.REACT_APP_API_URL;

        this.state = {
            language: {},
            loaded: false
        }
    }

    componentDidMount() {
        axios.get(`${this.APIURL}/languages/${this.props.id}`).then(
            response => this.setState({
                language: response.data,
                loaded: true
            })
        );

    }

    render() {
        if (this.state.loaded) {
            var usecase = this.state.language.codedetail.usecase;
            var rank = this.state.language.codedetail.rank;
            var homepage = this.state.language.codedetail.homepage;
            return (
                <div className="container">

                    <h2>{this.props.name}</h2>
                    <div><Vote id={this.props.id} total={this.state.language.codedetail.votes}/></div>
                    <p><b>Uses</b>: {usecase}</p>
                    <p><b>Rank</b>: {rank}</p>
                    <p><b>Homepage</b>: {homepage}</p>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="parent">
                                    <img src={"./img/" + this.props.logo} alt="logo" className="center-block" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        return <div></div>;
    }
}

export default ProgrammingLanguage;
