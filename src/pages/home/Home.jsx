import React from 'react';
import Navbar  from '../../components/navbar/Navbar';
import './home.css';
import  Header from '../../components/header/Header';
import de from 'date-fns/esm/locale/de/index.js';
import Featured from '../../components/featured/Featured';
import PropertyList from '../../components/property/PropertyList';
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties';
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';

 const Home = () => {
  return (
    <div>
        <Navbar />
        <Header />
        <div className="homeContainer">
          <Featured />
          <h1 className="homeTitle">Browse by property type</h1>
          <PropertyList />
          <h1 className="homeTitle">Homes guets love</h1>
          <FeaturedProperties />
          <MailList />
          <Footer />
        </div>
    </div>
  )
}
export default Home;
