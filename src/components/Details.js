import React from 'react'


export const Details = () => {
    return (
        <div className='container'>
            <div className='mt-5'>
                <div className='add_btn mt-2 mb-2'>
                    <button className='btn btn-primary'> Add Students </button>
                </div>

                <table class="table">
                    <thead>
                        <tr className='table-dark'>
                            <th scope="col">No.</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Pnone</th>
                            <th scope="col">Address</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>mark@gmail.com</td>
                            <td>9874599615</td>
                            <td>London</td>
                            <td className='d-flex justify-content-between'>
                                <button className='btn btn-success'>Read</button>
                                <button className='btn btn-primary'>Update</button>
                                <button className='btn btn-danger'>Delete</button>
                            </td>
                            
                        </tr>
                        
                    </tbody>
                </table>

            </div>

        </div>
    )
}

export default Details;
