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
      <Image src={image ? image : "/images/dummy_plan.png"} />
      <Container>
        <Subtitle>{subtitle}</Subtitle>
        <Title>{title}</Title>

        <LargeTag>
          <img src="/images/dummy_tags.svg" />
        </LargeTag>
        <Description>{description}</Description>
        <SmallTags>
          {/* {smalltag.map((tag) => (
            <SmallTag>{tag}</SmallTag>
          ))} */}
          <img src="/images/plan_dummy_tag.svg" />
        </SmallTags>
        <Creator>
          <ProfileImage src={`/images/dummy_profile_image.png`} />
          <ProfileDescription>
            <Name>
              {creator_name}
              <span>강사님</span>
            </Name>
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
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  text-align: center;
  color: #929292;
  margin: 14px 0;
`;

const Title = styled.p`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 21px;
  line-height: 21px;
  text-align: center;
  color: #222222;
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
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.002em;
  color: #222222;
  text-align: left;
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
  width: 80vw;
  margin: 15px 0;
`;

const ProfileImage = styled.img``;

const ProfileDescription = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
`;

const Name = styled.p`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 0.04em;
  color: #222222;
  margin-bottom: 10px;
  span {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 11px;
    letter-spacing: 0.03em;
    color: #929292;
    padding-left: 5px;
  }
`;

const Intro = styled.p`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #929292;
`;

export default PlanIntro;
