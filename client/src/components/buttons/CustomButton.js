import "./CustomButton.css";

function CustomButton({ name, bg, onEventClick, option }) {

  return <button className={bg} onClick={() => onEventClick(option)}>{name}</button>;
}

export default CustomButton;
