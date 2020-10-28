import React, { Component } from "react";
import withStyles from "@material-ui/styles/withStyles";
import { Link, withRouter } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import { Link as MaterialLink } from "@material-ui/core";
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Menu from "./Menu";
import logo from "../../assets/car_drive.svg";
import styled from 'styled-components';

const styles = (theme) => ({
  flex: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
  },
  iconContainer: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  iconButton: {
    float: "right",
  },
  tabContainer: {
    marginLeft: 32,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  tabItem: {
    paddingTop: 20,
    paddingBottom: 20,
    minWidth: "auto",
  },
});

const StyledAppBar = styled(AppBar)`
box-shadow: none;
background-color: transparent;
padding-top: 15px;
position: absolute;
`;

const HeaderItem = styled(ListItem)`
display: inline-block;
    width: auto;
    padding: 15px 0;
    text-transform: capitalize;
    font-size: 17px;
    color: #e8e8e8;
    letter-spacing: 0;
    margin-right: 34px;
    font-weight: 500;`;


const CallToActionButton = styled(Button)`
text-transform: uppercase;
    font-size: 15px;
    line-height: 44px;
    font-weight: 500;
    height: 50px;
    border-radius: 4px;
    display: inline-block;
    border: 1px solid #0dc181;
    padding: 0 34px;
    color:  #0dc181;

    `;

class Topbar extends Component {
  state = {
    value: 0,
    menuDrawer: false,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  mobileMenuOpen = (event) => {
    this.setState({ menuDrawer: true });
  };

  mobileMenuClose = (event) => {
    this.setState({ menuDrawer: false });
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  current = () => {
    if (this.props.currentPath === "/home") {
      return 0;
    }
    if (this.props.currentPath === "/category") {
      return 1;
    }
    if (this.props.currentPath === "/tests") {
      return 2;
    }
    if (this.props.currentPath === "/blog") {
      return 3;
    }
    if (this.props.currentPath === "/about") {
      return 4;
    }
  };

  render() {
    const { classes, location } = this.props;

    const currentPage = location.pathname;

    return (
      <StyledAppBar className={currentPage != '/' ? 'banner-full' : ''}>
        <Toolbar id="back-to-top">
          <Container container fixed maxWidth="lg">
            <Grid container spacing={10} alignItems="baseline">
              <Grid item xs={12} className={classes.flex}>
                <div className={classes.inline}>
                  <Typography variant="h6" color="inherit" noWrap>
                    <Link to="/" className={classes.link}>
                      <div className="logo-container">
                        <img className="logo" src={logo} alt="auto testovi logo" />
                        <span className="logo-text">Auto Testovi</span>
                      </div>
                    </Link>
                  </Typography>
                </div>
                {!this.props.noTabs && (
                  <React.Fragment>
                    <div className={classes.iconContainer}>
                      <IconButton
                        onClick={this.mobileMenuOpen}
                        className={classes.iconButton}
                        color="inherit"
                        aria-label="Menu"
                      >
                        <div className="nav-icon">
                          <div></div>
                        </div>
                      </IconButton>
                    </div>
                    <div className={classes.tabContainer}>
                      <SwipeableDrawer
                        anchor="right"
                        width={100}
                        open={this.state.menuDrawer}
                        onClose={this.mobileMenuClose}
                        onOpen={this.mobileMenuOpen}
                      >
                        <AppBar title="Menu" />
                        <List>
                          {Menu.map((item, index) => (
                            <ListItem
                              component={item.external ? MaterialLink : Link}
                              href={item.external ? item.pathname : null}
                              to={
                                item.external
                                  ? null
                                  : {
                                    pathname: item.pathname,
                                    search: this.props.location.search,
                                  }
                              }
                              button
                              key={item.label}
                            >
                              <ListItemText primary={item.label} />
                            </ListItem>
                          ))}
                        </List>
                      </SwipeableDrawer>
                      <List>
                        {Menu.map((item, index) => (
                          (<HeaderItem button component="a" href={item.pathname}> {item.label}</HeaderItem>)
                        ))}
                        <CallToActionButton variant="outlined" disableElevation>Go work</CallToActionButton>
                      </List>
                    </div>
                  </React.Fragment>
                )}
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </StyledAppBar>
    );
  }
}

export default withRouter(withStyles(styles)(Topbar));
