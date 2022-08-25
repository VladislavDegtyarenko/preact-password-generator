import Box from "./../layout/Box";
import copyIcon from "./../assets/copy.png";

import "./Password.css";

function Password(props) {
   const { password, length, copy } = props;

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

   return (
      <div className="password">
         <Box>
            <div className="password__inner">
               <div className="password__text">{password || " "}</div>
               <button className="password__copy" onClick={copy}>
                  <img src={copyIcon} alt="" />
                  <span className="tooltip">Copy</span>
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
