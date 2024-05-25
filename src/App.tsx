import Slide from './components/Slide';
import Features from './components/features/Features';
import Header from './components/header/Header';
import Nav from './components/navbar/Nav';
import Scale from './components/scale/Scale';
import asset1 from './assets/Asset 10@2x.png'
import asset2 from './assets/Asset 9@2x.png'
import asset3 from './assets/Asset 11.png'
import Develops from './components/develops/Develops';
import Community from './components/community/Community';
import Faq from './components/faq/Faq';
import Contribution from './components/contribution/Contribution';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <div style={{marginRight: '2rem', marginLeft:' 2rem'}} className='is-flex is-justify-content-center is-flex-direction-column'>
      <Nav />
      <Header />
      <div className="is-flex is-justify-content-space-evenly">
        <Slide heading='First Slide' paragraph='Second Slide' />
        <Slide heading='First Slide' paragraph='Second Slide' />
        <Slide heading='First Slide' paragraph='Second Slide' />
      </div>
      <div className='is-flex'>
        <Scale />
        <Scale />
      </div>
      <div>
        <div style={{ textAlign: 'center', color: 'white', margin: '2rem' }}>
          <h1>Powerful for developers. <br /> And fast for everyone</h1>
          <p>Integrate once and never worry about scaling again.  Never deal with fragmented Layer 2 systems.</p>
        </div>
        <Features direction='is-flex-direction-row' asset={asset1}>
          <h2 className='is-size-2'>Vivamus sit amet interdum</h2>
          <h3>Nam sollicitudin dignissim nunc, cursus ullamcorper eros vulputate sed. Vestibulum sit amet tortor sit amet libero lobortis.</h3>
        </Features>
        <Features direction='is-flex-direction-row-reverse' asset={asset2}>
          <h2 className='is-size-2'>Vivamus sit amet interdum</h2>
          <h3>Maecenas nisl libero, tincidunt id odio id, feugiat vulputate quam vestibulum feugiat.</h3>
        </Features>
        <Features direction='is-flex-direction-row' asset={asset3}>
          <h2 className='is-size-2'>Vivamus sit amet interdum</h2>
          <h3>Nam sollicitudin dignissim nunc, cursus ullamcorper eros vulputate sed. Vestibulum sit amet tortor sit amet libero lobortis.</h3>
        </Features>
      </div>
      <Develops />
      <Community />
      <Faq />
      <Contribution />
      <Footer />
    </div>
  );
};

export default App;
