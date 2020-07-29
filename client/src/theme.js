import { createMuiTheme } from '@material-ui/core/styles';

const palette = {
  primary: { 
    main: '#F2F7F5',
    contrastText: '#00473E',


  },
  secondary: {
     main: '#FAAE2B',
     contrastText: '#00473E',
  }
};

const typography = {
  fontFamily: 'Raleway, Sans-Serif',
};

export default createMuiTheme({ palette, typography,});
