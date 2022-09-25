import React from "react";
import styled from "styled-components";
import { IconDict } from "../../global/Icon";

const PlanIntro = ({
  image,
  subtitle,
  title,
  smalltag,
  largetag,
  description,
  creator_image,
  creator_name,
  creator_intro,
}) => {
  return (
    <>
      <Image alt="plan" src={image ? image : "/images/dummy_plan.png"} />
      <Container>
        <Subtitle>{subtitle}</Subtitle>
        <Title>{title}</Title>

        <LargeTags>
          {largetag.map((tag) => (
            <LargeTagCover>
              <LargeTag>
                <LargeTagIcon src={`/images/${IconDict[tag]}.svg`} />
              </LargeTag>
              <LargeTagText>{tag}</LargeTagText>
            </LargeTagCover>
          ))}
        </LargeTags>
        <Description>{description}</Description>
        <SmallTags>
          {smalltag.map((tag) => (
            <SmallTag>
              <TagIcon src={`/images/${IconDict[tag]}.svg`} />
              {tag}
            </SmallTag>
          ))}
        </SmallTags>
        <Creator>
          <ProfileImage alt="creator" src={creator_image} />
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
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  /* identical to box height, or 100% */
  display: flex;
  align-items: center;
  text-align: center;
  color: #a9a9a9;
  gap: 5px;
`;

const SmallTag = styled.div`
  width: auto;
  padding-right: 10px;
  padding-left: 6px;
  height: 26px;
  background: #f2f2f2;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TagIcon = styled.img`
  /* width: 14px;
  height: 14px; */
  margin-right: 3px;
`;

const LargeTags = styled.div`
  width: 100vw;
  height: 75px;
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

const LargeTagCover = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const LargeTagText = styled.p`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  color: #888888;
`;

const LargeTag = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 48px;
  height: 48px;
  border-radius: 48px;
  background-color: #f1efff;
`;

const LargeTagIcon = styled.img`
  width: 24px;
  height: 24px;
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

const ProfileImage = styled.img`
  width: 64px;
  height: 64px;
`;

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
