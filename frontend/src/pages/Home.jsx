import React from 'react'
import Hadder from '../components/Hadder';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MailList from '../components/MailList';
import FeaturedProperties from '../components/FeaturedProperties';
import Featured from '../components/Featured';
import PropertyList from '../components/PropertyList';


const Home = () => {
    return (
      <div>
     <Navbar />
     <Hadder />
        <div className="homeContainer">
          <Featured/>
          <h1 className="homeTitle">Browse by property type</h1>
          <PropertyList/>
          <h1 className="homeTitle">Homes guests love</h1>
          <FeaturedProperties/>
          <MailList/>
          <Footer/>
        </div>
      </div>
    );
  };
export default Home
