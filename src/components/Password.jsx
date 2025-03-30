import Box from "./../layout/Box";
import { useCopied } from "../hooks/useCopied";
import { CopyIcon } from "../assets/copy";

import "./Password.css";
import { CheckIcon } from "../assets/check";

function Password(props) {
   const { password, length } = props;

   const { copied, triggerCopied } = useCopied();

   let width;
   let backgroundColor;

   if (length >= 24) {
      width = "100%";
      backgroundColor = "var(--godlike-password-color)";
   } else if (length >= 16) {
      width = "100%";
      backgroundColor = "var(--very-strong-password-color)";
   } else if (length >= 12) {
      width = "75%";
      backgroundColor = "var(--strong-password-color)";
   } else if (length >= 8) {
      width = "50%";
      backgroundColor = "var(--average-password-color)";
   } else if (length >= 4) {
      width = "25%";
      backgroundColor = "var(--poor-password-color)";
   } else {
      width = "0%";
      backgroundColor = "var(--mid-color)";
   }

   const passwordLevelStyles = {
      width,
      backgroundColor,
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
               <div className="password__text">{password || " "}</div>
               <button
                  className={`password__copy${copied ? " success" : ""}`}
                  onClick={copy}
               >
                  {copied ? <CheckIcon /> : <CopyIcon />}
                  <span className={`tooltip${copied ? " stayVisible" : ""}`}>
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
