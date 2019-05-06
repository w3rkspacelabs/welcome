import React from "react";
import ClipboardJS from "clipboard";
import logo from "./logo.svg";
import "./App.scss";
// Imgs
import clipboardIcon from "./img/copyIcon.svg";
import connectToRouter from "./img/connect-to-router.png";
import wifiIcon from "./img/wifi-icon.png";
import readyIcon from "./img/ready-icon.png";
import secureFileIcon from "./img/secure-file.svg";

new ClipboardJS(".btn");

const fields = [
  { name: "Wifi", value: "DAppNodeWIFI" },
  { name: "Pass", value: "dappnode" }
];

const steps = [
  {
    title: "Plug DAppNode to the router",
    image: connectToRouter
  },
  {
    title: "Connect to its WIFI",
    image: wifiIcon,
    component: (
      <div className="field">
        {fields.map(({ name, value }) => (
          <React.Fragment key={name}>
            <span>{name}</span>
            <div className="input-group">
              <input id={name} value={value} />
              <button class="btn" data-clipboard-target={`#${name}`}>
                <img src={clipboardIcon} alt="copy" />
              </button>
            </div>
          </React.Fragment>
        ))}
      </div>
    )
  },
  {
    title: "Enter DAppNode",
    image: readyIcon,
    component: <a href="http://my.dappnode/">my.dappnode</a>
  },
  {
    title: "Get your VPN credentials in the device tab",
    image: secureFileIcon,
    component: <a href="http://my.dappnode/devices">my.dappnode/devices</a>
  }
];

function App() {
  return (
    <>
      <header>
        <h1 className="page-title">
          Welcome to <span>DAppNode</span>
        </h1>
      </header>
      <div className="App">
        <div className="grid">
          {steps.map(({ title, image, component }, i) => (
            <React.Fragment key={i}>
              <div className="number-guide">
                <div className="number">{i + 1}</div>
                {i < steps.length - 1 ? <div className="number-bar" /> : null}
              </div>
              <div>
                <div className="title">
                  <span className="title-numbering">{i + 1}</span>
                  {title}
                </div>
                <div className="section-body">
                  {image && <img alt="router" src={image} />}
                  {component}
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
