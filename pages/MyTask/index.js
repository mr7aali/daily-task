import { useQuery } from "@tanstack/react-query";
import Head from "next/head";
import Footer from "../../Components/Footer/Footer";
import DrawerAppBar from "../../Components/Header/Header";
import { Mytask } from "../../Components/Mytask/Mytask";

const MyTask = () => {

   
    
    return (
        <div>
            <Head>
                <title>My task</title>
            </Head>
             <DrawerAppBar/>
             {/* task={task} */}
             <Mytask ></Mytask>
             <Footer/>
        </div>
    );
};

export default MyTask;