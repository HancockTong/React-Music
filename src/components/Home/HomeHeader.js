/*
 * @Author: Hancock Tong
 * @Date: 2018-05-14 15:09:00
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';


export default class HomeHeader extends Component {

    onFocus() {
        this.props.history.push({ pathname: '/search' })
    }

    render() {
        console.log(this.props)
        return (
            <div className="header">
                <div className="cityName">
                    <Link to="/user/login"><i className="icon-user-circle-o" /></Link>
                </div>
                <div className="searchBar">
                    <div className="searchInput">
                        <i className="icon-search" />
                        <input type="text" className="input input-search" onFocus={this.onFocus.bind(this)} placeholder="请输入关键字" />
                    </div>
                </div>
                <div className="music-icon">
                    {/* <Link to={this.props.music.hash && this.props.music.hash && this.props.control.playing !== 'null' ? `/play/#${this.props.music.hash}` : '/play/#null'}>
                        <div className="music-icon-animate ">
                            {
                                ['one', 'two', 'three', 'four'].map((ele, i) => {
                                    return (
                                        <span key={i} className={classNames(ele, this.props.music.hash && this.props.music.hash !== 'null' && this.props.control.playing ? 'playing' : 'paused')}></span>
                                    )
                                })
                            }
                        </div>
                    </Link> */}
                </div>
            </div>
        )
    }
}
