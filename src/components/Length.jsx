import "./Length.css";

const MIN = 4;
const MAX = 48;
const STEP = 1;

function Length(props) {
   const { value, handleChange } = props;

   const inputAttributes = {
      name: "length",
      value: value,
      min: MIN,
      max: MAX,
      step: STEP,
      onChange: handleChange,
      title: "Adjust password length",
   };

   return (
      <label className="length">
         Password Length
         <div>
            <input
               type="number"
               aria-label="Password length input"
               {...inputAttributes}
            />
            <input
               type="range"
               aria-label="Password length slider"
               {...inputAttributes}
            />
         </div>
      </label>
   );
}

export default Length;
