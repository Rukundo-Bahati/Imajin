import img from  '../../assets/Group 4.png'
import './cont.css'

const Contribution = () => {
  return (
    <div className='is-flex mt-6 is-justify-content-center'>
    <div className="cont p-6" style={{overflow: 'hidden', borderRadius: '4rem'}}>
      <h1 style={{color: '#000', fontWeight: 'bolder', fontSize: '4rem'}}>Give a Contribution</h1>
      <p className='m-4 is-size-4'>You can propose edits to any of the content on this site, suggest awesome new features, or help us squash bugs.</p>
      <div style={{textAlign:'center'}}>
      <button className="button is-link mr-6">START BUILDING</button>
     <button className="button is-light">READ DOCUMENTATION</button>
      </div>
      <img src={img} alt="" />
    </div>
    </div>
  )
}

export default Contribution
