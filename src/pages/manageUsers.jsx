import AuthLayout from "../components/Layouts/authLayouts.jsx"
import ManageUserPage from "../components/Fragments/manageUser.jsx";

const ManageUser = () => {
  return (
      <AuthLayout>
        <ManageUserPage/>
      </AuthLayout>
  )
}

export default ManageUser
