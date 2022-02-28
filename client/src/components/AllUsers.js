import React ,{useEffect, useState} from "react";
import axios from "axios";
import  {NavLink} from "react-router-dom" ;

const AllUsers = () => {

    const [users, setUsers] = useState([]);


    const fetchData = async () => {
        const result = await axios.get("http://localhost:5000/api/all-users");
        setUsers(result.data);
    };


    //deleted user  
    const deleteUserData = async(id) => {
        axios.delete(`http://localhost:5000/api/delete-user/${id}`);
        fetchData();
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            
            <React.Fragment >
                <table className="table table-dark table-striped mt-5">
                    <thead>
                        <tr>
                            <th scope="col">first name</th>
                            <th scope="col">last name</th>
                            <th scope="col">email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={index}>
                                <td>{user.firstname}</td>
                                <td>{user.lastname}</td>
                                <td>{user.email}</td>
                                <td>
                                    <NavLink
                                        className="btn btn-outline-info"
                                        to={`/edite-user/${user._id}`}
                                    >
                                        Edite
                                    </NavLink>
                                </td>
                                <td>
                                    <NavLink
                                        className="btn btn-outline-primary"
                                        to={`/show-user/${user._id}`}
                                    >
                                        show
                                    </NavLink>
                                </td>
                                <td>
                                    <button
                                        className="btn btn-outline-danger"
                                        onClick={() => deleteUserData(user._id)}
                                        >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </React.Fragment>
            
        </>
    );
};
export default AllUsers ;