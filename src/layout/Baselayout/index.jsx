import React, { Component } from 'react';
import styles from './index.css'
class Baselayout extends Component {
    render() {
        return (
            <div className={styles.wrap}>
                {this.props.children}
            </div>
        );
    }
}

export default Baselayout;