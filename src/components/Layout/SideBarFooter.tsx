import styled from 'styled-components';
import { ReactComponent as BulbIcon } from '../../assets/images/bulb.svg';
import { flexBox } from '../../styles/mixin';

function SideBarBottom() {
  return (
    <Container>
      <GuideContainer>
        <IconWrapper>
          <BulbIcon />
        </IconWrapper>
        <GuideText>
          <GuideTitle>레버 이용 가이드</GuideTitle>
          시작하기 전에 알아보기
        </GuideText>
      </GuideContainer>
      <BottomText>
        레버는 함께 만들어갑니다.
        <br />
        <Anchor href="#">이용약관</Anchor>
      </BottomText>
    </Container>
  );
}

export default SideBarBottom;

const Container = styled.div`
  margin-top: 260px;
  font-weight: 500;
  font-size: 12px;
  color: ${({ theme }) => theme.grey_300};
`;

const GuideContainer = styled.div`
  ${flexBox('row')}
  padding: 30px 20px;
  margin-bottom: 40px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.secondary_01};
`;

const IconWrapper = styled.div`
  ${flexBox('row')}
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  margin-right: 8px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.primary};
`;

const GuideTitle = styled.strong`
  display: inline-block;
  width: 100%;
  font-weight: 700;
  font-size: 16px;
  color: ${({ theme }) => theme.grey_800};
`;

const GuideText = styled.p`
  margin-left: 8px;
`;

const BottomText = styled.p`
  margin: 0 0 40px 20px;
`;

const Anchor = styled.a`
  display: inline-block;
  margin-top: 10px;
  text-decoration: underline;
`;
