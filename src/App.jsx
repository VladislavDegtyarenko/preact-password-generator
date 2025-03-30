import { useEffect, useState } from "preact/hooks";

// Layout
import Container from "./layout/Container";

// Components
import Password from "./components/Password";
import Settings from "./components/Settings";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Utils
import { generatePasswordFromSettings } from "./utils/generatePasswordFromSettings";

// Styles
import "./App.css";

function App() {
   const [settings, setSettings] = useState({
      lowercase: true,
      uppercase: true,
      numbers: true,
      symbols: false,
      length: 8,
      autoGenerate: true,
   });

   const [password, setPassword] = useState("");

   useEffect(() => {
      if (settings.autoGenerate) {
         generatePassword();
      }
   }, [settings]);

   const generatePassword = () => {
      const newPassword = generatePasswordFromSettings(settings);

      setPassword(newPassword);
   };

   const changeSettings = (e) => {
      const { name, value, type, checked } = e.target;

      setSettings((prevSettings) => ({
         ...prevSettings,
         [name]: type === "checkbox" ? checked : value,
      }));
   };

   return (
      <div className="App">
         <Container>
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
         </Container>
      </div>
   );
}

export default App;
