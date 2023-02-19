
import React, { useState,useEffect} from 'react';
const NewTable = () => {
    const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    address: '',
    city: '',
    state: '',
    zip: '',
  });

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Do something with the form data here
  };

  return (
   
 <div className="w-full max-w-xl mx-auto">
      <form onSubmit={handleFormSubmit}>
        {step === 1 && (
          <>
            <h1 className="text-3xl font-bold mb-4">Step 1: Personal Information</h1>
            <div className="mb-4">
              <label className="block font-bold mb-2" htmlFor="firstName">
                First Name:
              </label>
              <input
                className="w-full px-3 py-2 rounded border"
                type="text"
                id="firstName"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              />
            </div>
            <div className="mb-4">
              <label className="block font-bold mb-2" htmlFor="lastName">
                Last Name:
              </label>
              <input
                className="w-full px-3 py-2 rounded border"
                type="text"
                id="lastName"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              />
            </div>
            <div className="mb-4">
              <label className="block font-bold mb-2" htmlFor="email">
                Email:
              </label>
              <input
                className="w-full px-3 py-2 rounded border"
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div className="mb-4">
              <label className="block font-bold mb-2" htmlFor="password">
                Password:
              </label>
              <input
                className="w-full px-3 py-2 rounded border"
                type="password"
                id="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </div>
            <div className="mb-4">
              <label className="block font-bold mb-2" htmlFor="confirmPassword">
                Confirm Password:
              </label>
              <input
                className="w-full px-3 py-2 rounded border"
                type="password"
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              />
            </div>
            <div className="flex justify-end">
              <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleNextStep}>
                Next
              </button>
           
            </div>
          </>
        )}


{step === 2 && (
          <>
            <h1 className="text-3xl font-bold mb-4">Step 2: Personal Information</h1>
            <div className="mb-4">
              <label className="block font-bold mb-2" htmlFor="firstName">
                First Name:
              </label>
              <input
                className="w-full px-3 py-2 rounded border"
                type="text"
                id="firstName"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              />
            </div>
            <div className="mb-4">
              <label className="block font-bold mb-2" htmlFor="lastName">
                Last Name:
              </label>
              <input
                className="w-full px-3 py-2 rounded border"
                type="text"
                id="lastName"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              />
            </div>
            <div className="mb-4">
              <label className="block font-bold mb-2" htmlFor="email">
                Email:
              </label>
              <input
                className="w-full px-3 py-2 rounded border"
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div className="mb-4">
              <label className="block font-bold mb-2" htmlFor="password">
                Password:
              </label>
              <input
                className="w-full px-3 py-2 rounded border"
                type="password"
                id="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </div>
            <div className="mb-4">
              <label className="block font-bold mb-2" htmlFor="confirmPassword">
                Confirm Password:
              </label>
              <input
                className="w-full px-3 py-2 rounded border"
                type="password"
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              />
            </div>
            <div className="flex justify-end">
              <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleNextStep}>
                Next
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handlePreviousStep}>
                previous
              </button>

            </div>
          </>
        )}



{step === 3 && (
          <>
            <h1 className="text-3xl font-bold mb-4">Step 3: Personal Information</h1>
            <div className="mb-4">
              <label className="block font-bold mb-2" htmlFor="firstName">
                First Name:
              </label>
              <input
                className="w-full px-3 py-2 rounded border"
                type="text"
                id="firstName"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              />
            </div>
            <div className="mb-4">
              <label className="block font-bold mb-2" htmlFor="lastName">
                Last Name:
              </label>
              <input
                className="w-full px-3 py-2 rounded border"
                type="text"
                id="lastName"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              />
            </div>
            <div className="mb-4">
              <label className="block font-bold mb-2" htmlFor="email">
                Email:
              </label>
              <input
                className="w-full px-3 py-2 rounded border"
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div className="mb-4">
              <label className="block font-bold mb-2" htmlFor="password">
                Password:
              </label>
              <input
                className="w-full px-3 py-2 rounded border"
                type="password"
                id="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </div>
            <div className="mb-4">
              <label className="block font-bold mb-2" htmlFor="confirmPassword">
                Confirm Password:
              </label>
              <input
                className="w-full px-3 py-2 rounded border"
                type="password"
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              />
            </div>
            <div className="flex justify-end">
              <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleNextStep}>
                Next
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handlePreviousStep}>
                previous
              </button>

            </div>
          </>
        )}



        
</form>
   </div>
  )
}

export default NewTable