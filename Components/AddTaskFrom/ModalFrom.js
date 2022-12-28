import { Modal, Typography, Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import InputFiled from './InputFiled';
const ModalFrom = ({ setOpen, open }) => {
    const style = {
        borderRadius: '12px',
        p: 2,
        position: 'relative'
    }
    return (
        <Box>
            <Modal open={open} sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              

            }}>

                <div>
                    <Box sx={style} >
{/*                         
                        <Typography variant='h3'
                            sx={{
                                m: 2,
                                border: '5px solid red'
                            }}
                        >Add your task</Typography> */}

{/* 
                        <IconButton
                            aria-label="delete"
                            color="secondary"
                            variant="contained"
                            onClick={() => setOpen(false)}
                            sx={{
                                border: '5px solid #9C27B0',
                                position: 'absolute',
                                right: '15px',
                                top: '15px'

                            }}


                        >

                            <CloseIcon sx={{ fontSize: 20 }}></CloseIcon>
                        </IconButton>
 */}

                        <InputFiled
                            setOpen={setOpen}
                            open={open}
                        ></InputFiled>


                    </Box>
                </div>
            </Modal>

     
        </Box>
    );
};

export default ModalFrom;