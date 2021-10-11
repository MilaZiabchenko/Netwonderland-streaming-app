import cancel_image from '../../images/cancel_image.jpg';
import './style.css';

const Tab2Content = ({ className }) => {
  return (
    <div id="tab-2-content" className={className}>
      <div className="tab-2-content-inner">
        <div>
          <p className="text-lg">
            If you decide <span> NeTWondeRLanD</span> isn't for you - no
            problem. No commitment. Cancel online anytime.
          </p>
        </div>
        <div className="cancel-image">
          <img src={cancel_image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Tab2Content;
