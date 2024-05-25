import wave from '../../assets/wave1.png';

const Header = () => {
  return (
    <div>
      <section className="section">
        <div className="columns is-variable is-1-mobile is-0-tablet is-1-desktop is-1-widescreen is-2-fullhd">
          <div className="column is-flex is-align-items-center is-justify-content-center is-flex-direction-column" style={{ marginTop: '0', gap: '20px' }}>
            <h1 className='is-size-1'>Sed Imperdiet Enim li Vitae  <br /><span>VIVERA JUSTO</span></h1>
            <h2 className="mt-3 is-size-4">Nam sollicitud nunc, cursus eros<br />vulputate sed. Vestibulum lobortis.</h2>
            <div className="buttons mt-3">
              <button className="button is-link">START BUILDING</button>
              <button className="button is-light">READ DOCUMENTATION</button>
            </div>
          </div>
          <div className="column is-one-third">
            <img src={wave} alt="" style={{ maxWidth: '100%', height: 'auto' }} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
