import "./ToggleButton.css";

const ToggleButton = (props) => {
   const { name, checked, handleChange, label, description, tooltip } = props;

   return (
      <div className={`toggle-button ${checked ? "checked" : ""}`}>
         <input
            type="checkbox"
            name={name}
            id={name}
            checked={checked}
            onChange={handleChange}
         />
         {/* <span className="toggle-button-icon"></span> */}
         <label htmlFor={name} title={tooltip}>
            <span className="toggle-button__label">{label}</span>
            <span className="toggle-button__description">{description}</span>
         </label>
      </div>
   );
};

export default ToggleButton;
