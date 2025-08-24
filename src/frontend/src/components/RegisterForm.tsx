import React, { useState } from 'react';
import axios from 'axios';

interface RegistrationFormData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

const RegisterForm: React.FC = () => {
  const [formData, setFormData] = useState<RegistrationFormData>({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  });
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', formData);
      if (response.data.token) {
        setSuccess(true);
        // Clear form
        setFormData({
          email: '',
          password: '',
          firstName: '',
          lastName: '',
        });
      }
    } catch (err: any) {
      setError(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="register-form">
      <h2>Register</h2>
      {error && <div className="error-message">{error}</div>}
      {success && <div className="success-message">Registration successful!</div>}
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            minLength={8}
          />
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
