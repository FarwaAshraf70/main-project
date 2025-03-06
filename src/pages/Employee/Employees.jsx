import React,{useEffect, useState} from 'react';
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
 const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [gender, setGender] = useState()
  const [zip ,setZip]=useState()

const Employees = () => {
    
    console.log(Employees)
const handleSubmit=((e)=>{
    e.preventDefault()
})
    return (
        <>
            <div className='container mt-4'>
            <form className='row g-3' onSubmit={handleSubmit}>
                <h2 className='mb-3'>Employee Table</h2>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Add new Employee
                </button>
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Add new data</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <input type='text' className='form-control' placeholder='First Name' aria-label="First name" id="labelFirstName" value={firstName}/>
                                <input type='text' className='form-control mt-2' placeholder='Last Name' aria-label="Last name" id="labelLastName" value={lastName}/>
                                <input type="email" className="form-control mt-2" placeholder="Email" id="inputEmail" value={email}/>
                                <input type="password" className="form-control mt-3" id="inputPassword" placeholder='your password' value={password}/>
                                <input type="text" className="form-control mt-3" id="inputAddress" placeholder="your address" value={address}/>
                                <input type="text" className="form-control mt-3" id="inputCity" placeholder='your city' value={city}/>
                                <input type="text" className="form-control mt-3 " name="gender" id="flexRadioDefault1" placeholder='your gender' value={gender}/>
                                <input type="text" className="form-control mt-3" id="inputZip" placeholder='your zip' value={zip}/>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Submit Data</button>
                            </div>
                        </div>
                    </div>
                </div>
                </form>
            </div>
            <table className='table table-bordered table-striped'>
                <thead className='table-dark'>
                    <tr>
                        <th>firstName</th>
                        <th>LastName</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>Gender</th>
                        <th>ZipCode</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    {Employees.map((item, index) => {
                        return (
                            <>
                                <tr key={index}>
                                    <td>{item.Firstname}</td>
                                    <td>{item.lastname}</td>
                                    <td>{item.Email}</td>
                                    <td>{item.Password}</td>
                                    <td>{item.Address}</td>
                                    <td>{item.City}</td>
                                    <td>{item.Gender}</td>
                                    <td>{item.zipCode}</td>
                                    <td className='d-flex justify-content-evenly'><CiEdit color='green' size={20} /><MdDelete color='red' size={20} /></td>
                                </tr>
                            </>
                        )
                    })}
                </tbody>
            </table>



        </>
    );
};

export default Employees;
