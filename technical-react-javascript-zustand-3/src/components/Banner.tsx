import React from 'react';

const Banner:React.FC<BannerProps> = ({bannerTitle,bannerDescription,bannerStyle}) => {
  return (
    <div className={`${bannerStyle} bannerContent py-[50px] bg-blue-700`}>
      <div className="container mx-auto">
        <h2 className='font-bold text-[32px] text-white'>{bannerTitle}</h2>
        <p className='font-bold text-[18px] text-white'>{bannerDescription}</p>
      </div>
    </div>
  );
}

export default Banner;
