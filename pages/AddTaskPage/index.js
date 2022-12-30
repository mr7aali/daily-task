import { Box } from "@mui/material";

import InputFiled from "../../Components/AddTaskFrom/InputFiled";
import Footer from "../../Components/Footer/Footer";
import DrawerAppBar from "../../Components/Header/Header";
import Style from '../../styles/Modal.module.css'

const index = () => {

    // const [open, setOpen] = useState(false);
    const open=0;
   const   setOpen=()=>{
    
   }

    const style = {
        borderRadius: '12px',
        p: 2,
        position: 'relative'
    }
    return (
        <div>
            <DrawerAppBar/>
            <Box>
                <Box open={open} sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',


                }}>

                    <div>
                        <Box sx={style} >


                            <InputFiled
                                setOpen={setOpen}
                                open={open}
                            ></InputFiled>


                        </Box>
                    </div>
                </Box>


            </Box>
           
            <Footer/>
        </div>
    );
};

export default index;