import {Fragment, useMemo, useState} from "react"
import Navbar from "./navbar.jsx"
import "./styles/manageUser.css"

const ManageUserPage = () => {

  const [formState, setFormState] = useState({
    fullName: '',
    email: '',
    password: '',
    role: ''
  });

  const setHandleFormChange = (event) => {
    const newFormState = {
      ...formState,
      [event.target.name]: event.target.value,
    };
    setFormState(newFormState);
  };

  const isDisabled = useMemo(() => {
    return formState.email === '' || formState.password === '' || formState.fullName === '' || formState.role === '';
  }, [formState]);

  return (
      <Fragment>
        <Navbar/>
        <h1>User Manager</h1>
        <div className="top">
          <div className="search-bar">
            <form onSubmit={(event) => {
              event.preventDefault();
            }} role="search">
              <label htmlFor="search">Search for stuff</label>
              <input id="search" type="search" placeholder="Search..." autoFocus required/>
              <button type="submit">Go</button>
            </form>
          </div>
          <button className="add-button" onClick={() => document.getElementById('add-user-popup').showModal()}>Add User</button>
        </div>
        <dialog id="add-user-popup">
          <form method="dialog">
            <h2>Add User</h2>
            <label htmlFor="fullName">Full Name</label>
            <input onChange={setHandleFormChange} id="fullName" name="fullName" type="text" required/>

            <label htmlFor="email">Email</label>
            <input onChange={setHandleFormChange} id="email" name="email" type="email" required/>

            <label htmlFor="password">Password</label>
            <input onChange={setHandleFormChange} id="password" name="password" type="password" required/>

            <label htmlFor="role">Role</label>
            <input onChange={setHandleFormChange} id="role" name="role" type="text" required/>

            <button type="submit" disabled={isDisabled}>Submit</button>
            <button aria-label="close" className="cancel-button" onClick={() => document.getElementById('add-user-popup').close()}>❌</button>
          </form>
        </dialog>
        <table>
          <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Role Code</th>
            <th>Action</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td data-title="Provider Name">Iacob Geaorgescu</td>
            <td data-title="E-mail">e-mail@test-email.com</td>
            <td>STF</td>
            <td className="select"><a href="#" className="button">Select</a></td>
          </tr>
          <tr>
            <td data-title="Provider Name">Julius Neumann</td>
            <td data-title="E-mail">e-mail@test-email.com</td>
            <td className="select">STF</td>
            <td className="select"><a href="#" className="button">Select</a></td>
          </tr>
          <tr>
            <td data-title="Provider Name">Christoph Koller</td>
            <td data-title="E-mail">e-mail@test-email.com</td>
            <td className="select">STF</td>
            <td className="select"><a href="#" className="button">Select</a></td>
          </tr>
          <tr>
            <td data-title="Provider Name">Bram Lemmens</td>
            <td data-title="E-mail">e-mail@test-email.com</td>
            <td className="select">STF</td>
            <td className="select"><a href="#" className="button">Select</a></td>
          </tr>
          </tbody>
        </table>
      </Fragment>
  )
}

export default ManageUserPage