import React from "react";

export default function Help() {
  return (
    <>
      <div className="connect-content">
        <h1>Help</h1>
        <p>
          If you have some issue following the steps of this page you can found
          more information in the DAppNode Documentation.
        </p>
        <p>
          You can contac with the support team using Discord or making a post in
          the DAppNode Forum.
        </p>
        <h2>Local</h2>
        <p>
          In the case of Local issues we recommend to contact to the team
          because it's a bit difficult the debug. Remembes you need to stay
          connected to the same network where the DAppNode it is. Furthermore,
          it's important how the network where dappnode it is connected
          distribute de IPs, if there is a DHCP server or if this IPs are set up
          manually.
        </p>
        <h2>Wi-Fi</h2>
        <p>
          You should check if you can see the wifi network which DAppNode
          creates. In order to connect to you will be requested by a default
          credentials that are the next:
        </p>
        <p>SSID: DAppNodeWIFI</p>
        <p>Password: dappnode</p>
        <p>You can get more information about this kind of access on our </p>
        <a href="https://docs.dappnode.io/user-guide/ui/access/wifi">
          Documentation
        </a>
        <h2>Vpn</h2>
        <p>
          Once you have your dappnode turned on, set up and you can access via
          local or wifi you can set up the vpn access. In de DAppNode UI you
          have a section where the vpn is set up, you can find more detailed
          information in the{" "}
          <a href="https://docs.dappnode.io/user-guide/ui/vpn">next link</a>.
        </p>
        <h3>VPN</h3>
        <h4>I can't download the profile vpn file</h4>
        <p>
          In order to be able to connect to via OpenVPN you need to open some
          ports in your router. You need to open the ports 8092 TCP and 1194
          UDP.
        </p>
        <h4>I can't connect to DAppNode via VPN</h4>
        <p>
          The first check we recommend to do is to use a device that is
          connected to a different network where the dappnode is, the most the
          easier way is to use a mobile with mobile network data. If you can
          access using an external network, it's probably that your router does
          not have the functionality NAT Loopback.
        </p>
        <h4>I don't know how to set up the client</h4>
        <p>
          You can find a complete guide about how to configure the vpn client in
        </p>
        <a href="https://docs.dappnode.io/user-guide/ui/access/vpn">
          this link
        </a>
        <h2>Contact to the support</h2>
        You can contact the team for support by Discord and Forum.
      </div>
    </>
  );
}
