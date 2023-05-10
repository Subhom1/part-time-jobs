import { useState } from 'react';

export default function FormPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    educationQualification: '',
    workExperience: '',
    address: '',
    emailAddress: '',
    file: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="container">
      <h1 className='text-4xl my-5'>User Information</h1>
      <form onSubmit={handleSubmit} className="form-container">
      <div className="form-row">
      <div className="form-group form-names">
        <input className='form-input'
            type="text"
            id="firstName"
            name="firstName"
            placeholder='First Name'
            value={formData.firstName}
            onChange={handleChange}
            required
        />
        </div>
        <div className="form-group form-names">
        <input className='form-input'
            type="text"
            id="lastName"
            name="lastName"
            placeholder='Last Name'
            value={formData.lastName}
            onChange={handleChange}
            required
        />
        </div>
    </div>
    <div className="form-group">
        <input className='form-input'
            type="email"
            name="emailAddress"
            id="emailAddress"
            placeholder='Email Address'
            value={formData.emailAddress}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input className='form-input'
            type="text"
            name="educationQualification"
            id="educationQualification"
            placeholder='Education Qualification'
            value={formData.educationQualification}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input className='form-input'
            type="text"
            name="workExperience"
            id="workExperience"
            placeholder='Work Experience'
            value={formData.workExperience}
            onChange={handleChange}
          />
        </div>
        
        <div className="form-group">
          <input className='form-input'
            type="text"
            name="address"
            id="address"
            placeholder='Address'
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label className='text-black ml-3 mb-2'>Upload your CV</label>
          <input className='form-input' accept='.pdf' 
            type="file"
            name="file"
            id="file"
            value={formData.file}
            onChange={handleChange}
          />
        </div>
        <div className='flex'> 
        <button onClick={() => history.back()} className='submit-button'>Home</button>
        <button className='submit-button' type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
