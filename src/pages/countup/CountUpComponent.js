import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CountUp from "react-countup";
import { Container} from "@mui/material";
import CountUpData from "./CountUpData";

export default function CountUpComponent() {
  const myStyle = {
    color: "white",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.4)",
    fontFamily: "Sans-Serif",
    borderRadius: "10px",
  };

  return (
    <Container className="py-20">
      <Box sx={{ flexGrow: 1 }} style={myStyle} className="py-xs-32 py-32 px-xs-0 px-lg-32">
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
                  <h2  className="h1" fontWeight={700}>
                    <CountUp end={item.counter} />+
                  </h2>
                  <h3 className="h3" >{item.name}</h3>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
