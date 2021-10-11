import './style.css';

const Tab1ContentItem = ({ source, title, text }) => {
  return (
    <div>
      <img className="tab-1-image" src={source} alt="" />
      <p className="text-md">{title}</p>
      <p className="text-dark">{text}</p>
    </div>
  );
};

export default Tab1ContentItem;
