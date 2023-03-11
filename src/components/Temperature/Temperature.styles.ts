import styled from "styled-components/native";

interface IContainerProps {
  openBottomModal?: boolean;
}

export const Container = styled.View<IContainerProps>`
  align-items: center;
  justify-content: center;
  margin-bottom: 23px;
  min-height: 200px;

  ${({ openBottomModal }) =>
    openBottomModal &&
    `
    justify-content: flex-start;
  `}
`;

export const City = styled.Text`
  font-family: "SFProDisplay-Regular";
  font-weight: 400;
  font-size: 34px;
  line-height: 41px;
  text-align: center;
  letter-spacing: 0.374px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Temp = styled.Text`
  font-family: "SFPro-Light";
  font-weight: 200;
  font-size: 96px;
  line-height: 110px;
  text-align: center;
  letter-spacing: 0.374px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Weather = styled.Text`
  font-family: "SFProDisplay-Semibold";
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.38px;
  color: ${({ theme }) => theme.colors.secondary};
  text-transform: capitalize;
`;

export const MinMaxTemp = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const MinTemp = styled(Weather)`
  color: ${({ theme }) => theme.colors.primary};
`;

export const MaxTemp = styled(MinTemp)``;