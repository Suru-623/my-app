import React from 'react'

const ArrayListing = () => {
    //const emp=["s1","s2","s3","s4",]
    const empInfo=[
{name:"rina",email:"suruchi@gmail.com",contact:1333333},
{name:"tina",email:"tina@gmail.com",contact:1333333},
{name:"mina",email:"mina@gmail.com",contact:1333333},
{name:"lina",email:"lina@gmail.com",contact:1333333}
    ]
  return (
<>
    <div>ArrayListing</div>
    <table border={1}>
        {
empInfo.map((emp)=>
    <tr key={emp.email}>
        <td>{emp.name}</td>
        <td>{emp.email}</td>
        <td>{emp.contact}</td>
    </tr>
)
        }
    </table>

    </>
  )
}

export default ArrayListing