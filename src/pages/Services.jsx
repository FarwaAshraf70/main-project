import React, { useState } from "react";
const Services = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [secondAddress, setSecondAddress] = useState('');
  const [city, setCity] = useState('');
  const [selectOption, setSelectOption] = useState('')
  const [gender, setGender] = useState()
  const [checkbox, setCheckbox] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState('')
  const [zip ,setZip]=useState()


  const handleFirstName = ((e) => {
    console.log("Event", e.target.value);
    setFirstName(e.target.value);
  });
  const handleLastName = ((e) => {
    console.log("event", e.target.value)
    setLastName(e.target.value)
  })
  const enterEmail = ((e) => {
    console.log("event", e.target.value)
    setEmail(e.target.value)
  })
  const enterPassword = ((e) => {
    console.log("event", e.target.value)
    setPassword(e.target.value)
  })
  const enterAddress = ((e) => {
    console.log("event", e.target.value)
    setAddress(e.target.value)
  })
  const SecondAddress = ((e) => {
    console.log("event", e.target.value)
    setSecondAddress(e.target.value)
  })
  const enterCity = ((e) => {
    console.log("event", e.target.value)
    setCity(e.target.value)
  })
  const selectAnyOption = ((e) => {
    console.log("select", e.target.value)
    setSelectOption(e.target.value)
  })
  const optionData = [
    { option: 'jhang' },
    { option: 'lahore' },
    { option: 'islamabad' },
    { option: 'rawalpindi' },

  ]

  const radioChange = ((e) => {
    console.log("value", e.target.value)
    setGender(e.target.value)
  })
  const handleCheckBox = ((e) => {
    console.log("checkbox", checkbox)
    setCheckbox(!checkbox)
  })
  const formSubmit = (e) => {
    e.preventDefault()
    if (checkbox) {
      alert("submitted succesfully")
      alert("Name: " + firstName + " " + "lastName:" + lastName + " " + "email:" + email + " " + "password" + password)
    } else {
      alert("please fill the checkbox")
    }
  }
  const enterZipCode=((e)=>{
    console.log("event", e.target.value)
    setZip(e.target.value)

  })
  const resetMyForm =((e)=>{
    e.preventDefault()
    setFirstName("")
    setLastName("")
    setEmail("")
    setPassword("")
    setAddress("")
    setSecondAddress("")
    setCity("")
    setZip("")
    setSelectOption("")
    setGender("")
    setCheckbox(false)
    setFormSubmitted("")
  })
   
   
  
  return (
    <>
      <div className='container'>
        <form className="row g-3" onSubmit={formSubmit}>
          <div className="col-md-6">
            <label htmlFor="labelForFirstName" className="form-label">First Name</label>
            <input type="text" className="form-control" value={firstName} onChange={handleFirstName} placeholder="First name" aria-label="First name" id="labelForFirstName" />
          </div>

          <div className="col-md-6">
            <label htmlFor="labelForLastName" className="form-label">Last Name</label>
            <input type="text" className="form-control" value={lastName} onChange={handleLastName} placeholder="Last name" aria-label="Last name" id="labelForLastName" />
          </div>

          <div className="col-md-6">
            <label htmlFor="inputEmail" className="form-label">Email</label>
            <input type="email" className="form-control" value={email} onChange={enterEmail} id="inputEmail" />
          </div>

          <div className="col-md-6">
            <label htmlFor="inputPassword" className="form-label">Password</label>
            <input type="password" className="form-control" value={password} onChange={enterPassword} id="inputPassword" />
          </div>

          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">Address</label>
            <input type="text" className="form-control" value={address} onChange={enterAddress} id="inputAddress" placeholder="1234 Main St" />
          </div>

          <div className="col-12">
            <label htmlFor="inputAddress2" className="form-label">Address 2</label>
            <input type="text" className="form-control" value={secondAddress} onChange={SecondAddress} id="inputAddress2" placeholder="Apartment, studio, or floor" />
          </div>

          <div className="col-md-6">
            <label htmlFor="inputCity" className="form-label">City</label>
            <input type="text" className="form-control" value={city} onChange={enterCity} id="inputCity" />
          </div>

          <div className="col-md-4">
            <label htmlFor="inputState" className="form-label">State</label>
            <select id="inputState" className="form-select" value={selectOption} onChange={selectAnyOption} defaultValue="">
              <option>select</option>
              {optionData.map((item, index) => {
                return (
                  <>
                    <option key={index} value={item.option}>{item.option}</option>
                  </>
                )
              })}

            </select>
          </div>

          <div className="col-md-2">
            <label htmlFor="inputZip" className="form-label" >Zip</label>
            <input type="text" className="form-control" id="inputZip" value={zip} onChange={enterZipCode} />
          </div>
          <div className='col-12'>
            <div className="form-check-label ">
              <label className="form-check-label me-3" for="flexRadioDefault1">
                Gender:
              </label>
              <input className="form-check-input me-3 " type="radio" name="gender" id="flexRadioDefault1 " value="female"  onChange={radioChange}  checked={gender == "female" ? true : false} />
              <label className="form-check-label  " for="flexRadioDefault1" >
                Female
              </label>
              <input className="form-check-input ms-3 " type="radio" name="gender" id="flexRadioDefault2" onChange={radioChange} value="male" checked={gender == "male" ? true : false} />
              <label className="form-check-label ms-3" for="flexRadioDefault2">
                Male
              </label>
            </div>
          </div>

          <div className="col-12">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="gridCheck" checked={checkbox} onChange={handleCheckBox} />
              <label className="form-check-label" htmlFor="gridCheck">
                Check me out
              </label>
            </div>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">Sign in</button>
            <button className="btn btn-primary ms-3" onClick={resetMyForm}>Reset</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Services;
