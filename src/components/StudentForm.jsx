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
    const [result, setresult] = useState(null);
    const [student, setStudent] = useState({ name: '',  tagline: '', details: '' });

    const handlestudent = (event) =>{
        setStudent({...student, [event.target.name] : event.target.value});
    }

    const handelsubmit = (event) =>{
        event.preventDefault();
        fetch('url', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({table: "tblbrands", key: 'afnan', data: student})
          })
          .then(response => { return response.json()})
          .then(data => {
                console.log(data);
                setStudent({ name: '',  tagline: '', details: '' });
            })
    }

 // console.log(student);


  return (
    <div>
        <h1>Student Registration</h1>
        <form onSubmit={handelsubmit}>
            <input type="text" value={student.sname} onChange={handlestudent} name='name'   />
            <input type="text" value={student.sage} onChange={handlestudent} name='tagline'   />
            <input type="text" value={student.sage} onChange={handlestudent} name='details'   />
            <input type='submit' value="Save" />
        </form>
        {result}
    </div>
  )
}

export default StudentForm