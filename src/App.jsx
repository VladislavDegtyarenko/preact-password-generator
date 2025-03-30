import { useEffect, useState } from "preact/hooks";

// Layout
import Container from "./layout/Container";

// Components
import Password from "./components/Password";
import Settings from "./components/Settings";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CopiedModal from "./components/CopiedModal";

// Styles
import "./App.css";

function App() {
  const [settings, setSettings] = useState({
    lowercase: true,
    uppercase: true,
    numbers: true,
    symbols: false,
    length: 8,
  });

  const [password, setPassword] = useState("");
  const [copiedModal, setCopiedModal] = useState(false);

  useEffect(() => {
    generatePassword();
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

  const copyToClipboard = async () => {
    try {
      await navigator?.clipboard?.writeText?.(password);
      showCopiedModal();
    } catch (error) {
      console.warn(`Unable to write to clipboard, ${error}`);
    }
  };

  const showCopiedModal = () => {
    setCopiedModal(true);

    setTimeout(() => {
      setCopiedModal(false);
    }, 3000);
  };

  const hideCopiedModal = () => {
    setCopiedModal(false);
  };

  return (
    <div className="App">
      <Container>
        <div className="App__inner">
          <Header />
          <Password
            password={password}
            length={settings.length}
            copy={copyToClipboard}
          />
          <Settings
            settings={settings}
            changeSettings={(e) => changeSettings(e)}
            generatePassword={generatePassword}
          />
          <Footer />
        </div>
      </Container>
      {copiedModal && (
        <CopiedModal isShown={copiedModal} close={hideCopiedModal} />
      )}
    </div>
  );
}

export default App;
