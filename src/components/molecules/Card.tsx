import React from "react";
import { Box, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import Logo from "../../assets/Icons/Logo";
import Typography from "../atoms/Typography";
import Ilogo from "../../assets/Icons/Ilogo";

const Card = () => {
  const Container = styled(Box)({
    backgroundColor: "#201F24",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    width: "530px",
    height: "430px",
    left: "500px",
    top: "120px",
    border: "1px solid #28272B",
    borderRadius: "12px",
  });

  const DueDateBox = styled(Box)({
    backgroundColor: "#E39AB2",
    borderRadius: "4px",
    width: "190px",
    height: "40px",
    position: "absolute",
    right: "2em",
    top: "2em",
  });

  const LogoImage = styled(Box)({
    width: "150px",
    height: "45px",
    position: "absolute",
    left: "3em",
    top: "5em",
  });

   const DateIcon = styled(Stack)({
        display:'flex',
        flexDirection:'row',
        position:'absolute',
        top:'15em',
        left:'3em',
        
       

   })

    const TotalAmount = styled(Box)({
        display:'flex',
        flexDirection:'row',
        position:'absolute',
        top:'20em',
        left:'3em',
    })
 
  return (
    <Container>
      <DueDateBox>
        <Typography
          text="Due in 30 day(s)"
          fontWeight="700px"
          fontSize="22px"
          color="#201F24"
          lineHeight="34px"
          variant='subtitle1'
        />
      </DueDateBox>
      <LogoImage>
        <Logo />
      </LogoImage>
      <DateIcon>
      <Typography
          text="Due - May 03, 2021"
          fontWeight="600px"
          fontSize="22px"
          color="#C9C8CC"
          lineHeight=""
          variant='subtitle1'
        />
        <Box sx={{
            paddingLeft:'12px',
            paddingTop:'2.7px'
        }}><Ilogo/></Box>
      </DateIcon>

      <TotalAmount>
      <Typography
          text="$14,204.55"
          fontWeight="700px"
          fontSize="26px"
          color="#E8E7F0"
          lineHeight=""
          variant='h1'
        />
      </TotalAmount>


    </Container>
  );
};

export default Card;
