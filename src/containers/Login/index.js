import React, { Children, useEffect } from "react";

import { Grid, Box, Typography } from "@mui/material";
import LoginForm from "components/LoginForm";

import { clearCache } from "utils/clearCache";
import T from "T";
import { GET_SIZE } from "utils/responsive";


import styled, { keyframes } from 'styled-components';

const Login = () => {
  useEffect(()=>{
    clearCache()
  },[])
  
  const { isXs } = GET_SIZE();
  return (
    <Grid container p="6px 32px">
      {/* <Grid
        item
        xs={12}
        sm={9}
        display={isXs ? "block" : "grid"}
        minWidth={isXs ? "100%" : "auto"}
        textAlign="center"
        sx={{
          ".carousel .slide img": {
            maxWidth: "36%",
          },
        }}
      >
        <Box component="img" src={NetsmartzLogo} margin="auto" maxWidth="22%" />

        <MISCarousel>
          {Children.toArray(
            LOGIN_CAROUSAL_DATA.map((record, index) => (
              <>
                <Box
                  component="img"
                  src={index < 1 ? LoginImage : LoginImage2}
                  mt={3}
                  margin="auto"
                  maxWidth="inherit"
                />

                <Typography variant="h5" fontSize={19}>
                  {record.title}
                </Typography>
                <Typography
                  variant="body1"
                  mt={2}
                  mb={5}
                  p="0 50px"
                  fontSize={14}
                >
                  {record.details}
                </Typography>
              </>
            ))
          )}
        </MISCarousel>
      </Grid> */}
      {/* <Box component="img" src={NetsmartzLogo} margin="auto" maxWidth="50%" maxHeight="22%"/> */}
      <Box margin="auto" maxWidth="50%" maxHeight="22%">{
        Login1()
      }
       
      </Box>
      <Grid item xs={12} sm={3} m="auto">
        <LoginForm />
      </Grid>
    </Grid>
  );
};

export default Login;





const fadeIn = keyframes`
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const alternateColors = keyframes`
  0% {
    color: #2596be; /* Bright blue color */
  }
  50% {
    color: #2596be; /* Dimmed blue color */
  }
  100% {
    color: #0000ff; /* Back to bright blue color */
  }
`;

const AnimatedText = styled.div`
  font-size: 5em;
  font-weight: bold;
  overflow: hidden;
  white-space: nowrap;

  span {
    display: inline-block;
    opacity: 0;
    transform: translateY(0.5em);
    animation: ${fadeIn} 0.5s forwards, ${alternateColors} 4s infinite; /* Repeat every 4 seconds */
  }

  span:nth-child(1) { animation-delay: 0.1s; }
  span:nth-child(2) { animation-delay: 0.2s; }
  span:nth-child(3) { animation-delay: 0.3s; }
  span:nth-child(4) { animation-delay: 0.4s; }
  span:nth-child(5) { animation-delay: 0.5s; }
  span:nth-child(6) { animation-delay: 0.6s; }
  span:nth-child(7) { animation-delay: 0.7s; }
  /* Add more span rules for each letter */
`;

const BorderedBox = styled.div`
  border: 2px solid #000;
  padding: 20px;
  display: inline-block;
`;

const Login1 = () => {
  return (
    <>
      <BorderedBox>
      <AnimatedText>
      <span>𝔼</span>
      <span>𝕩</span>
      <span>𝕒</span>
      <span>𝕞</span>
      <span>ℍ</span>
      <span>𝕦</span>
      <span>𝕓</span>
    </AnimatedText>
      </BorderedBox>
    </>
    
  );

};


