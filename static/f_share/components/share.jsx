import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components

import GridItem from "../../f_common/components/Grid/GridItem.jsx";
import GridContainer from "../../f_common/components/Grid/GridContainer.jsx";
import Table from "../../f_common/components/Table/Table.jsx";
import Tasks from "../../f_common/components/Tasks/Tasks.jsx";
import CustomTabs from "../../f_common/components/CustomTabs/CustomTabs.jsx";
import Danger from "../../f_common/components/Typography/Danger.jsx";
import Card from "../../f_common/components/Card/Card.jsx";
import CardHeader from "../../f_common/components/Card/CardHeader.jsx";
import CardIcon from "../../f_common/components/Card/CardIcon.jsx";
import CardBody from "../../f_common/components/Card/CardBody.jsx";
import CardFooter from "../../f_common/components/Card/CardFooter.jsx";

import { bugs, website, server } from "../../f_common/variables/general.jsx";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "../../f_common/variables/charts.jsx";

import dashboardStyle from "../../assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

class Share extends React.Component {
  constructor(props){
	  super(props)
	  this.state = {
		 value: 0
	  }
  }
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        
        <GridContainer onClick={this.props.openAddCategoryDialog}>
          <GridItem xs={12} sm={6} md={12}>
            <Card>
              <CardHeader color="info" stats icon>
                <CardIcon color="info">
                  <Icon>content_copy</Icon>
                </CardIcon>
              </CardHeader>
              <CardBody>
                <GridContainer> 
                    <GridItem xs={12} sm={6} md={3}>
                        <h1>sdfsdfsdfsdfdsf</h1>
                    </GridItem>
                    <GridItem xs={12} sm={6} md={3}>
                        <h1>sdfsdfsdfsdfdsf</h1>
                    </GridItem>
                    <GridItem xs={12} sm={6} md={3}>
                        <h1>sdfsdfsdfsdfdsf</h1>
                    </GridItem>
                    <GridItem xs={12} sm={6} md={3}>
                        <h1>sdfsdfsdfsdfdsf</h1>
                    </GridItem>
                    <GridItem xs={12} sm={6} md={3}>
                        <h1>sdfsdfsdfsdfdsf</h1>
                    </GridItem>
                    <GridItem xs={12} sm={6} md={3}>
                        <h1>sdfsdfsdfsdfdsf</h1>
                    </GridItem>
                </GridContainer>
              </CardBody>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Danger>
                    <BugReport />
                  </Danger>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    Get more space
                  </a>
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

Share.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Share);
