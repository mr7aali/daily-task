import * as React from 'react';
import { Box, Button, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { useState } from "react";
import Style from '../../styles/Modal.module.css'
import { AuthContext } from '../contexts/AuthProvider';
import { toast } from 'react-toastify';
import LoadingButton from '@mui/lab/LoadingButton';





export default function InputFiled({ setOpen }) {

    
    const { user,gotoNewRout } = React.useContext(AuthContext);
    console.log(user?.uid);
    const [file, setFile] = useState();
    const [loadingBtn, setLoadingBtn] = React.useState(false);
    const imgHostKey = 'e7c7ad4bbef122abda9b9cceb2879568';

    function handleChange(e) {
        //  console.log(e.target.files[0]);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    const { register, reset, handleSubmit, formState: { errors } } = useForm();


    const handleModal = data => {
        setLoadingBtn(true);
        const image = data.Image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                delete data.Image;
                console.log(imgData.data.url)
                const data2 = { ...data, Photo: imgData?.data.url, UserID: user?.uid, Email: user?.email }
                console.log(data2);
                reset();
                toast.info('Plase wait sometime', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });



                fetch('https://daily-task-server-eta.vercel.app/addTask', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(data2)

                })
                    .then(res => res.json())
                    .then(data => {

                        reset();
                        setLoadingBtn(false);
                        toast.success('Added your task', {
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                        });
                    })


            })



    };
    return (


        <Box>
            <Box class="min-h-screen py-6 flex flex-col justify-center sm:py-12">
                <Box class="relative py-3 sm:max-w-xl sm:mx-auto">
                    <Box style={{ borderRadius: '15px' }} class="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow  sm:p-10">
                        <Box class="max-w-md mx-auto">




                            <Box class="flex items-center space-x-5">
                                {/* h-14 w-14 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono */}
                                <Box style={{


                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }} > <AcUnitIcon sx={{ fontSize: 90 }} /> </Box>
                                {/* block pl-2 font-semibold text-xl self-start text-gray-700 */}
                                <Box class="">
                                    {/* class="leading-relaxed" */}
                                    <Typography sx={{ fontSize: '40px' }} variant="h2" >Create your task</Typography>
                                    <Typography variant="p" sx={{}} >Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Typography>
                                </Box>
                            </Box>



                            <form onSubmit={handleSubmit(handleModal)}>
                                <Box class="Boxide-y Boxide-gray-200">
                                    <Box sx={{ padding: '50px 0' }} class=" text-base leading-6  text-gray-700 sm:text-lg sm:leading-7">


                                        <Box style={{ margin: '30px 0px' }} class="flex flex-col">

                                            <TextField
                                                required
                                                id="outlined-textarea"
                                                label="Task Title"
                                                placeholder="Task Title"
                                                multiline
                                                {...register("TaskTitle")}
                                            />
                                        </Box>


                                        <Box style={{ margin: '30px 0px' }} class="flex flex-col">

                                            <TextField
                                                required
                                                id="outlined-textarea"
                                                label="Task Subtitle"
                                                placeholder="Task Subtitle"
                                                multiline
                                                {...register("TaskSubTitle")}
                                            />
                                        </Box>








                                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <TextField required {...register("StartTime")} type='datetime-local' label="Start Time" id="standard-basic" focused variant="standard" />
                                            <TextField required {...register("EndTime")} type='datetime-local' id="standard-basic" label="End Time" variant="standard" focused />
                                        </Box>





                                        <Box style={{
                                            margin: '30px 0px',
                                            display: 'grid',
                                            gridTemplateColumns: '1fr 1fr',
                                            gap: '15px',
                                            // border:'1px solid red'
                                            //flex flex-col
                                        }} class="">



                                            <div className={Style.ali}>
                                                <div className={Style.backgroundContainer}>

                                                </div>
                                                <img src={file} />
                                                <input required {...register("Image")} type='file' id="file" onChange={handleChange} accept='image/*' />

                                                <label htmlFor="file"><span>Chose a photo</span></label>
                                            </div>
                                            <TextField
                                                required
                                                id="outlined-multiline-static"
                                                label="Task Description"
                                                multiline
                                                rows={5}
                                                defaultValue=""
                                                {...register("TaskDescription")}
                                            />
                                        </Box>


                                    </Box>




                                    <Box sx={{

                                        display: 'grid',
                                        gridTemplateColumns: '1fr 1fr'

                                    }}>
                                        <Button

                                            variant="outlined" color="error"
                                            fullWidth            
                                            sx={{ margin: '0 auto',fontWeight:'700' }}                                          
                                            onClick={()=>gotoNewRout('/')}
                                        >
                                            Cancel
                                        </Button>

                                        <LoadingButton type="submit"
                                            style={{ backgroundColor: '#3B82F6', color: 'FFFFFF' }}
                                            sx={{ margin: '0 auto', color: 'white', height: '50px', width: '200px' }}
                                            loadingIndicator="Creating….."
                                            disabled={false}
                                            loading={loadingBtn}
                                            
                                        >
                                            Create
                                        </LoadingButton>

                                    </Box>



                                </Box>
                            </form>

                        </Box>
                    </Box>
                </Box>
            </Box>

        </Box>





    );
}