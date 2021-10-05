import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  color: {
    dark: {
      black: '#000000',
      headingAndTexts: '#47585B',
      info: '#999999',
      info50: '#99999980',
    },
    light: {
      white: '#FFFFFF',
      headingAndTexts: '#F5F8FA',
      info: '#DADADA',
    },
    highlight: {
      highlight: '#FFBA08',
      highlight50: 'rgba(255, 186, 8, 0.5)',
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
    cards: 'Barlow',
  },
  styles: {
    global: {
      body: {
        bg: '#F5F8FA',
        color: '#47585B'
      },
      html: { 
        fontSize: "10px"
      },
    }
  }
});
  