import Editor from "../Editor/Editor";
import Sidebar from "../Sidebar/Sidebar";

export default function Home() {
  return (
    <div className='grid grid-cols-6'>
        <Sidebar />
      <div className='col-span-5 p-2'>
        <Editor />
      </div>

    </div>
  )
}