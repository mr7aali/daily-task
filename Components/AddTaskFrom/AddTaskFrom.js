import { Box, Typography } from "@mui/material";
import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import { Add } from "@mui/icons-material";
import ModalFrom from "./ModalFrom";
import { useRouter } from "next/router";

const AddTaskFrom = () => {

    const [open, setOpen] = useState(false);
    const router = useRouter();
    const gotoNewRout=()=>{
   
        router.push('/AddTaskPage');
    }
    return (
        <div>
            <Box 
         
                sx={{
                    height: '80vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection:' column'
                }}>
                <IconButton
                    aria-label="delete"
                    color="secondary"
                    variant="contained"
                    onClick={gotoNewRout}
                    // onClick={() => setOpen(true)}
                    sx={{
                        p: 5,
                        border: '1px solid #9C27B0'
                    }}
                    className='bg-gray-300'

                >
                    <Add sx={{ fontSize: 100 }}></Add>
                </IconButton>
                <Typography
                    variant="h1"
                    color={'secondary'}
                    align='center'
                    sx={{
                     paddingTop:'25px'
                    }}

                >
                    Add Task
                </Typography>
            </Box>

           <ModalFrom
            setOpen={setOpen}
            open={open}
           ></ModalFrom>
           
        </div>
    );
};

export default AddTaskFrom;