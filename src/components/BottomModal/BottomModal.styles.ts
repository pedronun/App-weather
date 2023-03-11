import styled from "styled-components/native";

export const Container = styled.ScrollView`
  flex: 1;
  margin: 20px 20px 0 20px;
`;

export const Temp = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 5px;
  width: 60px;
  height: 146px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 30px;
  background: #48319D;
  margin-bottom: 20px;
`;

export const TempName = styled.Text`
  font-family: "SFPro-Regular";
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;
  letter-spacing: -0.5px;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 12px;
`;

export const TempIcon = styled.Image`
  width: 32px;
  height: 32px;
`;

export const TempRain = styled.Text`
  position: absolute;
  bottom: 45%;
  font-family: "SFProDisplay-Semibold";
  font-weight: 600;
  font-size: 13px;
  line-height: 18px;
  text-align: center;
  letter-spacing: -0.078px;
  color: #40cbd8;
`;

export const TempValue = styled.Text`
  font-family: "SFProDisplay-Regular";
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.38px;
  color: ${({ theme }) => theme.colors.primary};
  margin-top: 26px;
`;
