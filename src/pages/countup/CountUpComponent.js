import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CountUp from "react-countup";
import { Container, Typography } from "@mui/material";
import CountUpData from "./CountUpData";

export default function CountUpComponent() {
  const myStyle = {
    color: "white",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.4)",
    fontFamily: "Sans-Serif",
    borderRadius: "10px",
    padding: "32px",
  };

  return (
    <Container className="py-72">
      <Box>
        <Grid container justifyContent={"center"} paddingY={"30px"}>
          <Grid item>
           
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ flexGrow: 1 }} style={myStyle}>
        <Grid
          container
          justifyContent="center"
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 3, sm: 12, md: 12 }}
        >
          {CountUpData.map((item, index) => (
            <Grid item xs={3} sm={4} md={4} key={index}>
              <Grid justifyContent="center" container>
                <Grid item>
                  <img src={item.icon} alt={item.name} width={100} />
                </Grid>
                <Grid item>
                  <Typography variant="h2" fontWeight={700}>
                    <CountUp end={item.counter} />+
                  </Typography>
                  <Typography variant="h4">{item.name}</Typography>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
