import React, { useEffect } from "react";
import {
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  Snackbar,

} from "@mui/material";
import WOW from "wowjs";
import emailjs from "emailjs-com";
import { useRef } from "react";
const ContactUs = () => {
  const [open, setOpen] = React.useState(false)
  const [firstname, setFirstName] = React.useState("");
  const [lastname, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [message, setMessage] = React.useState("");


;
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);
  const form = useRef();

  const sendEmail = (e) => {

    e.preventDefault();
    emailjs
      .sendForm(
        "service_g34yknd",
        "template_96vzxq2",
        form.current,
        "-9oGCOvFu9x1L_z47"
      )
      .then(
        (result) => {
          setOpen(true);
          setEmail("")
          setFirstName("")
          setLastName("")
          setMessage("")
          setPhone("")
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <div className="bg_contactus"></div>
      <div className="bg_contactus bg2_contactus"></div>
      <div className="bg_contactus bg3_contactus"></div>

      <section className="wrapper  font_family_development bg_color  ">
        <div className="container-xxl py-32 mx-auto">
          <div className="row justify-content-center">
            <div className="title col-lg-7 col-md-10 col-xs-12 text-align-center ">
              <h2
                className="service_heading h2 pb-24 text-color-white wow animate__fadeInUp "
                data-wow-delay="0.6s"
              >
                ContactUs
              </h2>
           
            </div>
          </div>
          <div className="row App wow animate__fadeInUp "
                data-wow-delay="0.6s">
            <div className="col-lg-6 col-xs-12">
              <Grid style={{}}>
                <Card
                  style={{
                    maxWidth: 550,
                    padding: "10px 5px",
                    margin: "0 auto",
                  }}
                >
                  <CardContent>
                    <Typography gutterBottom variant="h5">
                      Contact Us
                    </Typography>
                    <Typography
                      className="pb-16"
                      variant="body2"
                      color="textSecondary"
                      component="p"
                      gutterBottom
                    >
                      Fill up the form and our team will get back to you within
                      24 hours.
                    </Typography>
                    <form ref={form} onSubmit={sendEmail}>
                      <Grid container spacing={1}>
                        <Grid xs={12} sm={6} className="py-8" item>
                          <TextField
                            type="text"
                            id="first_name"
                            value={firstname}
                            name="firstname"
                            label="First Name"
                            variant="outlined"
                             onChange={(e) => setFirstName(e.target.value)}
                            fullWidth
                            required
                          />
                        </Grid>
                        <Grid xs={12} sm={6} className="py-8" item>
                          <TextField
                            type="text"
                            id="last_name"
                            name="lastname"
                            value={lastname}
                            label="Last Name"
                            variant="outlined"
                             onChange={(e) => setLastName(e.target.value)}
                            fullWidth
                            required
                          />
                        </Grid>
                        <Grid item xs={12} className="py-8">
                          <TextField
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            label="Email"
                            variant="outlined"
                             onChange={(e) => setEmail(e.target.value)}
                            fullWidth
                            required
                          />
                        </Grid>
                        <Grid item xs={12} className="py-8">
                          <TextField
                            type="number"
                            id="phone"
                            name="phone"
                            min="10" 
                            max="10"
                            value={phone}
                            label="Phone"
                            variant="outlined"
                             onChange={(e) => setPhone(e.target.value)}
                            fullWidth
                            required
                          />
                        </Grid>
                        <Grid item xs={12} className="py-8">
                          <TextField
                            label="Message"
                            id="message"
                            name="message"
                            multiline
                            value={message}
                            rows={4}
                            variant="outlined"
                             onChange={(e) => setMessage(e.target.value)}
                            fullWidth
                            required
                          />
                        </Grid>
                        <Grid item xs={12} className="py-8">
                          <Button
                            // disabled={true}
                            type="submit"
                            onClick={sendEmail}
                            variant="contained"
                            color="primary"
                            fullWidth
                          >
                            Submit
                          </Button>
                        </Grid>
                      </Grid>
                      <Snackbar
                        open={open}
                        autoHideDuration={3000}
                        onClose={handleClose}
                        message="Mail sent"
                        
                      />
               
                    </form>
                  </CardContent>
                </Card>
              </Grid>
            </div>
            <div className="col-lg-6 col-xs-12">
              <Grid></Grid>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
