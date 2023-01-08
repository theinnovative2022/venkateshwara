import React from 'react'
import Sidebar from '../SideBar'

const MyGrievance = () => {
  return (
    <div>
      <div className="row">
        <div className="p-2 col-md-3 border border-3 mt-5 text-center ">
          <Sidebar />
        </div>
        <div className="col-md-8">
          <div className="container py-5">
            <h5 className='bg-light p-3 col-md-12'>My Grievance</h5>

            <table className='border p-5'>
              <thead>
                <tr className=''>
                  <th className='p-4 border border-end'>Grievance Id</th>
                  <th className='p-4  border border-end'>Grievance Date</th>
                  <th className='p-4  border border-end'>Grievance Type</th>
                  <th className='p-4  border border-end'>status</th>
                </tr>
              </thead>

              <tbody>
                {/* <tr>

                  <td>2010-2015</td>
                  <td>Lead Developer at flipit it solutions</td>
                </tr>

                <tr>
                  <td>2010</td>
                  <td>Tempo App software developer</td>
                </tr> */}
              </tbody>

            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyGrievance