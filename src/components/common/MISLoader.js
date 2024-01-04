import React from "react";

import { CircularProgress, Backdrop } from "@mui/material";

import { EXAMHUB_THEME_COLOR, BACKGROUND } from "theme/colors";

const ExamHubLoader = () => (
  <Backdrop open sx={{ color: BACKGROUND.white, zIndex: (theme) => theme.zIndex.drawer + 1 }}>
    <CircularProgress sx={{ color: EXAMHUB_THEME_COLOR }} />
  </Backdrop>
);

export default ExamHubLoader;
