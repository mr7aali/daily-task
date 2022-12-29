
import { Button } from '@mui/material';
import Style from '../../styles/Task.module.css'
import EditRoadIcon from '@mui/icons-material/EditRoad';
import { useRouter } from 'next/router';
import { AuthContext } from '../contexts/AuthProvider';
import { useContext } from 'react';


const Task = ({ t, refetch }) => {

    const { editId,seteditId } = useContext(AuthContext);

    const router = useRouter();


    const handleDelete = (data) => {

        
        console.log(data?._id)
        //https://daily-task-server-eta.vercel.app/deleteTask
        fetch(`https://daily-task-server-eta.vercel.app/deleteTask?id=${data?._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch();
            })
    }


    const updateConfirm = (data) => {

        fetch(`https://daily-task-server-eta.vercel.app/addConfirm?id=${data._id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                refetch()
            })


    }

    const gotoNewRout=(data)=>{
        // console.log(data);
        // seteditId(data)
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
                    <Button onClick={()=>gotoNewRout(t)} variant="outlined" startIcon={<EditRoadIcon />} className={Style.EdditButton}>Edit</Button>
                </div>



                <div className={Style.BlogContainer}>
                    {/* <div className={Style.titleContainer}>
                        <h1 className={Style.title} >{t?.TaskTitle}</h1>
                    </div> */}
                    <h3 className={Style.subTitle}> {t?.TaskSubTitle}</h3>
                    <div>
                        <p className={Style.Discription}>{t?.TaskDescription}</p>
                    </div>
                   
                    <div className={Style.btnContainer}>
                    
                    
                        {
                            t?.confirm ?
                                
                                <>
                                    <Button onClick={() => handleDelete(t)} variant="outlined" color='error'>Delete</Button>
                                    <Button  disabled onClick={() => updateConfirm(t)} variant="outlined">Confirmed</Button>
                                </>
                                :
                                <>
                                <Button  onClick={() => handleDelete(t)} variant="outlined" color='error'>Delete</Button>
                                <Button onClick={() => updateConfirm(t)} variant="outlined">Confirm</Button>
                                </>
                        }


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Task;