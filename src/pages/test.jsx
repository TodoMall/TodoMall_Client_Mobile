import styled from "styled-components";
import { BasicButton, TextButton } from "../mds/button";
import { BasicChip, OutlineChip } from "../mds/chip";
import { SPACING_SIZE } from "../constants/spacingSize";
import RowBox from "../mds/box/RowBox";
import { RadioIcon, ArrowIcon } from "../mds/icon";
import CheckIcon from "../mds/icon/CheckIcon";
import CheckBox from "../mds/selectionsControls/CheckBox";
import RadioBox from "../mds/selectionsControls/RadioBox";
import ToggleSwitch from "../mds/selectionsControls/ToggleSwitch";
import { PopUpLayout, PopUpContentBox } from "../mds/popup";
import CategoryTabBar from "../mds/category/CategoryTabBar";
import Card from "../mds/Card";
import Divider from "../mds/Divider";
import Loader from "../mds/Loader";
import { CompanyInfo } from "../mds/layout";
import { Header } from "../mds/layout";

const TestPage = () => {
  return (
    <Container>
      {/* <CompanyInfo /> */}
      <Header />
    </Container>
  );
};

export default TestPage;

const Container = styled.div`
  /* width: calc(100% - ${SPACING_SIZE.spacing_400}); */
  width: 499px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 500px;
`;
