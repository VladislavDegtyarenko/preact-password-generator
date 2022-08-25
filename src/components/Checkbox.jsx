import "./Checkbox.css";

function Checkbox(props) {
   const { name, checked, handleChange } = props;

   return (
      /* prettier-ignore */
      <div className="checkbox">
         <input
            type="checkbox"
            name={name}
            id={name}
            checked={checked}
            onChange={handleChange}
         />
         <span>{checked && "✓"}</span>
         <label htmlFor={name}>
            {name}
         </label>
      </div>
   );
}

export default Checkbox;
