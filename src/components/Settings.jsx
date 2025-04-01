import Switcher from "./Switcher";
import Length from "./Length";
import Box from "./../layout/Box";

import "./Settings.css";
import ToggleButton from "./ToggleButton";

const SETTINGS = [
   {
      id: "uppercase",
      label: "A...Z",
      description: "Uppercase",
      tooltip: "Include capital letters (A–Z)",
   },
   {
      id: "lowercase",
      label: "a...z",
      description: "Lowercase",
      tooltip: "Include lowercase letters (a–z)",
   },
   {
      id: "numbers",
      label: "0...9",
      description: "Digits",
      tooltip: "Include digits (0–9)",
   },
   {
      id: "symbols",
      label: ".,-/*",
      description: "Symbols",
      tooltip: "Include special characters (!@#$...)",
   },
];

function Settings(props) {
   const { settings, changeSettings, generatePassword } = props;

   return (
      <div className="settings">
         <Box>
            <h3>Customize Your Password</h3>

            <Length
               value={settings.length}
               handleChange={(e) => changeSettings(e)}
            />

            <div className="setting-buttons">
               {SETTINGS.map(({ id, label, description, tooltip }) => (
                  <ToggleButton
                     name={id}
                     checked={settings[id]}
                     handleChange={changeSettings}
                     label={label}
                     description={description}
                     tooltip={tooltip}
                  />
               ))}
            </div>

            <div className="generate-wrapper">
               <button className="generate" onClick={generatePassword}>
                  Generate
               </button>

               <Switcher
                  name="autoGenerate"
                  checked={settings.autoGenerate}
                  handleChange={changeSettings}
                  label={"Auto generate"}
               />
            </div>
         </Box>
      </div>
   );
}

export default Settings;
