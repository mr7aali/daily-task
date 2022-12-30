import { Button } from "@mui/material";
import Head from 'next/head'
import AddTask from "./AddTask/AddTask";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Your Task</title>
      </Head>


      <AddTask></AddTask>

    </div>
  )
}
