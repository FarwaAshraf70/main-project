import React, { useState } from 'react'
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";

const student = () => {
    const [showModal, setShowModal] = useState(false)
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [gender, setGender] = useState('');
    const [zip, setZip] = useState('');
    const [studentData, setAllStudentData] = useState([]);
    const [editIndex, setEditIndex] = useState(null);

    const showMyModal = () => {
        // console.log("event", e.target.value)
        setShowModal(true)
    }
    const closeMyModal = () => {
        setShowModal(false)
    }
    const handleFirstName = ((e) => {
        console.log("event", e.target.value)
        setFirstName(e.target.value)
    })

    const handleLastName = ((e) => {
        console.log("event", e.target.value)
        setLastName(e.target.value)
    })

    const handleEmail = ((e) => {
        console.log("event", e.target.value)
        setEmail(e.target.value)
    })

    const handlePassword = ((e) => {
        console.log("event", e.target.value)
        setPassword(e.target.value)
    })

    const handleAddress = ((e) => {
        console.log("event", e.target.value)
        setAddress(e.target.value)
    })

    const handleCity = ((e) => {
        console.log("event", e.target.value)
        setCity(e.target.value)
    })

    const handleGender = ((e) => {
        console.log("event", e.target.value)
        setGender(e.target.value)
    })

    const handleZip = ((e) => {
        console.log("event", e.target.value)
        setZip(e.target.value)
    })
    const submitMyForm = (e) => {
        e.preventDefault()
        const newStudentData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            address: address,
            city: city,
            gender: gender,
            zip: zip,
        }

        if (editIndex !== null) {
            const updatedData = [...studentData]
            updatedData[editIndex] = newStudentData;
            setAllStudentData(updatedData);
        } else {
            setAllStudentData([...studentData, newStudentData]);
        }


        // setAllStudentData([...studentData, newStudentData])
       
            setFirstName('');
            setLastName('');
            setEmail('');
            setPassword('');
            setAddress('');
            setCity('');
            setGender('');
            setZip('');
            setShowModal(false);
            setEditIndex(null);
        }
        
    }
    const deleteForm = (index) => {
        setAllStudentData(studentData.filter((_, i) => i !== index));
    };
    const editForm = (index) => {
        const stu = studentData[index]
        setFirstName(stu.firstName);
        setLastName(stu.lastName);
        setEmail(stu.email);
        setPassword(stu.password);
        setAddress(stu.address);
        setCity(stu.city);
        setGender(stu.gender);
        setZip(stu.zip);
        setShowModal(true);
        setEditIndex(index)
    }




    return (
        <>
            <div className='container'>
                <div className='d-flex justify-content-between'>
                    <h2>Student Data</h2>
                    <button type="button" className="btn btn-primary" onClick={showMyModal}>
                        Launch demo modal
                    </button>
                </div>
                {/* Modal */}
                {showModal ? (
                    <div className="modal show d-block">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <input type='text' placeholder='First Name' className='form-control' onChange={handleFirstName} value={firstName} />

                                    <input type='text' placeholder='Last Name' className='form-control mt-3' onChange={handleLastName} value={lastName} />

                                    <input type='email' placeholder='Enter your Email' className='form-control mt-3' onChange={handleEmail} value={email} />

                                    <input type='password' placeholder='Enter Your password ' className='form-control mt-3' onChange={handlePassword} value={password} />

                                    <input type='text' placeholder='Your address ' className='form-control mt-3' onChange={handleAddress} value={address} />

                                    <input type='text' placeholder='city Name ' className='form-control mt-3' onChange={handleCity} value={city} />

                                    <input type='text' placeholder='Gender ' className='form-control mt-3' onChange={handleGender} value={gender} />

                                    <input type='number' placeholder='zip ' className='form-control mt-3' onChange={handleZip} value={zip} />
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" onClick={closeMyModal}>Close</button>
                                    <button type="button" className="btn btn-primary" onClick={submitMyForm}>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>
            <div className='container'>
                <table className='table table-bordered table-striped '>
                    <thead className='table-dark'>
                        <tr>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>City</th>
                            <th>Gender</th>
                            <th>Zip</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {studentData.map((student, index) => (
                            <tr key={index}>
                                <td>{student.firstName}</td>
                                <td>{student.lastName}</td>
                                <td>{student.email}</td>
                                <td>{student.password}</td>
                                <td>{student.city}</td>
                                <td>{student.gender}</td>
                                <td>{student.zip}</td>
                                <td className='d-flex justify-content-evenly'>
                                    <CiEdit color='green' size={20} onClick={() => editForm(index)} />
                                    <MdDelete color='red' size={20} onClick={() => deleteForm(index)} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </>

    )
}

export default student
