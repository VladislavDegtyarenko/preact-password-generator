import "./Length.css";

function Length(props) {
   const { value, handleChange } = props;

   return (
      <label className="length">
         Password Length
         <div>
            <input
               type="number"
               value={value}
               min={1}
               name="length"
               onChange={handleChange}
            />
            <input
               type="range"
               min="1"
               max="40"
               step="1"
               value={value}
               name="length"
               onChange={handleChange}
            />
         </div>
      </label>
   );
}

export default Length;
