import { Link } from "react-router-dom";

function Sidebar() {

  return (
    <div className="sidebar">

      <Link to="/employee">
        Dashboard
      </Link>

      <Link to="/manager">
        Manager
      </Link>

      <Link to="/admin">
        Admin
      </Link>

    </div>
  );
}

export default Sidebar;