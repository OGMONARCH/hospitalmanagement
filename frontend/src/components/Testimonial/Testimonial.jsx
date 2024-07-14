import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { HiStar } from 'react-icons/hi';
import '../../App.css'

import patientAvatar from "../../assets/images/patient-avatar.png";


const Testimonial = () => {
  return (
    <div className="mt-[30px] lg:mt-[55px]">
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {[...Array(7)].map((_, index) => (
          <SwiperSlide key={index}>
            <div className="py-[30px] px-5 rounded-3">
              <div className="flex items-center gap-[13px]">
                <img src={patientAvatar} alt="Patient Avatar" />
                <div>
                  <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                    Muhibur Rahman
                  </h4>
                  <div className="flex items-center gap-[2px]">
                    {[...Array(3)].map((_, i) => (
                      <HiStar key={i} className="text-yellowColor w-[18px] h-5" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, ullam?
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Testimonial;
