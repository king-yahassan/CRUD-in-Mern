import React, { useState, useEffect } from "react";
import axios from "axios" ;
import { useParams } from "react-router-dom";


const EditeUser = () =>{
    const [user, setUser] = useState({
        firstname: "",
        lastname: "",
        email: ""
      });

      const {id} = useParams();
      const { firstname, lastname, email } = user;

// recupération du user
      const fetchData = async () => {
        const result = await axios.get(`http://localhost:5000/api/show-user/${id}`);
        setUser(result.data);
    };
    useEffect(() => {
        fetchData();
    }, []);


// update
      const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:5000/api/update-user/${id}`, user);

        window.location = "/" ;
      };
    
    return(
        <>
        <div className="container mt-5">
        <div className="row">
          <div className="col-md-8 offset-2">
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="mb-3">
                <label htmlFor="firstname" className="form-label">
                  firstname
                </label>
                <input
                  value={firstname}
                  name="firstname"
                  type="text"
                  className="form-control"
                  id="firstname"
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="lastname" className="form-label">
                  lastname
                </label>
                <input
                  value={lastname}
                  name="lastname"
                  type="text"
                  className="form-control"
                  id="lastname"
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  email
                </label>
                <input
                  value={email}
                  name="email"
                  type="email"
                  className="form-control"
                  id="email"
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="d-grid gap-2">
                <button className="btn btn-primary" type="submit">
                  Edit user
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

        
        </>

    )
}
export default EditeUser ;