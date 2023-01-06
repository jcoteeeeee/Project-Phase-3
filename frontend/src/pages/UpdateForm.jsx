// const UpdateForm = () => {
//     const handleSubmit = async (e) => {
//         e.preventDefault()
//         let req = await fetch(`http://localhost:3000/artists/${artist.id}`, {
//             method: "PATCH",
//             headers: { 'Content-Type': 'application/json'},
//             body: JSON.stringify({ 
//                 firstname: e.target.firstname.value,
//                 lastname: e.target.lastname.value,
//                 email: e.target.email.value
//             })
//         })
//     }

//     return(
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <label/>First Name: <label/>
//                 <input type="text" name="firstname"/>
//                 <break/>
//                 <label>Last Name: </label>
//                 <input type="text" name="lastname"/>
//                 <break/>
//                 <label>Email: </label>
//                 <input type="email" name="email"/>
//                 <button type="submit">Submit</button>
//             </form>
//         </div>
//     )
// }

// export default UpdateForm