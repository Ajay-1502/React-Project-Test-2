import './Style.css';

const DisplayDetails = (props) => {
  return (
    <>
      <h2>All Students Details</h2>
      {props.studentDetails.map((student) => {
        return (
          <li key={student.id} className="student-row">
            <div className="student-info">
              <span>{student.name}</span>
              <span>{student.mobile}</span>
              <span>{student.address}</span>
            </div>
            <div className="button-group">
              <button onClick={() => props.editButtonHandler(student)}>
                Edit
              </button>
              <button onClick={() => props.deleteButtonHandler(student)}>
                Delete
              </button>
            </div>
          </li>
        );
      })}
    </>
  );
};

export default DisplayDetails;
