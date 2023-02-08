import React, { useState } from "react";
import styled from "styled-components";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { GNB_IMAGE } from "../../constants";
import { Link } from "react-router-dom";

const BottomNavBar = ({ position }) => {
  const [currentLocation, setCurrentLocation] = useState(position);

  const getImageSource = (currentLocation, location) => {
    if (currentLocation === location) {
      return GNB_IMAGE[`${location}_COLORED`];
    }
    if (currentLocation !== location) {
      return GNB_IMAGE[`${location}_UNCOLORED`];
    }
  };

  return (
    <StyledBottomNavBar showLabels>
      <NavBarButton
        icon={<img src={getImageSource(currentLocation, "TODOBOX")} alt="" />}
        onClick={() => {
          setCurrentLocation("TODOBOX");
        }}
        component={Link}
        to="/todobox"
      />
      <NavBarButton
        icon={<img src={getImageSource(currentLocation, "TODOMALL")} alt="" />}
        onClick={() => {
          setCurrentLocation("TODOMALL");
        }}
        component={Link}
        to="/todomall"
      />
      <NavBarButton
        icon={<img src={getImageSource(currentLocation, "MYPAGE")} alt="" />}
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
  height: 56px;
  border-top: 1px solid #ededed;
  background-color: #ffffff;
`;

const NavBarButton = styled(BottomNavigationAction)``;
