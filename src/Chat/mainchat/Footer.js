import { Button } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

const Footer=() =>{
    return(
        <Box sx={{ p: 2 }}>

            <Button sx={{ minWidth: "auto", mr: 1 }}>
                <MoreVertIcon/>
            </Button>
            <Button sx={{ minWidth: "auto", mr: 1 }}>
                <EmojiEmotionsIcon/>
            </Button>
            <span>footer</span>
        </Box>
    );
    
};

export default Footer;