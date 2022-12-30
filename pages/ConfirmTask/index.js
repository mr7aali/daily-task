import { useQuery } from "@tanstack/react-query";
import Head from "next/head";
import { useState } from "react";
import Footer from "../../Components/Footer/Footer";
import DrawerAppBar from "../../Components/Header/Header";
import LoadingData from "../../Components/LoadingData/LoadingData";
import Task from "../../Components/Mytask/Task";
import Style from '../../styles/Mytask.module.css'

const index = () => {
  const [loadingTask, setLoadingTask] = useState(true);
  const { data: task = [], refetch } = useQuery({
    queryKey: ['mytask'],
    queryFn: async () => {
      const res = await fetch('https://daily-task-server-eta.vercel.app/confirmTask');
      const data = await res.json();
      setLoadingTask(false);
      return data;
    }
  })



  return (
    <div>
      <Head>
        <title>Confirmed Task</title>
      </Head>
      <DrawerAppBar />
      <div className="bg-gray-900">
        <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="absolute inset-x-0 top-0 items-center justify-center hidden overflow-hidden md:flex md:inset-y-0">


            <svg
              viewBox="0 0 88 88"
              className="w-full max-w-screen-xl text-gray-800"
            >
              <circle
                fill="currentColor"
                fillOpacity="0.4"
                cx="44"
                cy="44"
                r="15.5"
              />
              <circle
                fillOpacity="0.1"
                fill="currentColor"
                cx="44"
                cy="44"
                r="44"
              />
              <circle
                fillOpacity="0.1"
                fill="currentColor"
                cx="44"
                cy="44"
                r="37.5"
              />
              <circle
                fillOpacity="0.1"
                fill="currentColor"
                cx="44"
                cy="44"
                r="29.5"
              />
              <circle
                fillOpacity="0.1"
                fill="currentColor"
                cx="44"
                cy="44"
                r="22.5"
              />
            </svg>


          </div>

          {/* className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4" */}
          <div className={Style.taskContainer}>



            {/* <div className="px-10 py-20 text-center transition duration-300 transform bg-gray-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
              <p className="font-semibold text-gray-200">
                Sed ut perspiciatis unde omnis iste Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti sapiente dolore delectus consequuntur quas maxime neque harum totam consequatur labore deleniti, molestiae earum doloremque rerum! Commodi ducimus esse totam debitis.
              </p>
            </div> */}

            {
              loadingTask &&
              <div className={Style.task}>
                <LoadingData />
                <LoadingData />
                <LoadingData />
                <LoadingData />
                <LoadingData />
                <LoadingData />

              </div>
            }



            {
              task?.map(t => <div className={Style.task}>
                <Task
                  t={t}
                  refetch={refetch}
                ></Task>
              </div>)
            }






          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default index;