import Cta from 'components/Cta';
import Footer from 'components/Footer';
import Gallery from 'components/Gallery';
import Group from 'components/Group';
import Hero from 'components/Hero';
import Header from '../components/Header';


function HomePage(){
    return <>
        <Header/>
        <Hero/>
        <Group type='right'/>
        <Group type='left'/>
        <Group type='center'/>
        <Cta/>
        <Gallery/>
        <Footer/>
    </>
}

export default HomePage;