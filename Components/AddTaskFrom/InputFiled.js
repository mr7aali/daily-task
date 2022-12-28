import { Box, Button, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";





export default function InputFiled({ setOpen }) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleModal = data => console.log(data);
    return (


        <Box>
            <Box class="min-h-screen py-6 flex flex-col justify-center sm:py-12">
                <Box class="relative py-3 sm:max-w-xl sm:mx-auto">
                    <Box style={{ borderRadius:'15px' }} class="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow  sm:p-10">
                        <Box class="max-w-md mx-auto">




                            <Box class="flex items-center space-x-5">
                                <Box class="h-14 w-14 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono">i</Box>
                                {/* block pl-2 font-semibold text-xl self-start text-gray-700 */}
                                <Box class="">
                                {/* class="leading-relaxed" */}
                                    <Typography sx={{fontSize:'40px'}} variant="h2" >Create your task</Typography>
                                    <Typography variant="p" sx={{}} >Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Typography>
                                </Box>
                            </Box>



                            <form onSubmit={handleSubmit(handleModal)}>
                                <Box class="Boxide-y Boxide-gray-200">
                                    <Box sx={{padding:'50px 0'}} class=" text-base leading-6  text-gray-700 sm:text-lg sm:leading-7">


                                        <Box style={{margin:'30px 0px'}} class="flex flex-col">
                                            {/* <label class="leading-loose">Task Title</label>
                                        <input type="text" class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Event title" /> */}
                                            <TextField
                                                
                                                id="outlined-textarea"
                                                label="Task Title"
                                                placeholder="Task Title"
                                                multiline
                                                {...register("TaskTitle")}
                                            />
                                        </Box>


                                        <Box style={{margin:'30px 0px'}} class="flex flex-col">
                                            {/* <label class="leading-loose">Task Subtitle</label>
                                        <input type="text" class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Optional" /> */}
                                            <TextField
                                                id="outlined-textarea"
                                                label="Task Subtitle"
                                                placeholder="Task Subtitle"
                                                multiline
                                                {...register("TaskSubTitle")}
                                            />
                                        </Box>

                                        {/* flex items-center space-x-4 */}
                                        <Box  sx={{
                                             display:'flex',
                                             alignItems:'center',
                                             flexDirection:'row'
                                           
                                        }}    class="">
                                            <Box  class="flex flex-col">
                                                <label class="leading-loose">Start</label>
                                                <Box class="relative focus-within:text-gray-600 text-gray-400">
                                                    <input type="date"  {...register("StartDate")} class="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="25/02/2020" />
                                                    <Box class="absolute left-3 top-2">
                                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                                    </Box>
                                                </Box>
                                            </Box>
                                            <Box class="flex flex-col">
                                                <label class="leading-loose">End</label>
                                                <Box class="relative focus-within:text-gray-600 text-gray-400">
                                                    <input type="date" {...register("EndDate")} class="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="26/02/2020" />
                                                    <Box class="absolute left-3 top-2">
                                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Box>
                                        <Box style={{margin:'30px 0px'}}  class="flex flex-col">
                                            {/* <label class="leading-loose">Event Description</label>
                                        <input type="text" class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Optional" /> */}
                                            <TextField
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

                                        display: 'flex',

                                    }}>


                                        {/* class="flex justify-center items-center w-full text-gray-900 px-4 py-3 rounded-md focus:outline-none" */}
                                        <Button 
                                        
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            width: '100%',
                                            borderRadius: '15px'
                                        }}
                                        onClick={() => 
                                            
                                            setOpen(false)}>
                                            Cancel
                                        </Button>
                                        {/* class="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none" */}
                                        <Button type="submit" 
                                        style={{ backgroundColor: '#3B82F6',color:'FFFFFF' }}
                                           sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            width: '100%',
                                            borderRadius: '15px',
                                            bgcolor:'#3B82F6',                               
                                        }}
                                        
                                        >
                                            Create
                                        </Button>

                                    </Box>



                                </Box>
                            </form>

                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>


        
//   <Box sx={{
//     width:'300px',
//     height:'500px',
//     border:'1px solid red',
//     bgcolor:'#fff'
//   }}>
    
//   </Box>



















    );
}