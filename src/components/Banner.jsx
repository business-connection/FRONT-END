import styled from "styled-components";
import Banner1 from "../assets/images/Mainimg/Bannerimg/Banner_Image.png";
import { useState, useEffect } from "react";

const CarouselContainer = styled.div`
  height: 25rem;
  margin: 1.5rem 2rem 0;
  border-radius: var(--Shapes-Border-Round, 1rem);
  border: 2px solid rgba(18, 19, 24, 0.04);
  overflow: hidden;
  position: relative;

  @media (max-width: 768px) {
    width: calc(100% - 4rem);
    height: 80vw;
    margin: 1.5rem 2rem 0;
  }
`;

const CarouselWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(${(props) => props.translate}%);
  display: inline-flex;
  position: relative;
  overflow: visible;
  width: 100%;
  height: 100%;
`;

const Slide = styled.div`
  flex: 0 0 100%;
  width: 100%;
  height: 100%;
  background: ${(props) => `url(${props.bgImage}) center / cover no-repeat`};

  @media (max-width: 768px) {
    background-size: cover;
  }
`;

const DotsContainer = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 50%;
  align-items: center;
  justify-content: center;
  transform: translateX(-50%);
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    bottom: 0.5rem;
    gap: 0.5rem;
  }
`;

const Dot = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background: ${(props) =>
    props.isActive
      ? "var(--Colors-Primary-B400, #3D85FF)"
      : "rgba(0, 0, 0, 0.3)"};
  cursor: pointer;

  @media (max-width: 768px) {
    width: 0.4rem;
    height: 0.4rem;
  }
`;
/*
const BtnContainer = styled.div`
  z-index: 10;

  font-family: "SUIT Variable";
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  letter-spacing: -0.03125rem;
`;

const Btn01 = styled.button`
  position: absolute;
  top: 85%;
  left: calc(80% - 7rem);
  transform: translate(-50%, -50%); 
  border-radius: var(--Shapes-Border-Soft, 0.25rem);
  background: var(--Colors-Primary-B400, #3d85ff);
  color: #fff;
  border: none;
  border-radius: 0.5rem;
  display: flex;
  padding: 0.5rem 1.25rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  cursor: pointer;
`;

const Btn02 = styled.button`
  display: flex;
  padding: 0.5rem 1.25rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  position: absolute;
  top: 85%;
  left: calc(80% + 2rem);
  transform: translate(-50%, -50%);
  border: none;
  border-radius: var(--Shapes-Border-Soft, 0.25rem);
  background: var(--Colors-GrayScale-G300, #e5eaf2);
  cursor: pointer;
`;
*/

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [Banner1, Banner1, Banner1, Banner1, Banner1];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval); // 컴포넌트 언마운트 시 정리
  }, [slides.length]);
  return (
    <CarouselContainer>
      <CarouselWrapper translate={-currentSlide * 100}>
        {slides.map((slide, index) => (
          <Slide key={index} bgImage={Banner1} />
        ))}
      </CarouselWrapper>
      <DotsContainer>
        {slides.map((_, index) => (
          <Dot
            key={index}
            isActive={index === currentSlide}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </DotsContainer>
    </CarouselContainer>
  );
};

export default Banner;
