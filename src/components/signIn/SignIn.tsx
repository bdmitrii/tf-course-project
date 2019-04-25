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

import { Link as RouterLink } from 'react-router-dom';
import { signInAction } from '../../actions/authActions';
import { clearErrorAction } from '../../actions/errorActions';
import { IUserAuth } from '../../constants/interfaces';

import { IState as IReduxState } from '../../constants/interfaces';
import styles from '../../styles/form';

interface IProps extends WithStyles<typeof styles> {
  signIn: typeof signInAction;
  clearError: typeof clearErrorAction;
  error: string;
}

interface IState extends IUserAuth {}

class SignIn extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      login: '',
      password: ''
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

    const { signIn } = this.props;

    const user: IUserAuth = {
      login: this.state.login,
      password: this.state.password
    };

    if (signIn) {
      signIn(user);
    }
  };

  componentWillUnmount() {
    const { clearError } = this.props;

    clearError();
  }

  render() {
    const { classes, error } = this.props;

    return (
      <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h5">
            Войти
          </Typography>
          <form className={classes.form} onSubmit={this.handleSubmit}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="login">Логин</InputLabel>
              <Input
                id="login"
                name="login"
                autoComplete="login"
                autoFocus
                onChange={this.handleChange}
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Пароль</InputLabel>
              <Input
                name="password"
                type="password"
                id="password"
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
              Войти
            </Button>
            <Button
              fullWidth
              variant="outlined"
              color="primary"
              size="small"
              className={classes.register}
              component={(props: any) => (
                <RouterLink {...props} to="/signup">
                  {props.children}
                </RouterLink>
              )}
            >
              или зарегистрироваться
            </Button>
          </form>
        </Paper>
      </main>
    );
  }
}

const mapStateToProps = (state: IReduxState) => {
  return {
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { signIn: signInAction, clearError: clearErrorAction }
)(withStyles(styles)(SignIn));
