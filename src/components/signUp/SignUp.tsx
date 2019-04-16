import React, { Component } from 'react';
import PropTypes, { string } from 'prop-types';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles, createStyles, Theme, WithStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

import { signUpAction } from '../../actions/authActions';

import { Link as RouterLink } from 'react-router-dom';

const styles = (theme: Theme) =>
  createStyles({
    main: {
      width: 'auto',
      display: 'block', // Fix IE 11 issue.
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3,
      [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
        width: 400,
        marginLeft: 'auto',
        marginRight: 'auto'
      }
    },
    paper: {
      marginTop: theme.spacing.unit * 15,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing
        .unit * 3}px`
    },
    avatar: {
      margin: theme.spacing.unit,
      backgroundColor: theme.palette.secondary.main
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing.unit
    },
    submit: {
      marginTop: theme.spacing.unit * 3
    },
    register: {
      marginTop: theme.spacing.unit * 2
    }
  });

interface IProps extends WithStyles<typeof styles> {
  dispatch: Function;
}

interface IState {
  login?: string;
  password1?: string;
  password2?: string;
}

class SignUp extends Component<IProps, Partial<IState>> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      login: '',
      password1: '',
      password2: ''
    };
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(this.state);
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log('submit');
    e.preventDefault();

    const { login, password1: password } = this.state;
    const { dispatch } = this.props;

    console.log(login, password);

    const userInfo: { login?: string; password?: string } = {
      login,
      password
    };

    dispatch(signUpAction(userInfo));
  };

  render() {
    const { classes } = this.props;
    const { login, password1, password2 } = this.state;

    return (
      <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h5">
            Регистрация
          </Typography>
          <form className={classes.form} onSubmit={this.handleSubmit}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="login">Логин</InputLabel>
              <Input
                id="login"
                name="login"
                autoComplete="login"
                autoFocus
                value={login}
                onChange={this.handleChange}
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Пароль</InputLabel>
              <Input
                name="password1"
                type="password"
                id="password1"
                value={password1}
                autoComplete="current-password"
                onChange={this.handleChange}
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Пароль еще раз</InputLabel>
              <Input
                name="password2"
                type="password"
                id="password2"
                value={password2}
                autoComplete="current-password"
                onChange={this.handleChange}
              />
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Зарегистрироваться
            </Button>
            <Button
              fullWidth
              variant="outlined"
              color="primary"
              size="small"
              className={classes.register}
              component={(props: any) => (
                <RouterLink {...props} to="/signin">
                  {props.children}
                </RouterLink>
              )}
            >
              или войти
            </Button>
          </form>
        </Paper>
      </main>
    );
  }
}

const mapStateToProps = (state: IState) => ({
  login: state.login,
  password: state.password1
});

export default connect(mapStateToProps)(withStyles(styles)(SignUp));
