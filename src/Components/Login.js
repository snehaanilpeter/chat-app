import { Container, Grid, TextField, Button, Box, Typography} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate= useNavigate();
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

                        

                
                            
                                <p> a dummy app for chatting purpose. Donec orci leo, condimentum non ligula a, dictum pharetra justo. 
                                    Nam sed dolor semper libero semper ornare vitae in orci.
                                    Cras ac orci hendrerit massa aliquam vestibulum ut eget nisi.
                                    Nullam scelerisque et est eu ornare.
                                </p>

                            </Box>     
                    </paper>
                </Grid>
                <Grid item md={6}>
                    <paper square sx={{height: "100%", display: "flex", alignItems: "center", flexDirection: "column" }}> 
                        <Box sx={{p: 5}}>
                            <h1> Login </h1> 
                            <TextField fullWidth
                                id="email"
                                label="Email" 
                                variant="outlined"
                                
                            />

                            <TextField fullWidth
                                id="password" 
                                label="Password" 
                                variant="outlined" 
                            /> 

                            <Button fullWidth variant="contained" sx={{ py: 2}}>
                                Submit
                            </Button>
                            <Button sx={{ mt:1}} >
                                Forgot password
                            </Button>
                        </Box> 
                        <Box sx={{textAlign: "right", pr: 1}}>
                            <Typography variant="body2">
                                Don't have an account <Button onClick={() => navigate("/register")}>Create account</Button>
                            </Typography>
                        </Box>
                    </paper>  
                </Grid>
            </Grid>
        </Container>
    );
};
export default Login;



