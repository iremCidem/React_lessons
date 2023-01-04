import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

  import React from 'react'
  
  export default function Toastify() {
     const notify = () => toast.success('🦄 Wow so easy!', {
position: "top-center",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "colored",
});;
    return (
      <div>
        <button style={{height:"50px",width:"70px",backgroundColor:"pink"}} onClick={notify}>Notify!</button>
        <ToastContainer />
  
      </div>
    )
  }
  