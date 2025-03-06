import React, { useState } from 'react';
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";

const Emp = () => {
    const [showModal, setShowModal] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [gender, setGender] = useState('');
    const [zip, setZip] = useState('');
    const [employees, setEmployees] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newEmployeeData = {
            firstName:firstName,
            lastName:lastName,
            email:email,
            password:password,
            address:address,
            city:city,
            gender:gender,
            zip:zip,
        };
     
        setEmployees([...employees, newEmployeeData]);

        // Reset form fields
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setAddress('');
        setCity('');
        setGender('');
        setZip('');
        setShowModal(false);
    };

    const handleEdit = (index) => {
        const person = employees[index];
        setFirstName(person.firstName);
        setLastName(person.lastName);
        setEmail(person.email);
        setPassword(person.password);
        setAddress(person.address);
        setCity(person.city);
        setGender(person.gender);
        setZip(person.zip);
        setShowModal(true);
    };

    const handleDelete = (index) => {
        setEmployees(employees.filter((_, i) => i !== index));
    };

    return (
        <>
            <div className='container mt-4'>
                <div className='d-flex justify-content-between mb-3'>
                    <h2 className='mb-3'>Employee Table</h2>
                    <button type="button" onClick={() => setShowModal(true)} className="btn btn-primary">
                        Add new Employee
                    </button>
                </div>
                {showModal && (
                    <div className="modal fade show d-block">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5">Employee Form</h1>
                                    <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                                </div>
                                <div className="modal-body">
                                    <input type='text' className='form-control' placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                                    <input type='text' className='form-control mt-2' placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                                    <input type="email" className="form-control mt-2" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    <input type="password" className="form-control mt-3" placeholder='Your password' value={password} onChange={(e) => setPassword(e.target.value)} />
                                    <input type="text" className="form-control mt-3" placeholder="Your address" value={address} onChange={(e) => setAddress(e.target.value)} />
                                    <input type="text" className="form-control mt-3" placeholder='Your city' value={city} onChange={(e) => setCity(e.target.value)} />
                                    <input type="text" className="form-control mt-3" placeholder='Your gender' value={gender} onChange={(e) => setGender(e.target.value)} />
                                    <input type="text" className="form-control mt-3" placeholder='Your zip' value={zip} onChange={(e) => setZip(e.target.value)} />
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
                                    <button type="button" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className='container'>
                <table className='table table-bordered table-striped'>
                    <thead className='table-dark'>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Address</th>
                            <th>City</th>
                            <th>Gender</th>
                            <th>Zip Code</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((item, index) => (
                            <tr key={index}>
                                <td>{item.firstName}</td>
                                <td>{item.lastName}</td>
                                <td>{item.email}</td>
                                <td>{item.password}</td>
                                <td>{item.address}</td>
                                <td>{item.city}</td>
                                <td>{item.gender}</td>
                                <td>{item.zip}</td>
                                <td className='d-flex justify-content-evenly'>
                                    <CiEdit color='green' size={20} onClick={() => handleEdit(index)} />
                                    <MdDelete color='red' size={20} onClick={() => handleDelete(index)} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Emp;
