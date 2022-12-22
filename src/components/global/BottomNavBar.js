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
    <>
      <StyledBottomNavBar showLabels style={{ backgroundColor: "#fbfbfb" }}>
        <NavBarButton
          icon={
            <>
              <img
                src={getImageSource(currentLocation, "TODOBOX")}
                alt="TODOBOX"
                style={{ width: 35, height: 45, objectFit: "cover" }}
                height={20}
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
                style={{ width: 35, height: 45, objectFit: "cover" }}
                height={25}
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
                style={{ width: 35, height: 43, objectFit: "cover" }}
                height={25}
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
