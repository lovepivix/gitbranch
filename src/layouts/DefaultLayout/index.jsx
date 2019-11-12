import React, { Component } from 'react';
import style from './index.less'
export class DefaultLayout extends Component {
    render() {
        return (
            <div className={style.wrapper}>
                {this.props.children}
            </div>
        );
    }
}

export default DefaultLayout;
