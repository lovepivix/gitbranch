import React, { Component } from 'react';

export class Question extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                 {this.props.children}
            </div>
        );
    }
}

export default Question;
