import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

const Banner = () => {
    return (
        <div className='my-5'>
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                <SwiperSlide>
                    <div className="h-[70vh] w-full bg-cover bg-no-repeat bg-center bg-[url('https://i.ibb.co/tQsXMWh/view-from-balcony-apartment.jpg')]">
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-[70vh] w-full bg-cover bg-no-repeat bg-center bg-[url('https://i.ibb.co/T0JkV20/istockphoto-1448385933-1024x1024.jpg')]">
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-[70vh] w-full bg-cover bg-no-repeat bg-center bg-[url('https://i.ibb.co/XWg8SsB/rural-house-surroundings-daylight.jpg')]">
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-[70vh] w-full bg-cover bg-no-repeat bg-center bg-[url('https://i.ibb.co/s59LhkM/modern-luxury-domestic-room-comfortable-relaxation-generative-ai.jpg')]">
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-[70vh] w-full bg-cover bg-no-repeat bg-center bg-[url('https://i.ibb.co/jbg53CY/cafe-living-room-loft-style.jpg')]">
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-[60vh] w-full bg-cover bg-no-repeat bg-center bg-[url('https://i.ibb.co/4NGdbNH/beautiful-umbrella-chair-around-swimming-pool-hotel-resort.jpg')]">
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;