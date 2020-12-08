import React, { Component } from 'react'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// import 'swiper/swiper.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default class Search extends Component {
    render() {
        return (
            <Swiper
            navigation={true}
            grabCursor={false}
            draggable={false}
            loop={true}
            loopAdditionalSlides={1}
            slidesPerView= {4}
            slidesPerGroup= {4}
            preventClicksPropagation={true}
            preventClicks={true}
            scrollbar={{ draggable: false, hide: true }}
            slideToClickedSlide={false}
            pagination={{ clickable: true }}>
                    <SwiperSlide>
                        <img
                            src="https://image.tmdb.org/t/p/w500//jeAQdDX9nguP6YOX6QSWKDPkbBo.jpg"
                        />
                        <h1>1</h1>
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <img
                            src="https://image.tmdb.org/t/p/w500//9DeGfFIqjph5CBFVQrD6wv9S7rR.jpg"
                        />
                        <h1>2</h1>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src="https://image.tmdb.org/t/p/w500//35PMyh6kydJWEL1MbMNVkJgeTyI.jpg"
                        />
                        <h1>3</h1>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src="https://image.tmdb.org/t/p/w500//fTDzKoQIh1HeyjfpG5AHMi2jxAJ.jpg"
                        />
                        <h1>4</h1>
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <img
                            src="https://image.tmdb.org/t/p/w500//fTDzKoQIh1HeyjfpG5AHMi2jxAJ.jpg"
                        />
                        <h1>5</h1>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src="https://image.tmdb.org/t/p/w500//fTDzKoQIh1HeyjfpG5AHMi2jxAJ.jpg"
                        />
                        <h1>6</h1>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src="https://image.tmdb.org/t/p/w500//fTDzKoQIh1HeyjfpG5AHMi2jxAJ.jpg"
                        />
                        <h1>7</h1>
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <img
                            src="https://image.tmdb.org/t/p/w500//fTDzKoQIh1HeyjfpG5AHMi2jxAJ.jpg"
                        />
                        <h1>7</h1>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src="https://image.tmdb.org/t/p/w500//fTDzKoQIh1HeyjfpG5AHMi2jxAJ.jpg"
                        />
                        <h1>8</h1>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src="https://image.tmdb.org/t/p/w500//fTDzKoQIh1HeyjfpG5AHMi2jxAJ.jpg"
                        />
                        <h1>9</h1>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src="https://image.tmdb.org/t/p/w500//fTDzKoQIh1HeyjfpG5AHMi2jxAJ.jpg"
                        />
                        <h1>10</h1>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src="https://image.tmdb.org/t/p/w500//fTDzKoQIh1HeyjfpG5AHMi2jxAJ.jpg"
                        />
                        <h1>11</h1>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src="https://image.tmdb.org/t/p/w500//fTDzKoQIh1HeyjfpG5AHMi2jxAJ.jpg"
                        />
                        <h1>12</h1>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src="https://image.tmdb.org/t/p/w500//fTDzKoQIh1HeyjfpG5AHMi2jxAJ.jpg"
                        />
                        <h1>13</h1>
                    </SwiperSlide>

            </Swiper>
        )
    }
}
