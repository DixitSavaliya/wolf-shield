import { useState } from 'react';
import { placeholderImages } from '../data/placeholderImages';
import './Hero.css';

const HERO_PLACEHOLDER = placeholderImages.hero;

function HeroImage() {
  const [src, setSrc] = useState(() => {
    return '/images/hero-collage.png';
  });
  const [showFallback, setShowFallback] = useState(false);
  const [triedJpg, setTriedJpg] = useState(false);

  const onError = () => {
    if (src.endsWith('.png') && !triedJpg) {
      setTriedJpg(true);
      setSrc('/images/hero-collage.jpg');
    } else if (src.startsWith('http')) {
      setShowFallback(true);
    } else {
      setSrc(HERO_PLACEHOLDER);
    }
  };

  if (showFallback) {
    return (
      <div className="hero-visual-fallback is-visible">
        <div className="hero-visual-diamond">
          <span>Construction Solutions</span>
          <span>Tile Adhesives</span>
          <span>Waterproofing</span>
          <span>Grouts & Mortars</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <img
        src={src}
        alt="WOLF SHIELD construction solutions – tile adhesives, waterproofing, and application"
        className="hero-visual-img"
        onError={onError}
      />
      <div className="hero-visual-fallback" aria-hidden>
        <div className="hero-visual-diamond">
          <span>Construction Solutions</span>
          <span>Tile Adhesives</span>
          <span>Waterproofing</span>
          <span>Grouts & Mortars</span>
        </div>
      </div>
    </>
  );
}

export function Hero() {
  return (
    <section id="hero" className="hero" aria-label="Introduction">
      <div className="hero-bg" aria-hidden />
      <div className="container hero-inner">
        <div className="hero-content">
          <h1 className="hero-title">
            Adding Touch of Quality,
            <br />
            We Care for Your Dreams
          </h1>
          <p className="hero-subtitle">
            High-performance construction chemicals for residential, commercial, and infrastructure projects. Seal it right. Shield it strong.
          </p>
          <div className="hero-actions">
            <a
              href="#products"
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Our Product Range
            </a>
            <a
              href="#about"
              className="btn btn-outline"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              About Us
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-visual-placeholder">
            <HeroImage />
          </div>
        </div>
      </div>
    </section>
  );
}
