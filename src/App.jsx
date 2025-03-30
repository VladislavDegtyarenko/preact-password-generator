import { useEffect, useState } from "preact/hooks";

// Layout
import Container from "./layout/Container";

// Components
import Password from "./components/Password";
import Settings from "./components/Settings";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
      const lowercase = "abcdefghijklmnopqrstuvwxyz";
      const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const numbers = "0123456789";
      const symbols = "~`!@#$%^&*()_-+={[}]|:;'<,>.?/";

      let allowedCharacters = "";

      if (settings.lowercase) allowedCharacters += lowercase;
      if (settings.uppercase) allowedCharacters += uppercase;
      if (settings.numbers) allowedCharacters += numbers;
      if (settings.symbols) allowedCharacters += symbols;

      const indexes = window.crypto.getRandomValues(
         new Uint32Array(settings.length)
      );

      let password = "";

      if (!allowedCharacters) return setPassword("");

      for (const index of indexes) {
         password += allowedCharacters[index % allowedCharacters.length];
      }

      setPassword(password);
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
