import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { setupUserLogout } from "../../redux/actions/auth.action";
import "./navbar.css";

export const NavbarCompo = () => {
  const { isloggedin } = useSelector((state) => state.AuthReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(setupUserLogout(undefined));
    navigate("/login");
    console.log("Logout");
  };

  return (
    <div className="navbar_comp">
      <div className="left_bar">
        <Link to="/">
          <button className="left_bar_btn">Home</button>
        </Link>
        <Link to="/dashboard">
          <button className="left_bar_btn">Dashboard</button>
        </Link>
        <Link to="/products">
          <button className="left_bar_btn">Products</button>
        </Link>
      </div>
      <div className="right_bar">
        {isloggedin ? (
          <>
            <Button
              onClick={handleLogout}
              variant="outline-secondary"
              size="sm"
            >
              Sign out
            </Button>
          </>
        ) : (
          <Link to="/login">
            <Button variant="outline-secondary" size="sm">
              Sign in
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};
