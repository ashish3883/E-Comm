import { IconType } from "react-icons";
import { Link, Location, useLocation, useNavigate } from "react-router-dom";
import { RiDashboardFill, RiShoppingBag3Fill } from "react-icons/ri";
import { AiFillFileText } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
const AdminSideBar = () => {
  // const navigate = useNavigate()
  const location = useLocation();
  return (
    <aside>
      <h2>Logo.</h2>
      <div>
        <h5>Dashboard</h5>
        <ul>
          <li>
            <Link to={"/admin/dashboard"}>
              <RiDashboardFill />
              Dashborad
            </Link>
          </li>
          <li>
            <Link to={"/admin/products"}>
              <RiShoppingBag3Fill />
              Products
            </Link>
          </li>
          <li>
            <Link to={"/admin/customers"}>
              <IoIosPeople />
              Customers
            </Link>
          </li>
          <li>
            <Link to={"/admin/transection"}>
              <AiFillFileText />
              Transection
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};


export default AdminSideBar;
