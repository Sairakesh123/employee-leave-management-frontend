import { useEffect, useState } from "react";
import {
  getDashboard,
  createEmployee,
  getEmployees,
  deleteEmployee,
} from "../services/adminService";
import "../styles/AdminDashboard.css";

function AdminDashboard() {
  const [dashboard, setDashboard] = useState(null);
  const [employees, setEmployees] = useState([]);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("EMPLOYEE");

  useEffect(() => {
    loadDashboard();
    loadEmployees();
  }, []);

  const loadDashboard = async () => {
    try {
      const response = await getDashboard();
      setDashboard(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const loadEmployees = async () => {

  try {

    const response =
      await getEmployees();

    console.log(
      "EMPLOYEES =>",
      response.data
    );

    setEmployees(response.data);

  } catch (error) {

    console.error(error);
  }
};

  const handleCreateEmployee = async (e) => {
    e.preventDefault();
    try {
      await createEmployee({ name, email, password, role });
      alert("Employee Created");
      setName("");
      setEmail("");
      setPassword("");
      setRole("EMPLOYEE");
      loadEmployees();
      loadDashboard();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteEmployee(id);
      alert("Deleted Successfully");
      loadEmployees();
      loadDashboard();
    } catch (error) {
      console.error(error);
    }
  };

  if (!dashboard) {
    return <h2 style={{ padding: "40px", color: "#64748b" }}>Loading...</h2>;
  }

  const employeeList = employees.filter(
  (emp) => emp.role && emp.role.toUpperCase() === "EMPLOYEE"
);

const managerList = employees.filter(
  (manager) => manager.role && manager.role.toUpperCase() === "MANAGER"
);

  return (
    <div className="admin-page">
      <div className="admin-sidebar">
        <div className="admin-logo">LeaveMS</div>
        <div className="admin-menu">
          <button
            className={activeTab === "dashboard" ? "active-menu" : ""}
            onClick={() => setActiveTab("dashboard")}
          >
            Dashboard
          </button>
          <button
            className={activeTab === "employees" ? "active-menu" : ""}
            onClick={() => setActiveTab("employees")}
          >
            Employees
          </button>
          <button
            className={activeTab === "managers" ? "active-menu" : ""}
            onClick={() => setActiveTab("managers")}
          >
            Managers
          </button>
          <button
            onClick={() => {
              localStorage.clear();
              window.location.href = "/";
            }}
          >
            Logout
          </button>
        </div>
      </div>

      <div className="admin-main">
        <div className="admin-header">
          <h1>Admin Dashboard</h1>
          <div className="admin-user">
            {localStorage.getItem("email") || "admin@gmail.com"}
          </div>
        </div>

        {activeTab === "dashboard" && (
          <div className="stats-grid">
            <div className="stat-card">
              <h4>Employees</h4>
              <h2>{dashboard.totalEmployees}</h2>
            </div>
            <div className="stat-card">
              <h4>Managers</h4>
              <h2>{dashboard.totalManagers}</h2>
            </div>
            <div className="stat-card">
              <h4>Pending</h4>
              <h2>{dashboard.pendingLeaves}</h2>
            </div>
            <div className="stat-card">
              <h4>Approved</h4>
              <h2>{dashboard.approvedLeaves}</h2>
            </div>
            <div className="stat-card">
              <h4>Rejected</h4>
              <h2>{dashboard.rejectedLeaves}</h2>
            </div>
          </div>
        )}

        {activeTab === "employees" && (
          <>
            <div className="content-box">
              <h2>Create Employee</h2>
              <form className="employee-form" onSubmit={handleCreateEmployee}>
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <select value={role} onChange={(e) => setRole(e.target.value)}>
                  <option value="EMPLOYEE">EMPLOYEE</option>
                  <option value="MANAGER">MANAGER</option>
                </select>
                <button type="submit" className="create-btn">
                  Create
                </button>
              </form>
            </div>

            <div className="content-box">
              <h2>Employees Directory</h2>
              <table className="employee-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {employeeList.map((emp) => (
                    <tr key={emp.id}>
                      <td>{emp.id}</td>
                      <td>{emp.name}</td>
                      <td>{emp.email}</td>
                      <td>
                        <span className="role-badge employee-role">
                          {emp.role}
                        </span>
                      </td>
                      <td>
                        <button
                          className="delete-btn"
                          onClick={() => handleDelete(emp.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {activeTab === "managers" && (
          <div className="content-box">
            <h2>Managers Directory</h2>
            <table className="employee-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                </tr>
              </thead>
              <tbody>
                {managerList.map((manager) => (
                  <tr key={manager.id}>
                    <td>{manager.id}</td>
                    <td>{manager.name}</td>
                    <td>{manager.email}</td>
                    <td>
                      <span className="role-badge manager-role">
                        {manager.role}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminDashboard;