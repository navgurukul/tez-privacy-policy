import React from "react";
import { Box, Container, Typography } from "@mui/material";
import TezLogo from "./assets/Tez.svg";

function App() {
  return (
    <Container maxWidth="md" sx={{ padding: "2rem" }}>
      <Box display="flex" justifyContent="center" marginBottom="2rem">
        <img
          src={TezLogo}
          alt="App Logo"
          style={{
            width: "100px", 
            height: "auto", 
          }}
        />
      </Box>
      <Typography variant="h4" gutterBottom sx={{ color: "#2A8685" }}>
        Privacy Policy
      </Typography>

      <Typography variant="body1" sx={{ color: "#4d4d4d" }}>
        We value your privacy and are committed to protecting your personal
        data. This Privacy Policy explains how we collect, use, disclose, and
        safeguard your information when you use the Tez Launcher.
      </Typography>

      <Typography
        variant="h6"
        gutterBottom
        sx={{ color: "#2A8685", marginTop: "1rem" }}
      >
        2. Permission-Based Features
      </Typography>
      <Typography variant="body1" sx={{ color: "#4d4d4d" }}>
        Certain features of our services require specific permissions from you.
        Depending on the feature you want to use, we may request your permission
        to:
      </Typography>
      <Typography
        variant="body1"
        component="ul"
        sx={{ color: "#4d4d4d", marginLeft: "2rem" }}
      >
        <li>Access your device’s camera, microphone, or location.</li>
        <li>
          Access your contacts or other personal data stored on your device.
        </li>
        <li>
          Send you notifications or promotional messages, crash error reports.
        </li>
      </Typography>

      <Typography
        variant="body1"
        sx={{ color: "#4d4d4d", marginTop: "1rem" }}
      >
        3. We use your information to provide and maintain the App, improve and
        personalize your experience, monitor and analyze usage and trends, send
        you updates, security alerts, and support messages, and comply with
        legal obligations.
      </Typography>

      <Typography
        variant="body1"
        sx={{ color: "#4d4d4d", marginTop: "1rem" }}
      >
        4. We do not share your personal information with third parties except
        with your consent, to comply with legal requirements, or to protect and
        defend our rights and property.
      </Typography>

      <Typography
        variant="body1"
        sx={{ color: "#4d4d4d", marginTop: "1rem" }}
      >
        5. We implement appropriate technical and organizational measures to
        protect your personal data from unauthorized access, use, or disclosure.
      </Typography>

      <Typography
        variant="body1"
        sx={{ color: "#4d4d4d", marginTop: "1rem" }}
      >
        6. We retain your personal data only for as long as necessary to fulfill
        the purposes for which it was collected or as required by law.
      </Typography>

      <Typography
        variant="body1"
        sx={{ color: "#4d4d4d", marginTop: "1rem" }}
      >
        7. Depending on your jurisdiction, you may have the following rights
        regarding your personal data: access to your data, correction of
        inaccurate data, deletion of your data, restriction of processing, and
        data portability.
      </Typography>

      <Typography
        variant="body1"
        sx={{ color: "#4d4d4d", marginTop: "1rem" }}
      >
        8. The App is not intended for use by children under the age of 13. We
        do not knowingly collect personal data from children under 13. If we
        learn that we have collected personal data from a child under 13, we
        will delete that information promptly.
      </Typography>

      <Typography
        variant="body1"
        sx={{ color: "#4d4d4d", marginTop: "1rem" }}
      >
        9. We may update this Privacy Policy from time to time. We will notify
        you of any changes by posting the new Privacy Policy within the App.
        Your continued use of the App after any such changes constitutes your
        acceptance of the new Privacy Policy.
      </Typography>

      <Typography
        variant="body1"
        sx={{ color: "#4d4d4d", marginTop: "1rem" }}
      >
        10. If you have any questions about this Privacy Policy, please contact
        us.
      </Typography>
    </Container>
  );
}

export default App;
