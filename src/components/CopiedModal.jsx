import "./CopiedModal.css";

function CopiedAlert(props) {
   return (
      <div className={"copied " + (props.isShown ? "show" : "hide")}>
         <div className="copied__overlay" onClick={props.close}></div>
         <span className="copied__message">
            <span className="copied__message_icon">✓</span>
            <span>Copied!</span>
         </span>
      </div>
   );
}

export default CopiedAlert;
