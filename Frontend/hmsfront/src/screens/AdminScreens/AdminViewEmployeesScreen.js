import Header from "../../components/Header";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  employeeDeleteAction,
  viewEmployeesAction,
} from "../../actions/employeeActions";
const AdminViewEmployeesScreen = (props) => {
  const dispatch = useDispatch();
  const viewEmployees = useSelector((store) => store.viewEmployees);
  const { loading, response, error } = viewEmployees;

  const deleteEmployee = useSelector((store) => store.deleteEmployee);
  const { dloading, dresponse, derror } = deleteEmployee;
  let message;
  const onDelete = (emp_id) => {
    dispatch(employeeDeleteAction(emp_id));
  };

  const onUpdate = (emp_id) => {
    sessionStorage.setItem("emp_id", emp_id);
    props.history.push("/admin/update-employee");
  };

  useEffect(() => {
    dispatch(viewEmployeesAction());
  }, []);
  useEffect(() => {
    if (dresponse && dresponse.status == "200") {
      alert("Employee deleted successfully");
      document.location.href = "/admin/view-employees";
      // props.history.push("/admin/view-employees");
    } else if (derror) {
      alert("Cannot delete employee");
    }
  }, [derror, dresponse, dloading]);

  useEffect(() => {
    // console.log("use effect list ", response);
  }, [error, response, loading]);
  return (
    <div className="container">
      <Header className="text-center" title="List of  Employees" />
      <table className="table table-striped container">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Role</th>
            <th>Delete</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {response &&
            response.data.list.length > 0 &&
            response.data.list.map((e) => {
              return (
                <tr>
                  <td>{e.id}</td>
                  <td>{e.name}</td>
                  <td>{e.role}</td>
                  <td>
                    <button
                      onClick={() => {
                        onDelete(e.id);
                      }}
                      className="btn btn-danger"
                      type="button"
                    >
                      Delete
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        onUpdate(e.id);
                      }}
                      className="btn btn-primary"
                      type="button"
                    >
                      Update
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default AdminViewEmployeesScreen;
