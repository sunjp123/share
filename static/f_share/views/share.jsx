import React from 'react'
import { connect } from 'react-redux'
import * as shareAction from '../actions/share'
import ShareComponent from '../components/share'
import ShareItemComponent from '../components/shareItem'
import ShareCategoryComponent from '../components/shareCategory'

class ShareContainer extends React.Component{
    constructor(props){
        super(props)
        this.saveCategory = this.saveCategory.bind(this)
        this.openAddCategoryDialog = this.openAddCategoryDialog.bind(this)
        this.openAddItemDialog = this.openAddItemDialog.bind(this)
        this.saveItem = this.saveItem.bind(this)
        this.state = {
            addCategory:false,
            addItem:false,
            category:''
        }
    }
    openAddCategoryDialog(){
        this.setState({
            addCategory:true
        })
    }
    saveCategory(category){
        new Promise((resolve,reject)=>{
            this.props.fetchSaveCategory(category,resolve,reject)
        }).then(()=>{
            this.setState({
                addCategory:false
            })
        }).catch((e)=>{
            console.error(e)
        })
    }
    openAddItemDialog(category){
        console.error(category)
        this.setState({
            addItem:true,
            category
        })
    }
    saveItem(item){
        new Promise((resolve,reject)=>{
            this.props.fetchSaveItem(item,resolve,reject)
        }).then(()=>{
            this.setState({
                addItem:false
            })
        }).catch((e)=>{
            console.error(e)
        })
    }
    componentDidMount(){
        this.props.fetchInitShareList()
    }
    render(){
        return (
            <React.Fragment>
                <ShareComponent openAddItemDialog={this.openAddItemDialog}  openAddCategoryDialog={this.openAddCategoryDialog} {...this.props} />
                <ShareCategoryComponent saveCategory={this.saveCategory} open={this.state.addCategory} {...this.props} title="添加分类"/>
                <ShareItemComponent category={this.state.category} saveItem={this.saveItem} open={this.state.addItem} {...this.props} title="添加项目"/>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        share: state.get("share")
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchInitShareList: () => {
        dispatch(shareAction.F_SHARE_FETCH_SHARE_INIT_ACTION())
    },
    fetchSaveCategory: (category,resolve,reject) => {
        dispatch(shareAction.F_SHARE_FETCH_SAVE_SHARE_CATEGORY(category,resolve,reject))
    },
    fetchSaveItem: (item,resolve,reject) => {
        dispatch(shareAction.F_SHARE_FETCH_SAVE_SHARE_ITEM(item,resolve,reject))
    }    
})

export default connect(mapStateToProps, mapDispatchToProps)(ShareContainer);