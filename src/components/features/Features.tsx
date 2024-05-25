import './features.css'; // Import CSS file containing necessary styles

const Features = ({ direction, asset, children }) => {
  return (
    <div className='features'>
      <div className={`features-container is-flex ${direction} p-6`}>
        <div className="flex-1 feature-image">
          <img src={asset} alt="" style={{ width: '40%' }} />
        </div>
        <div className="flex-1 feature-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Features;
