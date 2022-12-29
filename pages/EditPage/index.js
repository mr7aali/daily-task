import { Box, fontSize } from "@mui/system";
import Footer from "../../Components/Footer/Footer";
import DrawerAppBar from "../../Components/Header/Header";
import * as React from 'react';
import EditRoadIcon from '@mui/icons-material/EditRoad';

import AcUnitIcon from '@mui/icons-material/AcUnit';

// import Style from '../../styles/Modal.module.css'
import Style from '../../styles/Modal.module.css'
import { Button, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Components/contexts/AuthProvider";
import { toast } from "react-toastify";
import { Router, useRouter } from "next/router";



const EditPage = () => {
    const router = useRouter();
    const { editId,seteditId } = React.useContext(AuthContext);
    const [file, setFile] = React.useState();
    console.log(editId);
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    
    const handleModal=(data)=>{

          const id =editId._id ;
          const data2= {...data,id}

        fetch(`https://daily-task-server-eta.vercel.app/editTask`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data2)

        })
            .then(res => res.json())
            .then(data => {
                router.push('/EditPage')
                toast('Edit done');
            })









    }
    return (
        <div>
            <DrawerAppBar></DrawerAppBar>
                
        <Box sx={{
            border:'1px solid red'
        }}>
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
                                }} > < EditRoadIcon sx={{ fontSize: 90 }} /> </Box>
                                {/* block pl-2 font-semibold text-xl self-start text-gray-700 */}
                                <Box class="">
                                    {/* class="leading-relaxed" */}
                                    <Typography sx={{ fontSize: '40px' }} variant="h2" >{editId?.TaskTitle}</Typography>
                                    <Typography variant="p" sx={{}} >{editId?.TaskSubTitle}</Typography>
                                </Box>
                            </Box>



                            <form onSubmit={handleSubmit(handleModal)}>
                                <Box class="Boxide-y Boxide-gray-200">
                                    <Box sx={{ padding: '50px 0' }} class=" text-base leading-6  text-gray-700 sm:text-lg sm:leading-7">


                                        <Box style={{ margin: '30px 0px' }} class="flex flex-col">
                                            {/* <label class="leading-loose">Task Title</label>
                                        <input type="text" class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Event title" /> */}
                                            <TextField
                                                required
                                                id="outlined-textarea"
                                                defaultValue={editId?.TaskTitle}
                                                label="Task Title"
                                                variant="filled"
                                                placeholder="Task Title"
                                                multiline
                                                {...register("TaskTitle")}
                                            />
                                        </Box>


                                        <Box style={{ margin: '30px 0px' }} class="flex flex-col">
                                            {/* <label class="leading-loose">Task Subtitle</label>
                                        <input type="text" class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Optional" /> */}
                                            <TextField
                                            required
                                                id="outlined-textarea"
                                                label="Task Subtitle"
                                                variant="filled"
                                                defaultValue={editId?.TaskSubTitle}
                                                placeholder="Task Subtitle"
                                                multiline
                                                {...register("TaskSubTitle")}
                                            />
                                        </Box>

                                        {/* flex items-center space-x-4 */}



                                     


                                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <TextField defaultValue={editId?.StartTime} required {...register("StartTime")} type='datetime-local' label="Start Time" id="standard-basic" focused variant="standard" />
                                            <TextField defaultValue={editId?.EndTime}  required {...register("EndTime")} type='datetime-local' id="standard-basic" label="End Time" variant="standard" focused />
                                        </Box>





                                        <Box sx={{
                                            margin:'20px 0'
                                        }} class="">
                                         
                                            {/* <div className={Style.ali}>
                                                <div className={Style.backgroundContainer}>

                                                </div>
                                                <img src={file}/>
                                               <input required {...register("Image")} type='file' id="file" onChange={handleChange} accept='image/*'/>

                                               <label htmlFor="file"><span>Chose a photo</span></label>
                                            </div> */}
                                            <TextField
                                               required
                                                id="outlined-multiline-static"
                                                label="Task Description"
                                                multiline
                                                rows={5}
                                                defaultValue={editId?.TaskDescription} 
                                                variant="filled"
                                                fullWidth
                                                {...register("TaskDescription")}
                                            />
                                        </Box>
                                      
                                        
                                    </Box>




                                    <Box sx={{

                                        display: 'grid',
                                        gridTemplateColumns: '1fr 1fr'

                                    }}>


                                      
                                        <Button

                          
                                            sx={{ margin: '0 auto', color: 'red', fontSize:'25px' }}
                                            >
                                           Back
                                        </Button>
                                        {/* class="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none" */}
                                        <Button type="submit"
                                            style={{ backgroundColor: '#3B82F6', color: 'FFFFFF' }}
                                         
                                            sx={{ margin: '0 auto', color: 'white', height: '50px', width: '200px' }}
                                        >
                                          Edit
                                        </Button>

                                    </Box>



                                </Box>
                            </form>

                        </Box>
                    </Box>
                </Box>
            </Box>
            
        </Box>

            <Footer></Footer>
        </div>
    );
};

export default EditPage;