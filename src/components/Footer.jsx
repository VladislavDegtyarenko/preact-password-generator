import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div>&copy; Copyright 2022-{new Date().getFullYear()}</div>
      <div>
        Created by{" "}
        <a href="https://vd-developer.online/" target="/blank">
          Vladislav Degtyarenko
        </a>
      </div>
    </footer>
  );
}

export default Footer;
