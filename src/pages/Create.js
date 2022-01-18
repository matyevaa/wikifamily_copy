import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';


const Create = () => {

  const [dataDB, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async() => {
    const result = await axios (`/api1/create`, {
      headers: { 'Content-Type': 'application/json'}
    })
    .catch(err => console.log(err));
    console.log("getData: " + result);
    setData(result.data);
  };
  console.log("Get Data:", dataDB);

  const getIndividual = async(individual_id) => {
    const result = await axios (`/api1/create/${individual_id}`, {
      headers: { 'Content-Type': 'application/json'}
    })
    .catch(err => console.log(err));
    console.log("getData: " + result);
  };

  const delData = async(individual_id) => {
    console.log("In Delete, individual_id is ", individual_id);
    await axios.delete (`http://localhost:5000/api1/delete/${individual_id}`, {
      headers: { 'Content-Type': 'application/json'}
    })
    .catch(err => console.log(err));
    getData();
  };

  const updateData = async(individual_id) => {
    console.log("In Update, individual_id is ", individual_id);
    await axios.put (`http://localhost:5000/api1/put/${individual_id}`, {
      headers: { 'Content-Type': 'application/json'}
    })
    .then(response => setData(response.data))
    .catch(err => console.log(err));
  };





  return (
    <div className="content">
      <h1 className="subtopic text">Create Tree Page</h1>
      <p className="description text">Lorem ipsum dolor sit amet, ea detracto legendos imperdiet mel, ius ne noster graecis minimum. Ex usu animal officiis, nam unum mediocritatem ei. Aliquip definiebas nec et, ius te mutat bonorum, at eos ferri veritus adversarium. Cu quo alterum scribentur, fastidii detracto adolescens his ne. Id eum idque moderatius deterruisset.
                                              Audire deleniti voluptatibus no mea, ea discere perpetua iracundia vis. Natum salutandi ut quo. Pertinax principes disputationi an quo, eam vulputate adipiscing ei, justo facilis omnesque eos id. Cu nominati molestiae efficiendi usu. Ea duo habeo feugiat adipisci.
                                              Causae persecuti eum et. Ne scribentur delicatissimi eam, cu pri vero laboramus voluptaria. Bonorum argumentum eum cu, tantas deterruisset vim ea. Duo quod decore pericula et, ea his primis eruditi. At mazim albucius eligendi eos.
                                              Ea pro quidam tractatos, per iudico laoreet no, lucilius tacimates et usu. Duo ne amet senserit, has at illud voluptaria, nibh probatus ut vim. Tota idque nullam ne has, in error eloquentiam nec, usu ferri pertinacia efficiendi cu. Cetero alterum liberavisse vim an, accumsan qualisque constituam ad eos, his et erant graeci. Eos ea quando partem nominavi.
                                              Sea cibo suscipiantur te. Eu atqui clita mei. Cum ut dolorum abhorreant. Nec inani menandri ex, habeo menandri nec ut.
      </p>

      <div className="class_btn">
        <Link to="/add" className="add_btn">Add Person</Link>
      </div>
      <table className="result_table">
        <thead>
          <tr>
             <td>id</td>
             <td>First Name</td>
             <td>Last Name</td>
             <td>Info</td>
             <td>Gender</td>
             <td>In family with id #</td>
          </tr>
        </thead>
        <tbody>
        {dataDB.map((item, idx) => (
          <tr key={idx}>
            <td>{item.individual_id}</td>
            <td>{item.first_name}</td>
            <td>{item.last_name}</td>
            <td>{item.info}</td>
            <td>{item.gender}</td>
            <td>{item.family_id_FK}</td>
            <td>
              <Link to={`edit/${item.individual_id}`} className="edit_btn">Edit</Link>
              <button onClick={ () => delData(item.individual_id) } className="del_btn">Delete</button>
            </td>
          </tr>
        ))}
        </tbody>
       </table>
    </div>
  );
}

export default Create;
