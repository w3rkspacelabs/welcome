import React from "react";
// Next js
import Link from "next/link";
// Material UI
import theme from "../utils/materialUi";
import { Card, CardContent, ThemeProvider, CardHeader, Grid } from "@material-ui/core";

export default function Home() {
  const connectionMethods = [
    /* {
      title: "Local",
      description: "Access via local network",
      aditionalContent: "",
      tutorialPath: "/local",
    }, */
    {
      title: "Wi-Fi",
      description: "Connect to DAppNodeWifi",
      aditionalContent: "START HERE",
      tutorialPath: "/wifi",
    },
    {
      title: "VPN",
      description: "To connect from anywhere",
      aditionalContent: "",
      tutorialPath: "/vpn",
    },
  ];
  return (
    <div className="home">
      <p className="home-intro">
        There are different ways to connect to your DAppNode. Choose the most convenient for you. It
        is recommended to start with Wi-Fi
      </p>
      <ThemeProvider theme={theme}>
        <Grid container justify="center" spacing={4}>
          {connectionMethods.map((method, i) => (
            <Grid key={i} item>
              <Link href={method.tutorialPath}>
                <Card
                  style={
                    method.title === "Wi-Fi"
                      ? {
                          boxShadow:
                            "-10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000, 0px 0px 36px 15px rgba(47,188,178,0.75)",
                        }
                      : null
                  }
                >
                  <CardHeader title={method.title}></CardHeader>
                  <CardContent children={method.description}></CardContent>
                  <CardContent>
                    <h4>{method.aditionalContent}</h4>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </ThemeProvider>
    </div>
  );
}
