import React from "react";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import logo from "../../images/logo.png";
import { AiOutlineMenu } from "react-icons/ai";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../Firebase.init";
const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <div className="navbar bg-[#7130bee6] z-10 text-stone-50 sticky top-0">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <span className="h-8 w-8 font-bold mx-auto my-auto">
              <AiOutlineMenu />
            </span>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#7130be] rounded-box w-52"
          >
            <li>
              <Link className="mr-4" to="/home">
                Home
              </Link>
            </li>
            <li>
              <Link className="mr-4" to="/blogs">
                Blogs
              </Link>
            </li>
            {user && (
              <>
                <li>
                  <Link className="mr-4" to="/inventory">
                    Our Instruments
                  </Link>
                </li>
                <li>
                  <Link className="mr-4" to="addItems">
                    Add Instruments
                  </Link>
                </li>
                <li>
                  <Link className="mr-4" to="/manageInventory">
                    Manage Instruments
                  </Link>
                </li>
              </>
            )}
            {user ? (
              <button
                className="btn btn-link text-white text-decoration-none"
                onClick={handleSignOut}
              >
                Sign Out
              </button>
            ) : (
              <li>
                <Link className="mr-4" to="/logIn">
                  LogIn
                </Link>
              </li>
            )}
          </ul>
        </div>
        <div className="flex normal-case text-xl">
          <img src={logo} alt="LogoImage" className="w-12 h-10" />
          <h5 className="md:text-xl md:font-bold">
            Neurosurgical Instruments Ltd
          </h5>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal md:font-bold p-0">
          <li>
            <Link className="mr-4" to="/home">
              Home
            </Link>
          </li>
          <li>
            <Link className="mr-4" to="/blogs">
              Blogs
            </Link>
          </li>
          {user && (
            <>
              <li>
                <Link className="mr-4" to="/inventory">
                  Our Inventory
                </Link>
              </li>
              <li>
                <Link className="mr-4" to="addItems">
                  Add Instruments
                </Link>
              </li>
              <li>
                <Link className="mr-4" to="/manageInventory">
                  Manage Instruments
                </Link>
              </li>
            </>
          )}
          {user ? (
            <button
              className="btn btn-link text-white"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          ) : (
            <li>
              <Link className="mr-4" to="/logIn">
                LogIn
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
