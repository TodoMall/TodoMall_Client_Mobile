import React, { useState } from "react";
import styled from "styled-components";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import constants from "../../constants";
import { Link } from "react-router-dom";

const BottomNavBar = ({ position }) => {
  const [current, setCurrent] = useState(position);

  return (
    <>
      <StyledBottomNavBar showLabels style={{ backgroundColor: "#fbfbfb" }}>
        <NavBarButton
          icon={
            <>
              <img
                src={
                  current === "TODOBOX"
                    ? constants.TODOBOX_COLORED
                    : constants.TODOBOX_UNCOLORED
                }
                alt="TODOBOX"
                style={{ width: 35, height: 45, objectFit: "cover" }}
                height={20}
              />
            </>
          }
          onClick={() => {
            setCurrent("TODOBOX");
          }}
          component={Link}
          to="/todobox"
        />
        <NavBarButton
          icon={
            <>
              <img
                src={
                  current === "TODOMALL"
                    ? constants.TODOMALL_COLORED
                    : constants.TODOMALL_UNCOLORED
                }
                alt="TODOMALL"
                style={{ width: 35, height: 45, objectFit: "cover" }}
                height={25}
              />
            </>
          }
          onClick={() => {
            setCurrent("TODOMALL");
          }}
          component={Link}
          to="/todomall"
        />
        <NavBarButton
          icon={
            <>
              <img
                src={
                  current === "MYPAGE"
                    ? constants.MYPAGE_COLORED
                    : constants.MYPAGE_UNCOLORED
                }
                alt="MYPAGE"
                style={{ width: 35, height: 43, objectFit: "cover" }}
                height={25}
              />
            </>
          }
          onClick={() => {
            setCurrent("MYPAGE");
          }}
          component={Link}
          to="/mypage"
        />
      </StyledBottomNavBar>
    </>
  );
};

export default BottomNavBar;

const StyledBottomNavBar = styled(BottomNavigation)`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 85px !important;
`;

const NavBarButton = styled(BottomNavigationAction)`
  padding: 0px 12px 8px !important;
`;
