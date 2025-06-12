import { useState } from 'react';

const InputForm = () => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');
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
  };

  const editButtonHandler = (student) => {
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
    <div>
      <h1>Students Manager</h1>
      <h2>Total Students :{studentDetails.length}</h2>

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
        <button type="submit">Add</button>
      </form>

      <div>
        <h2>All Students</h2>
        {studentDetails.map((student) => {
          return (
            <li key={student.id}>
              {student.name} {student.mobile} {student.address}
              <button onClick={() => editButtonHandler(student)}>Edit</button>
              <button onClick={() => deleteButtonHandler(student)}>
                Delete
              </button>
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default InputForm;
