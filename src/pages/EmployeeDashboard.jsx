import { useEffect, useState } from "react";

import {
  applyLeave,
  getMyLeaves
} from "../services/leaveService";

import "../styles/EmployeeDashboard.css";

function EmployeeDashboard() {

  const [startDate, setStartDate] =
    useState("");

  const [endDate, setEndDate] =
    useState("");

  const [reason, setReason] =
    useState("");

  const [leaves, setLeaves] =
    useState([]);

  useEffect(() => {
    loadLeaves();
  }, []);

  const loadLeaves = async () => {

    try {

      const response =
        await getMyLeaves();

      setLeaves(response.data);

    } catch (error) {

      console.error(error);
    }
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await applyLeave({
        startDate,
        endDate,
        reason
      });

      alert("Leave Applied Successfully");

      setStartDate("");
      setEndDate("");
      setReason("");

      loadLeaves();

    } catch (error) {

      console.error(error);
    }
  };

  const totalLeaves =
    leaves.length;

  const approvedLeaves =
    leaves.filter(
      leave => leave.status === "APPROVED"
    ).length;

  const pendingLeaves =
    leaves.filter(
      leave => leave.status === "PENDING"
    ).length;

  const rejectedLeaves =
    leaves.filter(
      leave => leave.status === "REJECTED"
    ).length;

  return (

    <div className="employee-page">

      <div className="employee-header">

        <div>

          <h1>
            Welcome Back 👋
          </h1>

          <p>
            {localStorage.getItem("email")}
          </p>

        </div>

        <button
          className="logout-btn"
          onClick={() => {

            localStorage.clear();
            window.location.href = "/";

          }}
        >
          Logout
        </button>

      </div>

      <div className="stats-grid">

        <div className="stat-box">

          <div className="stat-title">
            Total Leaves
          </div>

          <div className="stat-number total">
            {totalLeaves}
          </div>

        </div>

        <div className="stat-box">

          <div className="stat-title">
            Pending
          </div>

          <div className="stat-number pending">
            {pendingLeaves}
          </div>

        </div>

        <div className="stat-box">

          <div className="stat-title">
            Approved
          </div>

          <div className="stat-number approved">
            {approvedLeaves}
          </div>

        </div>

        <div className="stat-box">

          <div className="stat-title">
            Rejected
          </div>

          <div className="stat-number rejected">
            {rejectedLeaves}
          </div>

        </div>

      </div>

      <div className="card">

        <h2 className="card-title">
          Apply Leave
        </h2>

        <form
          className="leave-form"
          onSubmit={handleSubmit}
        >

          <input
            type="date"
            value={startDate}
            onChange={(e) =>
              setStartDate(e.target.value)}
            required
          />

          <input
            type="date"
            value={endDate}
            onChange={(e) =>
              setEndDate(e.target.value)}
            required
          />

          <textarea
            placeholder="Reason for Leave"
            value={reason}
            onChange={(e) =>
              setReason(e.target.value)}
            required
          />

          <button
            className="apply-btn"
            type="submit"
          >
            Apply Leave
          </button>

        </form>

      </div>

      <div className="card">

        <h2 className="card-title">
          Leave History
        </h2>

        <table className="leave-table">

          <thead>

            <tr>
              <th>ID</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Reason</th>
              <th>Status</th>
            </tr>

          </thead>

          <tbody>

            {leaves.map((leave) => (

              <tr key={leave.id}>

                <td>{leave.id}</td>

                <td>{leave.startDate}</td>

                <td>{leave.endDate}</td>

                <td>{leave.reason}</td>

                <td>

                  <span
                    className={`status ${
                      leave.status === "APPROVED"
                        ? "status-approved"
                        : leave.status === "PENDING"
                        ? "status-pending"
                        : "status-rejected"
                    }`}
                  >
                    {leave.status}
                  </span>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default EmployeeDashboard;