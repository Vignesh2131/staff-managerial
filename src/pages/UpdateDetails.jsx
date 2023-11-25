import { collection, doc, getDoc ,updateDoc} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { db } from "../firebaseconfig";
import { useNavigate } from "react-router-dom";
const UpdateDetails = () => {

    const navigate = useNavigate();
    let { id } = useParams();
    const collectionRef = collection(db, "userData");
    const docRef = doc(collectionRef, id);
    const [info, setInfo] = useState([]);
     const [newData, setNewData] = useState({
       name: "",
       age: "",
       gender: "",
       qualification: "",
       email: "",
       jobRole: "",
       contact: "",
     });
    
    useEffect(() => {
      const getDocument = async () => {
        try {
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const data = docSnap.data();
            setInfo(data);
          } else {
            alert("No record found");
          }
        } catch (error) {
          console.error("Error getting document:", error.message);
        }
      };
      getDocument();
    }, [id]);

    const updateUser = async (e) => {
      e.preventDefault();
      try {
        const updatedData = {
          name: newData.name,
          age: newData.age,
          gender: newData.gender,
          qualification: newData.qualification,
          email: newData.email,
          jobRole: newData.jobRole,
          contact: newData.contact,
        };
        await updateDoc(docRef, updatedData);
        navigate("/");
        alert("employee details have been updated")
      } catch (error) {
        console.error("Error updating document:", error.message);
      }
    };
  const handleInputChange = (e) => {
    // Update the 'newData' state when input values change
    setNewData({
      ...newData,
      [e.target.name]: e.target.value,
    });
    };
    
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
            value={newData.name}
            onChange={handleInputChange}
            placeholder={info.name}
            
     
          />
        </label>
        <br />
        <label>
          Age:
          <input
            className="shadow appearance-none border rounded w-200 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            name="age"
            value={newData.age}
            onChange={handleInputChange}
            placeholder={info.age}          />
        </label>
        <br />
        <label>
          Gender:
          <input
            className="shadow appearance-none border rounded w-200 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="gender"
            value={newData.gender}
                      onChange={handleInputChange}
                      placeholder={info.gender}
      
          />
        </label>
        <br />
        <label>
          Qualification:
          <input
            className="shadow appearance-none border rounded w-200 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="qualification"
            value={newData.qualification}
                      onChange={handleInputChange}
                      placeholder={info.qualification}
           
          />
        </label>
        <br />
        <label>
          Email:
          <input
            className="shadow appearance-none border rounded w-200 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            name="email"
            value={newData.email}
                      onChange={handleInputChange}
                      placeholder={info.email}
          
          />
        </label>
        <br />
        <label>
          Job Role:
          <input
            className="shadow appearance-none border rounded w-200 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="jobRole"
            value={newData.jobRole}
                      onChange={handleInputChange}
                      placeholder={info.jobRole}
          />
        </label>
        <br />
        <label>
          Contact Number:
          <input
            className="shadow appearance-none border rounded w-200 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="contact"
            type="tel"
            value={newData.contact}
                      onChange={handleInputChange}
                      placeholder={info.contact}
           
          />
        </label>
        <br />
              <button
                  type="submit"
                  className=" bg-blue-500 shadow-lg shadow-blue-500/50 rounded-md text-white p-2"
                  onClick={updateUser}
       
        >Update the Details
        </button>
      </form>
    </div>
  );
}

export default UpdateDetails