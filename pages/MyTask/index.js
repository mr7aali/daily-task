import { useQuery } from "@tanstack/react-query";
import Footer from "../../Components/Footer/Footer";
import DrawerAppBar from "../../Components/Header/Header";
import { Mytask } from "../../Components/Mytask/Mytask";

const MyTask = () => {

   
    
    return (
        <div>
             <DrawerAppBar/>
             {/* task={task} */}
             <Mytask ></Mytask>
             <Footer/>
        </div>
    );
};

export default MyTask;