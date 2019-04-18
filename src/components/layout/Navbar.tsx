import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';

import { withStyles, createStyles, Theme, WithStyles } from '@material-ui/core/styles';

import { connect } from 'react-redux';

import { IState } from '../../store';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      width: '100%'
    },
    grow: {
      flexGrow: 1
    },
    appBar: {
      backgroundColor: 'transparent',
      boxShadow: 'none'
    },
    loginButton: {
      backgroundColor: theme.palette.secondary.main
    },
    logo: {
      fontFamily: 'Baloo Chettan',
      color: theme.palette.primary.light
    },
    navListItem: {
      '&:not(:last-child)': {
        marginRight: '20px'
      }
    }
  });

export interface Props extends WithStyles<typeof styles> {
  auth?: {
    isAuthed: boolean;
  };
}

const Navbar: React.FunctionComponent<Props> = (props: Props) => {
  const { classes, auth } = props;

  // const handleLogoutClick = () => {
  //   if (isAuthed) {

  //   }
  // }

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <ToolBar>
          <Link component={(props: any) => <RouterLink {...props} to="/" />}>
            <Typography variant="h5" className={classes.logo} noWrap>
              Darya Invest
            </Typography>
          </Link>

          <div className={classes.grow} />

          {auth && auth.isAuthed && (
            <Button
              color="secondary"
              className={classes.navListItem}
              component={(props: any) => (
                <RouterLink {...props} to="/stocks">
                  {props.children}
                </RouterLink>
              )}
            >
              Акции
            </Button>
          )}
          {auth && auth.isAuthed && (
            <Button
              color="secondary"
              className={classes.navListItem}
              component={(props: any) => (
                <RouterLink {...props} to="/account">
                  {props.children}
                </RouterLink>
              )}
            >
              Мой портфель
            </Button>
          )}

          <Button
            variant="outlined"
            color="secondary"
            className={classes.navListItem}
            component={(props: any) => (
              <RouterLink {...props} to="/signin">
                {props.children}
              </RouterLink>
            )}
          >
            {auth && auth.isAuthed ? 'Выйти' : 'Войти'}
          </Button>
        </ToolBar>
      </AppBar>
    </div>
  );
};

const mapStateToProps = (state: IState) => ({
  auth: state.auth
});

export default connect(mapStateToProps)(withStyles(styles)(Navbar));
