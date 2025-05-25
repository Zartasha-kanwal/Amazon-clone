import './App.css';
import { useMediaQuery } from 'react-responsive';
import Navbar from './Assests/Components/Navbar';
import MobileNavbar from './Assests/Components/MobileNavbar';
import HeroSection from './Assests/Components/HeroSection';
import MobileHerosection from './Assests/Components/MobileHerosection';
import MobileCardsection from './Assests/Components/MobileCardsection';
import CardSection from './Assests/Components/CardSection';
import CardSection2 from './Assests/Components/CardSection2';
import MobilecardSection2 from './Assests/Components/MobilecardSection2';
import Footer from './Assests/Components/Footer';
import MobileFooter from './Assests/Components/MobileFooter';

function App() {
   const isMobile = useMediaQuery({ maxWidth: 800 }); 
  return (
    <div className="App">
      
     {isMobile ? <MobileNavbar /> : <Navbar />}
     {isMobile ? <MobileHerosection /> : <HeroSection/> }
       {isMobile ? <MobileCardsection /> : <CardSection/> } 
        {isMobile ? <MobilecardSection2 /> : <CardSection2/> }  
          {isMobile ? <MobileFooter/> : <Footer/>}  
        
     
    </div>
  );
}

export default App;
