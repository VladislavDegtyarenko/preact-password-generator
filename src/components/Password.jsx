import Box from "./../layout/Box";
import { useCopied } from "../hooks/useCopied";
import { CopyIcon } from "../assets/copy";

import "./Password.css";
import { CheckIcon } from "../assets/check";
import { getPasswordStrength } from "../utils/getPasswordStrength";
import { getStrengthLabel } from "../utils/getStrengthLabel";

function Password(props) {
   const { password, length } = props;

   const { copied, triggerCopied } = useCopied();

   const score = getPasswordStrength(password);
   const { label, color, width } = getStrengthLabel(score);

   const passwordLevelStyles = {
      width,
      backgroundColor: color,
   };

   const copy = async () => {
      try {
         await navigator?.clipboard?.writeText?.(password);
         triggerCopied();
      } catch (error) {
         console.warn(`Unable to write to clipboard, ${error}`);
      }
   };

   return (
      <div className="password">
         <Box>
            <div className="password__inner">
               <div className="password__text" role="button" onClick={copy}>
                  {password || " "}
               </div>
               <button
                  className={`password__copy${copied ? " success" : ""}`}
                  onClick={copy}
                  aria-label="Copy password"
               >
                  {copied ? <CheckIcon /> : <CopyIcon />}
                  <span
                     className={`tooltip${copied ? " stayVisible" : ""}`}
                     aria-live="assertive"
                  >
                     {copied ? "Copied!" : "Copy"}
                  </span>
               </button>
               <div className="password__level">
                  <span style={passwordLevelStyles}></span>
               </div>
            </div>
         </Box>
      </div>
   );
}

export default Password;
