import React, { Component } from 'react'
import NetflixLogo from '../static/images/Netflix_Logo_RGB.png'
import { ReactComponent as SearchLogo } from '../static/images/search-icon.svg';
import { ReactComponent as BellLogo } from '../static/images/bell-logo.svg';

export default class Navbar extends Component {
    state = {
        scrolling: false
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        if (window.scrollY === 0) {
            this.setState({ scrolling: false });
        }
        else if (window.scrollY > 50) {
            this.setState({ scrolling: true });
        }
    }

    render() {
        return (
            <div className={'navigation ' + (this.state.scrolling ? 'black' : '')}>
                <ul className='navigation__container'>
                    <img src={NetflixLogo} alt="" className="navigation__container--logo" />
                    <div className="navigation__container--link">Home</div>
                    <div className="navigation__container--link">TV Shows</div>
                    <div className="navigation__container--link">Movies</div>
                    <div className="navigation__container--link">Recently Added</div>
                    <div className="navigation__container--link">My List</div>

                    <div className="navigation__container__left">
                        <SearchLogo className="navigation__container__left--serach-logo" />
                        <input type="text"
                            placeholder="Title, genres, people"
                            className="navigation__container__left--input" />
                    </div>
                    <div className="navigation__container--link">KIDS</div>
                    <div className="navigation__container--link">DVD</div>
                    <BellLogo className="navigation__container--bell-logo" />

                </ul>
            </div>
        )
    }
}
