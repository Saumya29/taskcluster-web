import { Fragment, PureComponent } from 'react';
import { node, string, object, oneOfType } from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

@withStyles(theme => ({
  divider: {
    margin: `${theme.spacing.unit}px 0`,
  },
  hasNoDescription: {
    marginTop: 45,
  },
}))
/**
 * Each page could contain important information for the new user
 * of a particular view, but often doesn't warrant needing to be
 * shown every time. The help view is a good place
 * for this kind of information.
 */
export default class HelpView extends PureComponent {
  static propTypes = {
    /** A description about the view. */
    description: oneOfType([string, object]),
    /** Important information about the view. */
    children: node,
  };

  static defaultProps = {
    description: null,
    children: null,
  };

  render() {
    const { classes, children, description } = this.props;

    return (
      <Fragment>
        {description && (
          <Fragment>
            <Typography variant="subheading">Description</Typography>
            {typeof description === 'string' ? (
              <Typography paragraph>{description}</Typography>
            ) : (
              description
            )}
          </Fragment>
        )}
        {description && children && <Divider className={classes.divider} />}
        <div
          className={classNames({ [classes.hasNoDescription]: !description })}>
          {children}
        </div>
      </Fragment>
    );
  }
}
