import React, { Component } from 'react';
import ProgrammingLanguage from './ProgrammingLanguage';


class VoteApp extends Component {
    render() {
        return (
            <main role="main">
                <div className="jumbotron">
                    <div className="container">
                        <h1 className="display-3">Language Voter</h1>
                        DevKtOps
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <ProgrammingLanguage id="go" logo="go.png" />
                        </div>
                        <div className="col-md-4">
                            <ProgrammingLanguage id="java" logo="java.png" />
                        </div>
                        <div className="col-md-4">
                            <ProgrammingLanguage id="nodejs" logo="nodejs.png" />
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default VoteApp;