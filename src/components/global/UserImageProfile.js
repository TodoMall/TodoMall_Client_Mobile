import styled from "styled-components";

const UserImageProfile = ({
  isGuest = false,
  image,
  isProgress,
  width = "52px",
  height = "52px",
  onClick: handleClick = () => {},
  isShowSettingIcon = false,
}) => {
  const blue = "rgba(86, 53, 213, 1)";
  const gray = "rgba(219, 219, 219, 1)";

  return (
    <>
      <ProfileImage
        src={image}
        alt=""
        border={isProgress ? `2px solid ${blue}` : `2px solid ${gray}`}
        width={width}
        height={height}
        onClick={handleClick}
      />
      {!isGuest && isShowSettingIcon && <SettingIcon alt="" />}
    </>
  );
};

export default UserImageProfile;

const ProfileImage = styled.img`
  position: relative;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 50px;
  object-fit: cover;
  padding: 2px;
  border: ${(props) => props.border};
`;

const SettingIcon = styled.img`
  position: relative;
  bottom: 27px;
  left: 40px;
  content: url("/images/settingIcon.svg");
`;
