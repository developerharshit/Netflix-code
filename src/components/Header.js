import React, { Component } from 'react'
import { ReactComponent as PlayBtn } from '../static/images/play-button.svg'
import { ReactComponent as MyListBtn } from '../static/images/add.svg';

export default class Header extends Component {
    backgroundStyle = () => {
        if (this.props.movie === null) {
            return {}
        }
        return {
            backgroundSize: 'cover',
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${this.props.movie.backdrop_path})`,
            backgroundPosition: 'center',
        };
    }

    render() {
        let name
        if (this.props.movie !== null) {
            if (this.props.movie.name) {
                name = this.props.movie.name
            }
            else {
                name = this.props.movie.title
            }
        }
        return (
            <header style={this.backgroundStyle()} className="header">
                <div className="header__container">
                    <h1 className="header__container--heading">{name}</h1>
                    <button className="header__container--playbtn">
                        <PlayBtn className="header__container-play" />Play
                        </button>
                    <button className="header__container--listbtn">
                        <MyListBtn className="header__container-list" /> My List
                        </button>
                    <p className="header__container-overview">{this.props.movie === null ? '' : this.props.movie.overview}</p>
                </div>
                <div className="header--fade-bottom"></div>
            </header>
        )
    }
}
