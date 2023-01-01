import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper";
import { useState, useEffect } from "react";
import styles from "./Testimonial.module.css";

const Testimonial = () => {
  const [domLoaded, setDomLoaded] = useState(false);
  useEffect(() => {
    setDomLoaded(true);
  }, []);
  return (
    <div
      className={`bg-537895 position-relative rounded ${styles.carousel_container}`}
    >
      <div className={`${styles.quote_div}`}>
        <img src="icons/quote.svg" />
      </div>
      <div className={`${styles.carousel_div}`}>
        {domLoaded && (
          <Swiper
            breakpoints={{
              320: {
                width: 320,
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                width: 768,
                slidesPerView: 2,
              },
            }}
            className="helloworld"
            slidesPerView={3}
            spaceBetween={15}
            modules={[Pagination, Autoplay, Navigation]}
            speed={600}
            loop={true}
            pagination={{
              type: "bullets",
              clickable: true,
            }}
            navigation={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
          >
            {[...Array(4)].map((item, i) => {
              return (
                <SwiperSlide
                  key={i}
                  // className={`${styles.testimonial_card_width}`}
                >
                  <div className="item">
                    <div
                      className={`bg-F9FDFF ${styles.testimonial_card_width} ${styles.testimonial_card}`}
                    >
                      <header>
                        <small>
                          <img
                            className="card-title"
                            src="icons/quote.svg"
                            width="20px"
                          />
                        </small>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.Ipsum has been the
                          industry&apos;s standard dummy text ever since the
                          1500s,
                        </p>
                      </header>
                      <footer>
                        <p className="fw-bolder mb-10">Nancy Roy</p>
                        <div className="d-flex justify-content-between align-items-center text-muted">
                          <div className="d-flex" style={{ gap: "3px" }}>
                            {[...Array(5)].map((item, i) => {
                              return (
                                <img
                                  key={i}
                                  src="icons/star-yellow.svg"
                                  width="15px"
                                />
                              );
                            })}
                          </div>
                          <small style={{ color: "#808080" }} className="mb-0">
                            Oct 22, 2022
                          </small>
                        </div>
                      </footer>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default Testimonial;
