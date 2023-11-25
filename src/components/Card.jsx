import {Link } from "react-router-dom";
const Card = ({ data }) => {

  return (
    <div className="flex justify-between items-center bg-blue-500 shadow-lg shadow-blue-500/50 rounded-md text-white p-4">
      <div>
        <h1 className="font-semibold">Name : {data.name}</h1>
        <h2>Job role : {data.jobRole}</h2>
        <h3>Qualification : {data.qualification}</h3>
          </div>
          <div>
        <Link
          to={`/more-info/${data.id}`}
          data={data}
          className="bg-white rounded-md text-black px-2 py-1 shadow-md">More info</Link>
      </div>
    </div>
  );
}

export default Card