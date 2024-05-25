import logo from '../../assets/Landsacpe.png';
import setting from '../../assets/setting.png';
import './nav.css'; 

const Nav = () => {
  return (
    <div>
      <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation" style={{ background: 'transparent' }}>
        <div className="navbar-brand">
          <a className="navbar-item" href="#">
            <img src={logo} alt="" />
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item has-text-light">
              About
            </a>

            <a className="navbar-item has-text-light">
              Features
            </a>
            <a className="navbar-item has-text-light">
              Develop
            </a>
            <a className="navbar-item has-text-light">
             Blog
            </a>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-primary">
                  <strong>Sign up</strong>
                </a>
                <a className="button is-light">
                  Log in
                </a>
                <img src={setting} alt="" className="setting-icon" />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
