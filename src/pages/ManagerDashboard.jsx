import { useEffect, useState } from "react";

import {
  getPendingLeaves,
  approveLeave,
  rejectLeave
} from "../services/managerService";

import "../styles/ManagerDashboard.css";

function ManagerDashboard() {

  const [leaves, setLeaves] =
    useState([]);

  useEffect(() => {

    loadLeaves();

  }, []);

  const loadLeaves = async () => {

    try {

      const response =
        await getPendingLeaves();

      setLeaves(response.data);

    } catch (error) {

      console.error(error);
    }
  };

  const handleApprove = async (id) => {

    try {

      await approveLeave(id);

      alert("Leave Approved");

      loadLeaves();

    } catch (error) {

      console.error(error);
    }
  };

  const handleReject = async (id) => {

    try {

      await rejectLeave(id);

      alert("Leave Rejected");

      loadLeaves();

    } catch (error) {

      console.error(error);
    }
  };

  return (

    <div className="manager-page">

      <div className="manager-header">

        <div>

          <h1 className="manager-title">
            Manager Dashboard
          </h1>

          <div className="manager-email">
            {localStorage.getItem("email")}
          </div>

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

      <div className="summary-grid">

        <div className="summary-card">

          <h3>
            Pending Requests
          </h3>

          <p>
            {leaves.length}
          </p>

        </div>

        <div className="summary-card">

          <h3>
            Today's Reviews
          </h3>

          <p>
            {leaves.length}
          </p>

        </div>

      </div>

      <div className="manager-box">

        <h2>
          Pending Leave Requests
        </h2>

        {leaves.length === 0 ? (

          <div className="empty-state">

            🎉 No Pending Requests

          </div>

        ) : (

          <table className="leave-table">

            <thead>

              <tr>

                <th>ID</th>

                <th>Employee</th>

                <th>Start Date</th>

                <th>End Date</th>

                <th>Reason</th>

                <th>Action</th>

              </tr>

            </thead>

            <tbody>

              {leaves.map((leave) => (

                <tr key={leave.id}>

                  <td>
                    {leave.id}
                  </td>

                  <td>
                    {leave.employee?.name}
                  </td>

                  <td>
                    {leave.startDate}
                  </td>

                  <td>
                    {leave.endDate}
                  </td>

                  <td>
                    {leave.reason}
                  </td>

                  <td>

                    <div className="action-buttons">

                      <button
                        className="approve-btn"
                        onClick={() =>
                          handleApprove(
                            leave.id
                          )
                        }
                      >
                        Approve
                      </button>

                      <button
                        className="reject-btn"
                        onClick={() =>
                          handleReject(
                            leave.id
                          )
                        }
                      >
                        Reject
                      </button>

                    </div>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        )}

      </div>

    </div>
  );
}

export default ManagerDashboard;