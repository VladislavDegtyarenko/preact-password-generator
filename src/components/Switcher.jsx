import "./Switcher.css";

function Switcher(props) {
   const { name, checked, handleChange, label } = props;

   return (
      <div className="switcher">
         <input
            type="checkbox"
            name={name}
            id={name}
            checked={checked}
            onChange={handleChange}
         />
         <span className="slider"></span>
         <label htmlFor={name}>{label || name}</label>
      </div>
   );
}

export default Switcher;
