import React, { useState } from "react";
import styled from "styled-components";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { COLOR } from "../../constants";
import { Link } from "react-router-dom";

const BottomNavBar = ({ position }) => {
  const [currentLocation, setCurrentLocation] = useState(position);

  const getImageSource = (currentLocation, location) => {
    if (currentLocation === location) {
      return COLOR[`${location}_COLORED`];
    }
    if (currentLocation !== location) {
      return COLOR[`${location}_UNCOLORED`];
    }
  };

  return (
    <StyledBottomNavBar
      showLabels
      style={{ height: "64px", backgroundColor: "#ffffff" }}
    >
      <NavBarButton
        icon={
          <>
            <img
              src={getImageSource(currentLocation, "TODOBOX")}
              alt="TODOBOX"
              style={{ width: 28, height: 38, objectFit: "cover" }}
            />
          </>
        }
        onClick={() => {
          setCurrentLocation("TODOBOX");
        }}
        component={Link}
        to="/todobox"
      />
      <NavBarButton
        icon={
          <>
            <img
              src={getImageSource(currentLocation, "TODOMALL")}
              alt="TODOMALL"
              style={{ width: 28, height: 38, objectFit: "cover" }}
            />
          </>
        }
        onClick={() => {
          setCurrentLocation("TODOMALL");
        }}
        component={Link}
        to="/todomall"
      />
      <NavBarButton
        icon={
          <>
            <img
              src={getImageSource(currentLocation, "MYPAGE")}
              alt="MYPAGE"
              style={{ width: 32, height: 38, objectFit: "cover" }}
            />
          </>
        }
        onClick={() => {
          setCurrentLocation("MYPAGE");
        }}
        component={Link}
        to="/mypage"
      />
    </StyledBottomNavBar>
  );
};

export default BottomNavBar;

const StyledBottomNavBar = styled(BottomNavigation)`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 72px;
  border-top: 1px solid #ededed;
`;

const NavBarButton = styled(BottomNavigationAction)``;
