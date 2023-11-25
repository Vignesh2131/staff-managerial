import { useState } from "react"
import { collection, addDoc } from 'firebase/firestore'
import { db } from "../firebaseconfig";
import { useNavigate } from "react-router-dom";
const AddEmployee = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    age: "",
    gender: "",
    qualification: "",
    email: "",
    jobRole: "",
    contact:"",
  });
  const dbRef = collection(db,'userData')
  let name, value;
  const postUserData = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUserData({ ...userData, [name]: value });
  }
  //Connection to db
  const submitData = async (e) => {
    e.preventDefault();
    try {
      await addDoc(dbRef, userData);
      alert("Data is added")
      navigate("/")
    }
    catch (error) {
      alert("Add the data properly")
    }
  }

  return (
    <div>
      <form
        method="POST"
        className="p-4 flex justify-center items-start flex-col"
      >
        <label className="">
          Name: 
          <input
            className="shadow appearance-none border rounded w-200 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="name"
            value={userData.name}
            onChange={postUserData}
            placeholder="Enter the full Name"
          />
        </label>
        <br />
        <label>
          Age:
          <input
            className="shadow appearance-none border rounded w-200 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            name="age"
            value={userData.age}
            onChange={postUserData}
            placeholder="Enter your age"
          />
        </label>
        <br />
        <label>
          Gender:
          <input
            className="shadow appearance-none border rounded w-200 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="gender"
            value={userData.gender}
            onChange={postUserData}
            placeholder="Male/Female/Other"
          />
        </label>
        <br />
        <label>
          Qualification:
          <input
            className="shadow appearance-none border rounded w-200 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="qualification"
            value={userData.qualification}
            onChange={postUserData}
            placeholder="Enter the domain as well"
          />
        </label>
        <br />
        <label>
          Email:
          <input
            className="shadow appearance-none border rounded w-200 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            name="email"
            value={userData.email}
            onChange={postUserData}
            placeholder="Work mail"
          />
        </label>
        <br />
        <label>
          Job Role:
          <input
            className="shadow appearance-none border rounded w-200 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="jobRole"
            value={userData.jobRole}
            onChange={postUserData}
            placeholder="Enter your role"
          />
        </label>
        <br />
        <label>
          Contact Number:
          <input
            className="shadow appearance-none border rounded w-200 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="contact"
            type="tel"
            value={userData.contact}
            onChange={postUserData}
            placeholder="Phone number"
          />
        </label>
        <br />
        <button
          className=" bg-blue-500 shadow-lg shadow-blue-500/50 rounded-md text-white p-4"
          type="submit"
          onClick={(e) => submitData(e)}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddEmployee