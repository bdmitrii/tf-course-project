import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

import { validatePassword } from '../../utils/validation';
import { signUpAction } from '../../actions/authActions';
import { setErrorAction, clearErrorAction } from '../../actions/errorActions';
import { IUserAuth, IState as IReduxState } from '../../constants/interfaces';

import { Link as RouterLink } from 'react-router-dom';

import styles from '../../styles/form';

interface IProps extends WithStyles<typeof styles> {
  setError: typeof setErrorAction;
  clearError: typeof clearErrorAction;
  signUp: typeof signUpAction;
  error: string | null;
}

interface IState {
  login: string;
  password1: string;
  password2: string;
}

class SignUp extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      login: '',
      password1: '',
      password2: ''
    };
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value } as Pick<
      IState,
      keyof IState
    >);
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { setError, signUp } = this.props;
    const { login, password1: password, password2 } = this.state;

    const error = validatePassword(password, password2);

    if (error) {
      setError(error);
      return;
    }

    const userInfo: IUserAuth = {
      login,
      password
    };

    signUp(userInfo);
  };

  componentWillUnmount() {
    const { clearError } = this.props;

    clearError();
  }

  render() {
    const { classes, error } = this.props;
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
            {error && <Typography color="error">{error}</Typography>}
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

const mapStateToProps = (state: IReduxState) => ({
  error: state.error
});

export default connect(
  mapStateToProps,
  { setError: setErrorAction, clearError: clearErrorAction, signUp: signUpAction }
)(withStyles(styles)(SignUp));
