import {Link} from "react-router-dom"
const Navbar = () => {
    return (
      <div className="bg-teal-600 p-4 flex justify-between">
        <h1 className="font-bold">Staff Managerial</h1>
        <div className="flex gap-3 items-center">
          <Link to="/" className="hover:text-amber-200">Home</Link>
          <Link to="/add-employee" className="hover:text-amber-200">Add Employee</Link>
        </div>
      </div>
    );
}

export default Navbar