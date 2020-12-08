import React, { Component } from 'react'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default class MovieRow extends Component {
    state = {
        width: window.innerWidth
    }
    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
    }

    componentWillUnmount() {
        window.addEventListener("resize", this.handleResize);
    }

    movieList = () => {
        let netflixUrl = false
        if (this.props.category === 'Netflix Originals')
            netflixUrl = true

        return this.props.movieList.map((movie, idx) => {
            if (movie.backdrop_path === null) return null
            let movieImageUrl = 'https://image.tmdb.org/t/p/w500/' + movie.backdrop_path;
            if (netflixUrl) movieImageUrl = 'https://image.tmdb.org/t/p/original/' + movie.poster_path;
            return (
                <SwiperSlide
                    key={idx}
                    className={'movieShowcase__container--movie' + (netflixUrl ? '__netflix' : '')}
                    onClick={() => this.props.movieClicked(movie)}
                >
                    <img className='movieShowcase__container--movie-image' src={movieImageUrl} alt="" />
                </SwiperSlide>
            )
        })
    }

    handleResize = (e) => {
        this.setState({ width: window.innerWidth });
    };

    render() {
        const { width } = this.state
        return (
            <>
                <h1 className='movieShowcase__heading'>{this.props.category}</h1>
                <Swiper
                    className='movieShowcase__container'
                    navigation={true}
                    loop={true}
                    loopAdditionalSlides={
                        width >= 1378 ? 4 :
                            width >= 998 ? 3 :
                                width >= 625 ? 2 : 2
                    }
                    breakpoints={{
                        1378: {
                            slidesPerView: 5,
                            slidesPerGroup: 5,
                        },
                        998: {
                            slidesPerView: 4,
                            slidesPerGroup: 4,
                        },
                        625: {
                            slidesPerView: 3,
                            slidesPerGroup: 3,
                        },
                        0: {
                            slidesPerView: 2,
                            slidesPerGroup: 2,
                        },
                    }}
                    preventClicksPropagation={true}
                    preventClicks={true}
                    scrollbar={{ draggable: false, hide: true }}
                    slideToClickedSlide={false}
                    pagination={{ clickable: true }}
                >
                    {this.movieList()}
                </Swiper>
            </>
        )
    }
}
