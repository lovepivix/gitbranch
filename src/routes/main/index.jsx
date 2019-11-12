import React, { Component } from 'react';

class Main extends Component {
    render() {
        console.log(this.props.children)
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default Main;