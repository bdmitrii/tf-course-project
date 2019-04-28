import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import pink from '@material-ui/core/colors/indigo';
import blue from '@material-ui/core/colors/blue';
import CssBaseline from '@material-ui/core/CssBaseline';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#f5fafc',
      main: '#222629'
    },
    secondary: {
      light: '#61892f',
      main: '#86c232'
    },
    background: {
      default: '#222629'
    }
  },
  typography: {
    useNextVariants: true
  },
  overrides: {
    MuiTabs: {
      root: {
        backgroundColor: '#fafeff'
      },
      indicator: {
        backgroundColor: '#86c232',
        height: 4
      }
    },
    MuiPaper: {
      root: {
        backgroundColor: '#fafeff'
      }
    }
  }
});

function withRoot(Component: typeof React.Component) {
  function WithRoot(props: any) {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...props} />
      </MuiThemeProvider>
    );
  }

  return WithRoot;
}

export default withRoot;
