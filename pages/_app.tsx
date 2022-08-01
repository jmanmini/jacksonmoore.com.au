import { NextUIProvider, createTheme } from '@nextui-org/react';

const theme = createTheme({
  type: "dark", // it could be "light" or "dark"
  theme: {
    colors: {
      // brand colors
      primaryLight: '#B0D7EE',
      primaryLightHover: '#7DADCF',
      primaryLightActive: '#517A9F',
      primaryLightContrast: '#183151',
      primary: '#213f5f',
      primaryBorder: '#213f5f',
      primaryBorderHover: '#183151',
      primarySolidHover: '#102444',
      primarySolidContrast: '$white',
      primaryShadow: '#213f5f',

      gradient: 'linear-gradient(90deg, rgba(33,63,95,1) 59%, rgba(255,198,80,1) 100%)',
      link: '#5E1DAD',
    },
    space: {},
    fonts: {}
  }
})

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider theme={theme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;