import logo from '../../assets/Landsacpe.png'
import { BsFacebook, BsLinkedin, BsTwitterX, BsInstagram } from 'react-icons/bs'

const Footer = () => {
  return (
    <div>
      <div className="grid mt-6 p-6 has-text-primary-light">
  <div className="cell">
    <img src={logo} alt="" />
    <p>Nam posuere accumsan porta. Integer id orci sed ante tincidunt tincidunt sit amet sed libero.</p>
    <p className='mt-4'>© Baba   Theme 2024</p>
  </div>
  <div className="cell ml-6">
    <h2 className='mb-6'>COMPANY</h2>
    <ul style={{listStyle: 'none'}}>
    <li>Donec dignissim</li>
    <li>Curabitur egestas</li>
    <li>Nam posuere</li>
    <li>Aenean facilisis</li>
    </ul>
  </div>
  <div className="cell ">
  <h2 className='mb-6'>SERVICES</h2>
    <ul style={{listStyle: 'none'}}>
    <li>Cras convallis</li>
    <li>Vestibulum faucibus</li>
    <li>Quisque lacinia purus</li>
    <li>Aliquam nec ex</li>
    </ul>
  </div>
  <div className="cell">
  <h2 className='mb-6'>RESOURCES</h2>
    <ul style={{listStyle: 'none'}}>
    <li>Suspendisse porttitor</li>
    <li>Nam posuere</li>
    <li>Curabitur egestas </li>
    </ul>
  </div>
  <div className="cell has-text-centered">
    <div className="icons is-flex mb-6 is-justify-content-space-around">
  <BsFacebook />
  <BsLinkedin />
  <BsTwitterX />
  <BsInstagram />
    </div>
    <select name="language" id="lang">
        <option value="Eng">English-En</option>
        <option value="Kiny">Kinyarwanda</option>
        <option value="Fr">French</option>
        <option value="Sp">Spanish</option>
    </select>
  </div>
 
</div>
    </div>
  )
}

export default Footer
