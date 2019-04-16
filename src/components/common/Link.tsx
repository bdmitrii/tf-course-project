import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Link, { LinkProps } from '@material-ui/core/Link';
import { withStyles, createStyles } from '@material-ui/core/styles';

interface IProps extends LinkProps {
  to: string;
}

const styles = () => createStyles({});

const MyLink = ({ to, children, ...props }: any) => (
  <RouterLink {...props} to={to}>
    {children}
  </RouterLink>
);

const StyledLink = ({ to, children, ...props }: any) => (
  <Link underline="none" to={to} {...props} component={MyLink}>
    {children}
  </Link>
);

export default withStyles(styles)(StyledLink);
