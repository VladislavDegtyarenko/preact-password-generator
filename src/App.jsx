import { useEffect, useState } from "preact/hooks";
import useLocalStorage from "./hooks/useLocalStorage";

// Components
import Password from "./components/Password";
import Settings from "./components/Settings";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Utils
import { generatePasswordFromSettings } from "./utils/generatePasswordFromSettings";

// Styles
import "./App.css";
import useLayoutEffectOnce from "./hooks/isFirstLayoutRender";

function App() {
   const [settings, setSettings] = useLocalStorage("password-settings", {
      lowercase: true,
      uppercase: true,
      numbers: true,
      symbols: false,
      length: 8,
      autoGenerate: true,
   });

   const [password, setPassword] = useState("");
   const { isFirstRender } = useLayoutEffectOnce();

   function generatePassword() {
      const newPassword = generatePasswordFromSettings(settings);

      if (newPassword) {
         setPassword(newPassword);
      }
   }

   useEffect(() => {
      if (settings.autoGenerate || isFirstRender) {
         generatePassword();
      }
   }, [settings, isFirstRender]);

   const changeSettings = (e) => {
      const { name, value, type, checked } = e.target;

      setSettings((prevSettings) => ({
         ...prevSettings,
         [name]: type === "checkbox" ? checked : value,
      }));
   };

   return (
      <div className="App">
         <div className="container">
            <div className="App__inner">
               <Header />
               <Password password={password} length={settings.length} />
               <Settings
                  settings={settings}
                  changeSettings={(e) => changeSettings(e)}
                  generatePassword={generatePassword}
               />
               <Footer />
            </div>
         </div>
      </div>
   );
}

export default App;
