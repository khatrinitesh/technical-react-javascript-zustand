import React from 'react';

const Footer:React.FC = () => {

    const currentFullYear = new Date().getFullYear();

  return (
    <footer className='footer py-[20px] bg-black'>
      <div className="container mx-auto">
        <p className='text-white text-center'>&copy; copyright {currentFullYear}</p>
      </div>
    </footer>
  );
}

export default Footer;
