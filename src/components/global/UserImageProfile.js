import styled from "styled-components";

const UserImageProfile = ({
  image,
  isProgress,
  width = "52px",
  height = "52px",
}) => {
  const blue = "rgba(86, 53, 213, 1)";
  const gray = "rgba(219, 219, 219, 1)";
  return (
    <div>
      <ProfileImage
        src={image}
        alt=""
        border={isProgress ? `2px solid ${blue}` : `2px solid ${gray}`}
        width={width}
        height={height}
      />
    </div>
  );
};

export default UserImageProfile;

const ProfileImage = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 50px;
  object-fit: cover;
  padding: 2px;
  border: ${(props) => props.border};
`;
