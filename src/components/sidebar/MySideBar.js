import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CategoryIcon from "@mui/icons-material/Category";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import PaymentsIcon from "@mui/icons-material/Payments";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";

export const MySideBar = () => {
  const { collapseSidebar } = useProSidebar();
  //   const dispatch = useDispatch();
  //   const { showSideBar } = useSelector((state) => state.system);

  return (
    <div id="app" style={{ height: "100vh" }}>
      <Sidebar
        style={{ height: "100vh" }}
        // show={showSideBar}
        // onHide={() => dispatch(setSideBarShow(false))}
      >
        <Menu>
          <MenuItem
            icon={<MenuOutlinedIcon />}
            onClick={() => {
              collapseSidebar();
            }}
            style={{ textAlign: "center" }}>
            {" "}
            <h4 className="fw-bold">The AceAttire</h4>
          </MenuItem>
          <MenuItem
            icon={<HomeOutlinedIcon />}
            component={<Link to="/dashboard" />}>
            Dashboard
          </MenuItem>
          <MenuItem icon={<CategoryIcon />} component={<Link to="/category" />}>
            {" "}
            Category Management
          </MenuItem>
          <MenuItem
            icon={<Inventory2Icon />}
            component={<Link to="/products" />}>
            {" "}
            Products Management
          </MenuItem>
          <MenuItem
            icon={<ShoppingBagIcon />}
            component={<Link to="/orders" />}>
            {" "}
            Orders
          </MenuItem>
          <MenuItem
            icon={<PaymentsIcon />}
            component={<Link to="/payment-options" />}>
            {" "}
            payment-options
          </MenuItem>
          <MenuItem
            icon={<PeopleOutlinedIcon />}
            component={<Link to="/customer-management" />}>
            {" "}
            Customer Management
          </MenuItem>
          <MenuItem icon={<SettingsIcon />} component={<Link to="/settings" />}>
            {" "}
            Settings
          </MenuItem>
          <MenuItem
            icon={<AccountCircleIcon />}
            component={<Link to="/Profile" />}>
            {" "}
            Profile
          </MenuItem>
        </Menu>
      </Sidebar>
      {/* <main>
        <h1 style={{ color: "white", marginLeft: "5rem" }}>
          React-Pro-Sidebar
        </h1>
      </main> */}
    </div>
  );
};
