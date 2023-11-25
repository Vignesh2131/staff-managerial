import { useParams } from "react-router-dom"
import { db } from "../firebaseconfig";
import { collection, doc, getDoc } from "firebase/firestore";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const MoreInfo = () => {
 let { id } = useParams();
 if (!id) {
   // Handle the case where userId is not available
   return <div>No userId provided</div>;
 }

 const collectionRef = collection(db, "userData");
 const docRef = doc(collectionRef, id);
 const [info, setInfo] = useState([]);

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

  return (
    <div className="p-4 flex justify-around gap-2 md:flex-col">
      <div className="bg-gray-200 p-3 rounded-md w-full flex flex-col gap-2">
        <h1 className="font-bold text-2xl">Name : {info.name}</h1>
        <h2 className="font-semibold text-xl">Job role : {info.jobRole}</h2>
        <h3 className="font-semibold text-xl">
          Qualification : {info.qualification}
        </h3>
        <h4 className="font-semibold text-xl">Email : {info.email}</h4>
      </div>
      <div className="flex flex-col bg-gray-200 p-3 rounded-md w-full gap-2">
        <p className="font-semibold text-xl">Age : {info.age}</p>
        <p className="font-semibold text-xl">Gender : {info.gender}</p>
        <p className="font-semibold text-xl">Contact : {info.contact}</p>
        <Link to={`/update-details/${id}`} className=" bg-blue-500 shadow-lg shadow-blue-500/50 rounded-md text-white py-1 mt-2 px-3 w-1/3 text-center">
          Update
        </Link>
      </div>
    </div>
  );
}

export default MoreInfo