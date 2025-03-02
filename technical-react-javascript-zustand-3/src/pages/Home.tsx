import React from 'react';
import Banner from '../components/Banner';
import Accordion from '../components/Accordion';

const Home:React.FC<BannerProps> = ({bannerTitle,bannerDescription,bannerStyle}) => {
  return (
    <div className='content'>
      <Banner  bannerTitle="Home" bannerDescription="Ex veniam est culpa amet."/>
      <div className="container mx-auto">
      <Accordion index={0} title="Accordion Item 1">
        <p>This is the content of item 1.</p>
      </Accordion>
      <Accordion index={1} title="Accordion Item 2">
        <p>This is the content of item 2.</p>
      </Accordion>
      <Accordion index={2} title="Accordion Item 3">
        <p>This is the content of item 3.</p>
      </Accordion>
      </div>
    </div>
  );
}

export default Home;
