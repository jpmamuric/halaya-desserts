import React, { Component } from 'react';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';

class Carousel extends Component {
  render(){
    let slides = [
      { name: 'I am the 1st Slide.' },
      { name: 'I am the 2nd Slide.' },
      { name: 'I am the 3rd Slide.' }
    ];

    if(this.props.number === 2 ) {
      slides = [
        { name: 'I am the 4th Slide.' },
        { name: 'I am the 5th Slide.' },
        { name: 'I am the 6th Slide.' }
      ];
    }

    return (
      <CarouselProvider
       isPlaying={true}
       interval={2000}
       naturalSlideWidth={100}
       naturalSlideHeight={125}
       totalSlides={3}
     >
     <Slider
       className={
         this.props.number === 1 ? 'carousel__slider--custom carousel__slider--custom-1' : ' carousel__slider--custom carousel__slider--custom-2'
       }>
       {
         slides.map((slide, i) => <Slide key={i} index={1}>{slide.name}</Slide> )
       }
      </Slider>
     </CarouselProvider>
    );
  }
}
export default Carousel;
