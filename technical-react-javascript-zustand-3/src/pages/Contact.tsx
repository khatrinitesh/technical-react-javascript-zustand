import React from 'react';
import Banner from '../components/Banner';

const Contact:React.FC<BannerProps> = ({bannerTitle,bannerDescription,bannerStyle}) => {
  return (
    <div className='content'>
      <Banner  bannerTitle="Contact" bannerDescription="Ex veniam est culpa amet."/>
    </div>
  );
}

export default Contact;
