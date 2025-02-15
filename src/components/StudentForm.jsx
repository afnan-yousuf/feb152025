import React, { useState } from 'react'

function StudentForm() {

// const [sname, setSname] = useState('');
// const [sage, setSage] = useState(0);


//   const handlesname = (event) =>{
//     setSname(event.target.value);
//   }
//   const handlesage = (event) =>{
//     setSage(event.target.value);
//   }

    const [student, setStudent] = useState({ sname: '', sage: 0, scountry: '' });

    const handlestudent = (event) =>{
        setStudent({...student, [event.target.name] : event.target.value});
    }

    const handelsubmit = (event) =>{
        event.preventDefault();
    }

  console.log(student);


  return (
    <div>
        <h1>Student Registration</h1>
        <form onSubmit={handelsubmit}>
            <input type="text" value={student.sname} onChange={handlestudent} name='sname'   />
            <input type="number" value={student.sage} onChange={handlestudent} name='sage'   />
            <select name='scountry' onChange={handlestudent}>
                <option value='PK'>Pakistan</option>
                <option value='IND'>India</option>
            </select>
            <input type='submit' value="Save" />
        </form>

    </div>
  )
}

export default StudentForm