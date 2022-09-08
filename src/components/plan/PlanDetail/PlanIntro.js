import React from "react";
import styled from "styled-components";

const PlanIntro = ({
  image,
  subtitle,
  title,
  smalltag,
  category,
  level,
  price,
  description,
  creator_image,
  creator_name,
  creator_intro,
}) => {
  return (
    <>
      <Image src={image ? image : "https://picsum.photos/200/300"} />
      <Container>
        <Subtitle>{subtitle}</Subtitle>
        <Title>{title}</Title>
        <SmallTags>
          {/* {smalltag.map((tag) => (
            <SmallTag>{tag}</SmallTag>
          ))} */}
          <img src="/images/plan_dummy_tag.svg" />
        </SmallTags>
        <LargeTag>
          <img src="/images/dummy_tags.svg" />
        </LargeTag>
        <Description>{description}</Description>
        <Creator>
          <ProfileImage src={`/images/dummy_profile_image.png`} />
          <ProfileDescription>
            <Name>{creator_name} 노션 강사님</Name>
            <Intro>{creator_intro}</Intro>
          </ProfileDescription>
        </Creator>
      </Container>
    </>
  );
};

const Image = styled.img`
  width: 100vw;
  height: 160px;
  overflow: hidden;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
`;

const Subtitle = styled.p`
  /* font-family: "PretendardMedium"; */
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  color: #c0c0c0;
  margin: 14px 0;
`;

const Title = styled.p`
  /* font-family: "PretendardMedium"; */
  font-size: 20px;
  margin-bottom: 10px;
`;

const SmallTags = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  margin-bottom: 10px;
`;

const SmallTag = styled.div``;

const LargeTag = styled.div`
  width: 100vw;
  height: 75px;
  margin: 10px 0;
`;

const Description = styled.p`
  width: 80vw;
  text-align: left;
  /* font-family: "PretendardMedium"; */
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
`;

const Creator = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  padding: 12px;
  gap: 10px;
  background: #f2f2f2;
  border-radius: 8px;
  width: 330px;
  margin: 15px 0;
`;

const ProfileImage = styled.img``;

const ProfileDescription = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
`;

const Name = styled.p`
  /* font-family: "PretendardMedium"; */
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 5px;
`;

const Intro = styled.p`
  /* font-family: "PretendardMedium"; */
  font-style: normal;
  font-weight: 100;
  font-size: 13px;
  //   line-height: 14px;
`;

export default PlanIntro;
