import React, { useState } from 'react';
import DisplayDetails from './DisplayDetails';
import './Style.css';

const InputForm = () => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [studentDetails, setStudentDetails] = useState([]);

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const student = {
      id: Date.now(),
      name,
      mobile,
      address,
    };
    setStudentDetails((prev) => [...prev, student]);

    setName('');
    setMobile('');
    setAddress('');
    setEditingId(null);
  };

  const editButtonHandler = (student) => {
    setEditingId(student.id);
    setName(student.name);
    setMobile(student.mobile);
    setAddress(student.address);
    deleteButtonHandler(student);
  };

  const deleteButtonHandler = (student) => {
    setStudentDetails((prev) => {
      return prev.filter((data) => {
        return data.id != student.id;
      });
    });
  };

  return (
    <>
      <h1>Students Details Manager</h1>
      <h2>Total Students : {studentDetails.length}</h2>
      <div className="form-container">
        <form onSubmit={formSubmitHandler}>
          <label htmlFor="name">Name :</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label htmlFor="mbl">Mobile :</label>
          <input
            id="mbl"
            type="tel"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            maxLength={10}
            minLength={10}
            required
          />
          <label htmlFor="address">Address :</label>
          <input
            id="address"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
          <button type="submit">{editingId ? 'Update' : 'Add'}</button>
        </form>
      </div>
      <DisplayDetails
        studentDetails={studentDetails}
        editButtonHandler={editButtonHandler}
        deleteButtonHandler={deleteButtonHandler}
      />
    </>
  );
};

export default InputForm;
