
import { collection, getDocs } from "firebase/firestore";
import { useParams } from 'react-router-dom';
import { useEffect,useState } from 'react';
import { db } from '../firebaseconfig';
import Card from '../components/Card';
import uuid from "react-uuid";
const Home = () => {
  const url = useParams();
  const [staffpep, setStaffpep] = useState([]);
  const colRef = collection(db, "userData");
  
   useEffect(() => {
    getDocs(colRef)
      .then((snapshot) => {
        let staff = [];
        snapshot.docs.forEach((doc) => {
          staff.push({ ...doc.data(), id: doc.id });
          setStaffpep(staff)
        });
      })
      .catch((err) => {
        alert(err.message);
      });
   }, [url])
  return (
    <div className="flex flex-col gap-3 mx-3 my-4">
      {staffpep.map((entry) => {
        return <Card data={entry} key={entry.id} />;
      })}
    </div>
  );
}

export default Home