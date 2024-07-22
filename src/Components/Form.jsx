import React from 'react'

const Form = () => {
    
  return (
    <>
    <h2 className='text-danger fw-bold text-center mt-5'>Form</h2>

    <div className='w-100 d-flex align-items-center justify-content-center'>

    <form className='w-25 form-control d-flex align-items-center justify-content-center flex-column' >
        <input type="text" placeholder='Enter Title' className='form-control mt-3' />
        <input type="text" placeholder='Enter Description' className='form-control mt-3' />
        <button  className='btn btn-success form-control mt-4'>Submit</button>
    </form>

    </div>
    </>
  )
}

export default Form