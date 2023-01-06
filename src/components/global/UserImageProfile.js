import styled from "styled-components";

const UserImageProfile = ({ image, isProgress }) => {
  const blue = "rgba(86, 53, 213, 1)";
  const gray = "rgba(219, 219, 219, 1)";
  return (
    <div>
      <ProfileImage
        src={image}
        alt=""
        border={isProgress ? `2px solid ${blue}` : `2px solid ${gray}`}
      />
    </div>
  );
};

export default UserImageProfile;

const ProfileImage = styled.img`
  width: 52px;
  height: 52px;
  border-radius: 50px;
  object-fit: cover;
  padding: 2px;
  border: ${(props) => props.border};
`;
