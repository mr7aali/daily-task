import React from 'react';
import AddTaskFrom from '../../Components/AddTaskFrom/AddTaskFrom';
import Footer from '../../Components/Footer/Footer';
import DrawerAppBar from '../../Components/Header/Header';
import Header from '../../Components/Header/Header';

const AddTask = () => {
    return (
        <div>
           <DrawerAppBar></DrawerAppBar>
           <AddTaskFrom></AddTaskFrom>
           
           <Footer></Footer>

        </div>
    );
};

export default AddTask;