import React from "react";
// Components
import StepperConnection from "../components/StepperConnection";
// Params
import { params } from "../utils/params";
// Icons
import { SiWireguard } from "react-icons/si";
import { SiOpenvpn } from "react-icons/si";
import TouchAppIcon from "@material-ui/icons/TouchApp";
// Utils
import { ActionStep } from "../utils/types";

function OpenVpnClient() {
  return (
    <div>
      <h3>
        <SiOpenvpn /> Open-VPN
      </h3>
      <div>
        <a href={params.OPENVPN_DAPPNODE_URL}>Get DAppNode Wireguard package</a>
      </div>
      <div>
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
      <div>
        <a href={params.WIREGUARD_DAPPNODE_URL}>Get DAppNode Wireguard package</a>
      </div>
      <div>
        <a href={params.WIREGUARD_DOWNLOAD_URL}>Download Wireguard desktop</a>
      </div>
    </div>
  );
}

function VpnClients() {
  return (
    <>
      <h2>
        <TouchAppIcon /> Choose a VPN client to install
      </h2>
      <div style={{ display: "flex", justifyContent: "space-evenly", marginTop: 30 }}>
        <WireguardClient />
        <OpenVpnClient />
      </div>
    </>
  );
}

export default function Vpn() {
  const steps: ActionStep[] = [
    {
      title: "*Choose your VPN client",
      image: "/select.png",
    },
    {
      title: "Get your VPN credentials",
      image: "/vpn-credentials.png",
    },
  ];
  return (
    <div className="connect-content">
      <h1>VPN</h1>
      <p>Connect to your DAppNode through VPN from anywhere.</p>
      <StepperConnection steps={steps} />
      <VpnClients />
    </div>
  );
}
