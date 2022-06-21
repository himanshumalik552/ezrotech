import React from 'react'
import { Grid, TextField, Button, Card, CardContent, Typography } from '@mui/material';


const ContactUs = () => {
  return (
<>
    <div className="bg_contactus"></div>
    <div className="bg_contactus bg2_contactus"></div>
    <div className="bg_contactus bg3_contactus"></div>

    <section className="wrapper  font_family_development bg_color py-32 ">
     
     <div className="container-xxl py-32 mx-auto">
       <div className="row justify-content-center">
         <div className="title col-lg-7 col-md-10 col-xs-12 text-align-center ">
           <h2 className="service_heading h2 py-8 text-color-white wow animate__fadeInUp "data-wow-delay="0.6s">
            ContactUs
           </h2>
           <p className="p service_para py-lg-32 py-md-20 py-xs-12 text-color-white  wow animate__fadeInUp "data-wow-delay="0.6s">
           We offer a wide range of web development & digital marketing services. Our services include web design, web development, mobile app development, UI Designing, UX Designing, Games & more.
            </p>
         </div>

       </div>
       <div className="row App"> 
       <div className='col-lg-6 col-xs-12'  > 
       <Grid style={{}} >
        <Card style={{ maxWidth: 550, padding: "10px 5px", margin: "0 auto" , }}>
          <CardContent>
            <Typography gutterBottom variant="h5">
              Contact Us
          </Typography> 
            <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
              Fill up the form and our team will get back to you within 24 hours.
          </Typography> 
            <form>
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <TextField placeholder="Enter first name" label="First Name" variant="outlined" fullWidth required />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField placeholder="Enter last name" label="Last Name" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="email" placeholder="Enter email" label="Email" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="number" placeholder="Enter phone number" label="Phone" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Message" multiline rows={4} placeholder="Type your message here" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
                </Grid>

              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
       </div>
       <div className='col-lg-6 col-xs-12' > 
       <Grid>
      
      </Grid>
       </div>
    </div>
     </div>

   </section>
    </>
  )
}

export default ContactUs