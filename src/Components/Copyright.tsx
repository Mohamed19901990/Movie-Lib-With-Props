/* Copyright (c) 2023 CLOUDPILOTS Software & Consulting GmbH */

import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

export default function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}.
    </Typography>
  );
}
