import React from "react";
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Hidden from "@material-ui/core/Hidden";
import Poppers from "@material-ui/core/Popper";
// @material-ui/icons
import Person from "@material-ui/icons/Person";
import Notifications from "@material-ui/icons/Notifications";
import Dashboard from "@material-ui/icons/Dashboard";
import Search from "@material-ui/icons/Search";
// core components
import CustomInput from "../CustomInput/CustomInput.jsx";
import Button from "../CustomButtons/Button.jsx";

import UserContainer from "../../containers/User/userContainer"

import headerLinksStyle from "../../../assets/jss/material-dashboard-react/components/headerLinksStyle.jsx";

class HeaderLinks extends React.Component {
  state = {
    openMessage: false,
    openPerson: false,
    openUserInfo:false
  };
  handleMessageToggle = () => {
    this.setState(state => ({ openMessage: !state.openMessage }));
  };
  handlePersonToggle = () => {
    if(!window.__USER_INFO__ || !window.__USER_INFO__._id){
      return this.setState(state => ({ openUserInfo: !state.openUserInfo }));
    }
    this.setState(state => ({ openPerson: !state.openPerson ,openUserInfo:false}));
  };
  handlePersonClose = event => {
    if (!this.personEl.contains(event.target)) {
      this.setState({ openPerson: false});
    }
  };
  handleMessageClose = event => {
    if (!this.messageEl.contains(event.target)) {
      this.setState({ openMessage: false});
    }
  }
  onLogout(){
    this.props.fetchLogoutUser()
  }
  onModifyUser(){
    this.setState(state => ({ openUserInfo: !state.openUserInfo }));
  }
  render() {
    const { classes } = this.props;
    const { openMessage ,openPerson,openUserInfo} = this.state;
    return (
      <div>
        <div className={classes.searchWrapper}>
          <CustomInput
            formControlProps={{
              className: classes.margin + " " + classes.search
            }}
            inputProps={{
              placeholder: "Search",
              inputProps: {
                "aria-label": "Search"
              }
            }}
          />
          <Button color="white" aria-label="edit" justIcon round>
            <Search />
          </Button>
        </div>
        <Button
          color={window.innerWidth > 959 ? "transparent" : "white"}
          justIcon={window.innerWidth > 959}
          simple={!(window.innerWidth > 959)}
          aria-label="Dashboard"
          className={classes.buttonLink}
        >
          <Dashboard className={classes.icons} />
          <Hidden mdUp implementation="css">
            <p className={classes.linkText}>主页</p>
          </Hidden>
        </Button>
        <div className={classes.manager}>
          <Button
            buttonRef={node => {
              this.messageEl = node;
            }}
            color={window.innerWidth > 959 ? "transparent" : "white"}
            justIcon={window.innerWidth > 959}
            simple={!(window.innerWidth > 959)}
            aria-owns={openMessage ? "menu-list-grow-message" : null}
            aria-haspopup="true"
            onClick={this.handleMessageToggle}
            className={classes.buttonLink}
          >
            <Notifications className={classes.icons} />
            <span className={classes.notifications}>5</span>
            <Hidden mdUp implementation="css">
              <p onClick={this.handleClick} className={classes.linkText}>
                消息
              </p>
            </Hidden>
          </Button>
          <Poppers
            open={openMessage}
            anchorEl={this.messageEl}
            transition
            disablePortal
            className={
              classNames({ [classes.popperClose]: !openMessage }) +
              " " +
              classes.pooperNav
            }
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                id="menu-list-grow-message"
                style={{
                  transformOrigin:
                    placement === "bottom" ? "center top" : "center bottom"
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={this.handleMessageClose}>
                    <MenuList role="menu">
                      <MenuItem
                        onClick={this.handleMessageClose}
                        className={classes.dropdownItem}
                      >
                        Mike John responded to your email
                      </MenuItem>
                      <MenuItem
                        onClick={this.handleMessageClose}
                        className={classes.dropdownItem}
                      >
                        You have 5 new tasks
                      </MenuItem>
                      <MenuItem
                        onClick={this.handleMessageClose}
                        className={classes.dropdownItem}
                      >
                        You're now friend with Andrew
                      </MenuItem>
                      <MenuItem
                        onClick={this.handleMessageClose}
                        className={classes.dropdownItem}
                      >
                        Another Notification
                      </MenuItem>
                      <MenuItem
                        onClick={this.handleMessageClose}
                        className={classes.dropdownItem}
                      >
                        Another One
                      </MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Poppers>
        </div>
        <div className={classes.manager}>
        <Button
          buttonRef={node => {
            this.personEl = node;
          }}
          color={window.innerWidth > 959 ? "transparent" : "white"}
          justIcon={window.innerWidth > 959}
          simple={!(window.innerWidth > 959)}
          aria-label="Person"
          aria-haspopup="true"
          aria-owns={openPerson ? "menu-list-grow-person" : null}
          onClick={this.handlePersonToggle}
          className={classes.buttonLink}
        >
          <Person className={classes.icons} />
          <Hidden mdUp implementation="css">
            <p className={classes.linkText}>用户信息</p>
          </Hidden>
        </Button>
        <Poppers
            open={openPerson}
            anchorEl={this.personEl}
            transition
            disablePortal
            className={
              classNames({ [classes.popperClose]: !openPerson }) +
              " " +
              classes.pooperNav
            }
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                id="menu-list-grow-person"
                style={{
                  transformOrigin:
                    placement === "bottom" ? "center top" : "center bottom"
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={this.handlePersonClose}>
                    <MenuList role="menu">
                      <MenuItem
                        onClick={(event)=>{this.onModifyUser();this.handlePersonClose(event)}}
                        className={classes.dropdownItem}
                      >
                        修改用户信息
                      </MenuItem>
                      <MenuItem
                        onClick={(event)=>{this.onLogout();this.handlePersonClose(event)}}
                        className={classes.dropdownItem}
                      >
                        退出登录
                      </MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Poppers>
          </div>
          <UserContainer open={openUserInfo} onCancel={this.handlePersonToggle}/>
      </div>
    );
  }
}

export default withStyles(headerLinksStyle)(HeaderLinks);
