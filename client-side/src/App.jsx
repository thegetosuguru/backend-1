import { useEffect } from "react"
import { useState } from "react"

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  const handleAddUser = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email }
    console.log(user);
    fetch('http://localhost:5000/users',{
      method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      const newUsers = [...users, data]
      setUsers(newUsers)
      form.reset();
    })
  }

  return (
    <div className="flex flex-col w-full h-fit justify-center items-center">
      <h1>User Managements system</h1>
      <h3>Number of users: {users.length}</h3>
      <form onSubmit={handleAddUser} className="flex flex-col items-center">
        <input className="border-white border-2 p-3 rounded-lg bg-blue-400 text-white font-semibold" type="text" name="name" id="" />
        <br />
        <input className="border-white border-2 p-3 rounded-lg bg-blue-400 text-white font-semibold" type="email" name="email" id="" />
        <br />
        <input className="border-white border-2 p-3 w-full rounded-lg bg-blue-400 text-white font-bold" type="submit" value="Add User" />
      </form>
      <div className="flex flex-col w-[60%] h-fit gap-5 border-2 px-10 py-20">
        {
          users.map(user => <p className="bg-amber-100 text-black p-5 rounded-xl" key={user.id} >{user.id} <br />{user.name} <br /> {user.email}</p>)
        }
      </div>
    </div>
  )
}

export default App
