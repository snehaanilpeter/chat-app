import { Container, Grid, TextField, Button, Box, Typography} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    return (
        <Container maxwidth="md" sx={{display:"flex", alignItems:"center", height: "100vh"}}>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <paper square sx={{
                        bgcolor: "primary.main",
                        color: "primary.constrastText",
                        height: "100%"
                       //border: (theme) => console.log(theme),
                    }}>
                            <Box sx={{ p: 5, textAlign: "center"}}>
                                <Typography variant="h4" gutterBottom sx={{fontWeight: "500", mt: 3}}>
                                    CHAT APP

                                </Typography>

                        

                
                            
                                <Typography> a dummy app for chatting purpose. Donec orci leo, condimentum non ligula a, dictum pharetra justo. 
                                    Nam sed dolor semper libero semper ornare vitae in orci.
                                    Cras ac orci hendrerit massa aliquam vestibulum ut eget nisi.
                                    Nullam scelerisque et est eu ornare.
                                </Typography>

                            </Box>     
                    </paper>
                </Grid>
                <Grid item md={6}>
                    <paper square sx={{height: "100%", display: "flex", alignItems: "center", flexDirection: "column" }}> 
                        <Box sx={{p: 5}}>
                            <Typography variant="h5" sx={{mb: 2, fontWeight: "500"}}> Register </Typography> 
                            <TextField fullWidth
                                id="name"
                                label="Name" 
                                variant="outlined"
                                sx={{mb: 3}} 
                                
                                
                            />
                            <TextField fullWidth
                                id="email"
                                label="email" 
                                variant="outlined"
                                sx={{mb: 3}} 
                                
                                
                            />

                            <TextField fullWidth
                                id="password" 
                                label="Password" 
                                variant="outlined"
                                sx={{mb: 3}} 
                            /> 
                            <TextField fullWidth
                                id="mobile number"
                                label="mobile number" 
                                variant="outlined"
                                sx={{mb: 3}} 
                                
                                
                            />

                            <Button fullWidth variant="contained" sx={{ py: 2}}>
                            Submit
                            </Button>
                            <Button sx={{ mt:1}} >
                               
                            </Button>
                        </Box> 
                        <Box sx={{textAlign: "right", pr: 1}}>
                            <Typography variant="body2">
                                Already have an account <Button onClick={() => navigate("/")}>LOGIN</Button>
                            </Typography>
                        </Box>
                    </paper>  
                </Grid>
            </Grid>
        </Container>
    );
};
export default Register;