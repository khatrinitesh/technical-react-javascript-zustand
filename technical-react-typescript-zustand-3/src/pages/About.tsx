import React from 'react';
import Banner from '../components/Banner';
import Alert from '../components/Alert';
import { useAlertStore } from '../store/useAlertStore';
import AnimateIcon from '../components/AnimateIcon';
import AnimatedSearch from '../components/AnimatedSearch';
import Arrows from '../components/Arrows';
import Autocomplete from '../components/Autocomplete';
import AvatarComp from '../components/AvatarComp';
import ColorChanger from '../components/ColorChanger';
import { useColorStore } from '../store/useColorStore';
import ChangeBgScroll from '../components/ChangeBgScroll';
import CharacterCounter from '../components/CharacterCounter';
import CheckCheckbox from '../components/CheckCheckbox';

const About:React.FC<BannerProps> = ({bannerTitle,bannerDescription,bannerStyle}) => {
    const { showAlert } = useAlertStore();
    const { backgroundColor } = useColorStore();
  return (
    <div className='content'>
      <Banner  bannerTitle="About" bannerDescription="Ex veniam est culpa amet."/>
      <CheckCheckbox/>
      <hr/>
      <CharacterCounter/>
      <hr/>
      <ChangeBgScroll/>
      <hr/>
      <div
      style={{
        backgroundColor, // Dynamically change the background color
        minHeight: '100vh', // Full-screen height
        transition: 'background-color 0.5s ease', // Smooth transition when background color changes
      }}
    >
      <ColorChanger/>
      </div>
      <hr/>
      <AvatarComp/>
      <hr/>
      <Autocomplete/>
      <hr/>
      <br/>
      <Arrows/>
      <hr/>
      <br/>
      <AnimatedSearch/>
      <hr/>
      <AnimateIcon/>
      <hr/>
      <button
        onClick={() => showAlert('This is an alert message!')}
        style={{
          padding: '10px 20px',
          backgroundColor: 'blue',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          marginRight: '10px',
          cursor: 'pointer',
        }}
      >
        Show Alert
      </button>
      <button
        onClick={() => showAlert('Another alert triggered.')}
        style={{
          padding: '10px 20px',
          backgroundColor: 'green',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Show Another Alert
      </button>
      <Alert/>
      <hr/>
    </div>
  );
}

export default About;
