import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  margin: 0 16px;
`;

export const Back = styled.Pressable`
  flex-direction: row;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 8px;
`;

export const BackTitle = styled.Text`
  font-family: "SFProDisplay-Regular";
  font-weight: 400;
  font-size: 28px;
  line-height: 34px;
  letter-spacing: 0.364px;
  color: ${({ theme }) => theme.colors.primary};
  margin-left: 5px;
`;

export const SearchBar = styled.TextInput`
  width: 100%;
  height: 36px;
  background: ${({ theme }) => theme.colors.purpleDark};
  color: ${({ theme }) => theme.colors.primary};
  padding: 7px 8px;
  border-radius: 10px;
  letter-spacing: -0.408px;
`;

export const Result = styled.ImageBackground`
  width: 342px;
  height: 185px;
  margin-top: 20px;
  padding: 20px;
`;

export const ResultImage = styled.Image`
  width: 160px;
  height: 160px;
  position: absolute;
  top: -12px;
  right: 0;
`;

export const ResultTemp = styled.Text`
  font-family: "SFProDisplay-Regular";
  font-weight: 400;
  font-size: 64px;
  letter-spacing: 0.374px;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 24px;
`;

export const ResultMinMaxTemp = styled.Text`
  font-family: "SFPro-Regular";
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: -0.078px;
  color: rgba(235, 235, 245, 0.6);
`;

export const ResultTitle = styled.Text`
  font-family: "SFPro-Regular";
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: -0.078px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const ResultWeather = styled.Text`
  font-family: "SFPro-Regular";
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: -0.078px;
  color: ${({ theme }) => theme.colors.primary};
  position: absolute;
  bottom: 29px;
  right: 24px;
  text-transform: capitalize;
`;
