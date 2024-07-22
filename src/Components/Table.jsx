import React from 'react'

const Table = () => {
    return (
        <>
        <h2 className='text-danger fw-bold text-center m-5'>Data</h2>
          <div className='w-100 d-flex align-items-center justify-content-center'>
          <table class="w-50 table table-success table-striped">
                <thead>
                    <tr>
                        <th scope="col" className='text-center'>#</th>
                        <th scope="col" className='text-center'>Title</th>
                        <th scope="col" className='text-center'>Description</th>
                        <th scope="col" className='text-center'>Update</th>
                        <th scope="col" className='text-center'>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row" className='text-center'>1</th>
                        <td className='text-center'>Mark</td>
                        <td className='text-center'>Otto</td>
                        <td className='text-center'>
                            <button className='btn btn-primary p-1 text-light mx-1'>Edit</button>
                        </td>
                        <td className='text-center'>    
                            <button className='btn btn-danger p-1 text-light mx-1'>Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
          </div>
        </>
    )
}

export default Table