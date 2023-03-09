// import original module declarations
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
      quaternary: string;

      purple: string;
      purpleLight: string;
      purpleDark: string;
      
      violet: string;

      linearGradient: string;
      linearGradient2: string;
      linearGradient3: string;
      linearGradient4: string;
      radialGradient: string;
      angularGradient: string;
    };
  }
}
