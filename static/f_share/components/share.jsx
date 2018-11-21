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
import Tips from "@material-ui/icons/Info";
import AddIcon from "@material-ui/icons/Add"
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from "@material-ui/icons/Edit"
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
import CardContent from "../../f_common/components/Card/CardContent.jsx";
import CardFooter from "../../f_common/components/Card/CardFooter.jsx";
import { ButtonBase , Button , Tooltip } from "@material-ui/core";

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
    this.onOpenEditDialog = this.onOpenEditDialog.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
	  this.state = {
		 value: 0
	  }
  }
  onOpenEditDialog(category,item){
    this.props.openEditItemDialog(category,item)
  }
  deleteItem(category,item){
    this.props.deleteItem(category,item)
  }
  componentWillReceiveProps(nextProps){
    
  }
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  render() {
    const { classes , share} = this.props,categories = share.get('categories')||[]
    return (
      <div className={classes.container}>
        {
          categories.map((category,index)=>{
            return (
              <GridContainer key={index} >
              <GridItem xs={12} sm={6} md={12}>
                <Card>
                  <CardHeader color="info" stats icon>
                    <CardIcon color="info">
                      <Icon>{category.name}</Icon>
                    </CardIcon>
                      <Tooltip title="添加内容">
                      <Button variant="fab" color="inherit" aria-label="Add" className={classes.button} onClick={()=>{this.props.openAddItemDialog(category._id)}}>
                      <AddIcon />
                      </Button>
                      </Tooltip>
                      <Tooltip title="编辑分类">
                      <Button variant="fab" color="inherit" aria-label="Edit" className={classes.button} onClick={()=>{this.props.openEditCategoryDialog(category._id,category.name)}}>
                        <EditIcon color="action" />
                      </Button>
                      </Tooltip>
                      <Tooltip title="删除分类">
                      <Button variant="fab"  aria-label="Delete" className={classes.button} onClick={()=>{this.props.deleteCategory(category._id)}}>
                        <DeleteIcon />
                      </Button>
                      </Tooltip>
                  </CardHeader>
                  <CardBody>
                  <GridContainer>
                    {
                      category.children&&category.children.map((item,index)=>{
                         return (
                           
                            <CardContent key={index} deleteItem={()=>{this.deleteItem(category._id,item)}} onOpenEditDialog={()=>this.onOpenEditDialog(category._id,item)} info={{...item,img:'../../public/icon/logo.svg'}} xs={4} sm={2} md={1}/>
                          
                         )
                      })
                    } 
                  </GridContainer>
                  </CardBody>
                  {
                    !category.children || category.children.length == 0 ?(
                      <CardFooter stats>
                        <div className={classes.stats}>
                          <Danger>
                            <Warning />
                          </Danger>
                          <span>该类下暂无内容，请添加有效内容</span>
                        </div>
                      </CardFooter> 
                    ):null
                  }

                </Card>
              </GridItem>
            </GridContainer>
            )
            
          })
        }
        <GridContainer key={categories.length} addButton={true} onClick={this.props.openAddCategoryDialog}>
              <GridItem xs={12} sm={6} md={12}>
                <Card>
                  <CardHeader color="info" stats icon>
                    <CardIcon color="info">
                      <Icon>
                        <AddIcon/>
                      </Icon>
                    </CardIcon>
                  </CardHeader>
                  
                  <CardFooter stats>
                    <div className={classes.stats}>
                      <Danger>
                        <Tips color={'action'}/>
                      </Danger>
                    </div>
                    <span>点击卡片添加</span>
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
