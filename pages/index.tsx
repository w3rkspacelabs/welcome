import React from "react";
// Next js
import Link from "next/link";
// Material UI
import theme from "../utils/materialUi";
import { Card, CardContent, ThemeProvider, CardHeader, Grid } from "@material-ui/core";

export default function Home() {
  const connectionMethods = [
    { title: "Local", description: "Access via local network", tutorialPath: "/local" },
    { title: "Wi-Fi", description: "START HERE", tutorialPath: "/wifi" },
    { title: "VPN", description: "To connect from anywhere", tutorialPath: "/vpn" },
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
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </ThemeProvider>
    </div>
  );
}
