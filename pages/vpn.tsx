import React from "react";
// Components
import StepperConnection from "../components/StepperConnection";
// Params
import { params } from "../utils/params";
// Icons
import { SiWireguard } from "react-icons/si";
import { SiOpenvpn } from "react-icons/si";
import TouchAppIcon from "@material-ui/icons/TouchApp";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
// Utils
import { ActionStep } from "../utils/types";

function OpenVpnClient() {
  return (
    <div>
      <h3>
        <SiOpenvpn /> Open-VPN
      </h3>
      <div className="vpn-step-content-text">
        <a href={params.OPENVPN_DAPPNODE_URL}>Get DAppNode Wireguard package</a>
        <br />
        <a href={params.OPENVPN_DOWNLOAD_URL}>Download Wireguard desktop</a>
      </div>
    </div>
  );
}

function WireguardClient() {
  return (
    <div>
      <h3>
        <SiWireguard /> Wireguard
      </h3>

      <div className="vpn-step-content-text">
        <a href={params.WIREGUARD_DAPPNODE_URL}>Get DAppNode Wireguard package</a>
        <br />
        <a href={params.WIREGUARD_DOWNLOAD_URL}>Download Wireguard desktop</a>
      </div>
    </div>
  );
}

function WireguardCredentials() {
  return (
    <div>
      <h3>
        <SiWireguard /> Wireguard
      </h3>
      <div className="vpn-step-content-text">
        <p>
          Get your Wireguard credentials directly{" "}
          <a href={params.WIREGUARD_DAPPNODE_URL}>from the UI</a>
          <br />
          Get your Wireguard credentials from the command line executing the command:{" "}
          <code>dappnode_wireguard</code>
        </p>
      </div>
    </div>
  );
}

function OpenVpnCredentials() {
  return (
    <div>
      <h3>
        <SiOpenvpn /> Open-VPN
      </h3>
      <div className="vpn-step-content-text">
        <p>
          Get your Open-Vpn credentials directly{" "}
          <a href={params.OPENVPN_DAPPNODE_URL}>from the UI</a>
          <br />
          Get your Wireguard credentials from the command line executing the command:{" "}
          <code>dappnode_connect</code>
        </p>
      </div>
    </div>
  );
}

function ChooseVpnClient() {
  return (
    <>
      <h2>
        <TouchAppIcon /> 2. Choose a VPN client to install
      </h2>
      <div className="vpn-step">
        <WireguardClient />
        <OpenVpnClient />
      </div>
    </>
  );
}

function GetVpnCredentials() {
  return (
    <>
      <h2>
        <VerifiedUserIcon /> 3. Get your VPN credentials
      </h2>
      <div className="vpn-step">
        <WireguardCredentials />
        <OpenVpnCredentials />
      </div>
    </>
  );
}

export default function Vpn() {
  const steps: ActionStep[] = [
    {
      title: "Choose a VPN client",
      image: "/select.png",
    },
    {
      title: "Get your VPN credentials",
      image: "/vpn-credentials.png",
    },
  ];
  return (
    <>
      <div className="connect-content">
        <h1>VPN</h1>
        <p>Connect to your DAppNode through VPN from anywhere.</p>
        <StepperConnection steps={steps} />
      </div>
      <div className="steps-explanation">
        <div className="step-explanation">
          <ChooseVpnClient />
        </div>
        <div className="step-explanation">
          <GetVpnCredentials />
        </div>
      </div>
    </>
  );
}
