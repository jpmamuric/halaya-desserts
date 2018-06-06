import React from 'react';
import { Link } from 'react-router-dom';

const Demo1 = () => (
  <div className='home__wrapper'>
    <section className='home__section'>
      <div className='home__carousel home__carousel--1'> Carousel 1 </div>
      <div className='home__logo' />
      <div className='home__carousel home__carousel--2'> Carousel 2 </div>
    </section>
    <section className="about__section">
      <Link to='/'> back </Link>
      <h1 className="about__header">About</h1>
      <p className="about__description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
    </section>
  </div>
)

export default Demo1
