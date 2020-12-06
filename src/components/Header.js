import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import { Context } from "./Context";

const Header = () => {
  const { authenticated } = useContext(Context);
  console.log("AUth: ", authenticated)
  return (
    <Menu>
      <Menu.Item>Natus Vincere</Menu.Item>

      <Menu.Menu position="right">
        <div class="ui menu">
          {!authenticated ? (
            <>
              <div class="item">
                <Link to="/signUp" className="ui primary button">
                  Sign Up
                </Link>
              </div>
              <div class="item">
                <Link to="/" className="ui primary button">
                  Log in
                </Link>
              </div>
            </>
          ) : (
            <>
              <div class="item">
                <Link to="/newRequest" className="ui primary button">
                  New Request
                </Link>
              </div>
              <div class="item">
                <Link to="/myRequests" className="ui primary button">
                  My Requests
                </Link>
              </div>
            </>
          )}
        </div>
        {/*             
                    <Menu.Item>New request</Menu.Item>
                    
                    <Menu.Item>All requests</Menu.Item>
                    <Link to="/login" />

                    <Menu.Item>Log out</Menu.Item> */}
      </Menu.Menu>
    </Menu>
  );
};

export default Header;
