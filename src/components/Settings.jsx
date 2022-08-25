import Checkbox from "./Checkbox";
import Length from "./Length";
import Box from "./../layout/Box";

import "./Settings.css";

function Settings(props) {
   const { settings, changeSettings, generatePassword } = props;

   return (
      <div className="settings">
         <Box>
            <h3>Customize your password</h3>

            <Length value={settings.length} handleChange={(e) => changeSettings(e)} />

            <Checkbox name="uppercase" checked={settings.uppercase} handleChange={changeSettings} />
            <Checkbox name="lowercase" checked={settings.lowercase} handleChange={changeSettings} />
            <Checkbox name="numbers" checked={settings.numbers} handleChange={changeSettings} />
            <Checkbox name="symbols" checked={settings.symbols} handleChange={changeSettings} />

            <button className="generate" onClick={generatePassword}>
               Generate
            </button>
         </Box>
      </div>
   );
}

export default Settings;
