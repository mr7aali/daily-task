import * as React from 'react';
import { Button } from '@mui/material';
import Style from '../../styles/Task.module.css'
import EditRoadIcon from '@mui/icons-material/EditRoad';
import { useRouter } from 'next/router';
import { AuthContext } from '../contexts/AuthProvider';
import { useContext } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';

const Task = ({ t, refetch }) => {

    const { editId,seteditId } = useContext(AuthContext);
    const [loadingBtnD, setLoadingBtnD] = React.useState(false);
    const [loadingBtnC, setLoadingBtnC] = React.useState(false);
    const router = useRouter();


    const handleDelete = (data) => {

        setLoadingBtnD(true);
        console.log(data?._id)
        //https://daily-task-server-eta.vercel.app/deleteTask
        fetch(`https://daily-task-server-eta.vercel.app/deleteTask?id=${data?._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                setLoadingBtnD(false);
                console.log(data);
                refetch();
            })
    }


    const updateConfirm = (data) => {
        setLoadingBtnC(true);
        fetch(`https://daily-task-server-eta.vercel.app/addConfirm?id=${data._id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                setLoadingBtnC(false);
                refetch()
            })


    }

    
    const gotoNewRout=(data)=>{
        seteditId(data)
        router.push('/EditPage');
    }


    return (
        <div className={Style.HoleContainer}>
        
            <div className=" text-center transition duration-300 transform bg-gray-200 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
                <div className={Style.imgeContainer}>
                    <img src={t?.Photo} alt="" />
                    <div >
                        <h1>{t?.TaskTitle} </h1>
                    </div>
                    {/* <Button    className={Style.EdditButton}>Edit</Button> */}
                </div>



                <div className={Style.BlogContainer}>
                    {/* <div className={Style.titleContainer}>
                        <h1 className={Style.title} >{t?.TaskTitle}</h1>
                    </div> */}
                    <h3 className={Style.subTitle}> {t?.TaskSubTitle}</h3>
                    <div>
                        <p className={Style.Discription}>{t?.TaskDescription}</p>
                    </div>
                    <Button onClick={()=>gotoNewRout(t)}  variant="outlined"  startIcon={<EditRoadIcon />} sx={{width:'150px'}}>ali</Button>
                    <div className={Style.btnContainer}>
                      
                     
                        {
                            t?.confirm ?
                                
                                <>
                                    <LoadingButton 
                                    onClick={() => handleDelete(t)} 
                                    variant="outlined" color='error'
                                    loadingIndicator="Wait….."
                                    disabled={false}
                                    loading={loadingBtnD}
                                    >Delete</LoadingButton>
                                    <Button  
                                    disabled 
                                    onClick={() => updateConfirm(t)} 
                                    variant="outlined"
                                    loadingIndicator="Loading….."
                                    
                                    loading={loadingBtnC}
                                    >Confirmed</Button>
                                </>
                                :
                                <>
                                <LoadingButton 
                                onClick={() => handleDelete(t)} 
                                variant="outlined" 
                                color='error'
                                loadingIndicator="Wait……"
                                disabled={false}
                                loading={loadingBtnD}
                                >Delete</LoadingButton>

                                <LoadingButton 
                                onClick={() => updateConfirm(t)} 
                                variant="outlined"
                                loadingIndicator="Confirming….."
                                disabled={false}
                                loading={loadingBtnC}
                                >Confirm</LoadingButton>
                                </>
                        }


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Task;