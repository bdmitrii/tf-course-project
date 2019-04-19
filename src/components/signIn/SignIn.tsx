import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles, createStyles, Theme, WithStyles } from '@material-ui/core/styles';

import { connect } from 'react-redux';

import { Link as RouterLink } from 'react-router-dom';
import { signInAction } from '../../actions/authActions';

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
  signIn?: typeof signInAction;
}

interface IState {
  login: string;
  password: string;
}

class SignIn extends Component<IProps, Partial<IState>> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      login: '',
      password: ''
    };
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { signIn } = this.props;

    const user = {
      login: this.state.login,
      password: this.state.password
    };

    if (signIn) {
      signIn(user);
    }
  };

  render() {
    const { classes } = this.props;

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

export default connect(
  null,
  { signIn: signInAction }
)(withStyles(styles)(SignIn));
