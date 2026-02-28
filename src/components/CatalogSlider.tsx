import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { catalogSlides } from '../data/catalogSlides';
import { placeholderImages } from '../data/placeholderImages';
import './CatalogSlider.css';

function CatalogSlideImage({ imageBase, slideIndex }: { imageBase: string; slideIndex: number }) {
  const [useJpg, setUseJpg] = useState(false);
  const [useDummy, setUseDummy] = useState(false);

  const localSrc = useJpg ? `${imageBase}.jpg` : `${imageBase}.png`;
  const dummySrc = placeholderImages.catalogSlide(slideIndex);
  const src = useDummy ? dummySrc : localSrc;

  return (
    <div className="catalog-slide-img-inner">
      <img
        src={src}
        alt=""
        className="catalog-slider-img"
        onError={() => {
          if (!useJpg) setUseJpg(true);
          else setUseDummy(true);
        }}
      />
    </div>
  );
}

export function CatalogSlider() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="catalog-slider-wrap">
      <Swiper
        onSwiper={(sw) => {
          swiperRef.current = sw;
        }}
        modules={[Navigation, Pagination, Autoplay]}
        speed={500}
        loop
        grabCursor
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true, dynamicBullets: true }}
        navigation={{
          prevEl: '.catalog-slider-prev',
          nextEl: '.catalog-slider-next',
        }}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 0 },
          768: { slidesPerView: 1, spaceBetween: 0 },
          1024: { slidesPerView: 1, spaceBetween: 0 },
        }}
        className="catalog-slider"
      >
        {catalogSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="catalog-slide">
              <div className="catalog-slide-image-wrap">
                <CatalogSlideImage imageBase={slide.imageBase} slideIndex={slide.index} />
              </div>
              <div className="catalog-slide-caption">
                <span className="catalog-slide-title">{slide.title}</span>
                <span className="catalog-slide-products">
                  {slide.products.join(' · ')}
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button type="button" className="catalog-slider-prev" aria-label="Previous slide" />
      <button type="button" className="catalog-slider-next" aria-label="Next slide" />
    </div>
  );
}
