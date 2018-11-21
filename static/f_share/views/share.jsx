import React from 'react'
import { connect } from 'react-redux'
import * as shareAction from '../actions/share'
import ShareComponent from '../components/share'
import ShareItemComponent from '../components/shareItem'
import ShareCategoryComponent from '../components/shareCategory'
import Snackbar from '../../f_common/components/Snackbar/Snackbar'
class ShareContainer extends React.Component{
    constructor(props){
        super(props)
        this.saveCategory = this.saveCategory.bind(this)
        this.deleteCategory = this.deleteCategory.bind(this)
        this.openAddCategoryDialog = this.openAddCategoryDialog.bind(this)
        this.openEditCategoryDialog = this.openEditCategoryDialog.bind(this)
        this.openAddItemDialog = this.openAddItemDialog.bind(this)
        this.openEditItemDialog = this.openEditItemDialog.bind(this)
        this.saveItem = this.saveItem.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
        this.cancelItem = this.cancelItem.bind(this)
        this.state = {
            categoryDialog:false,
            itemDialog:{
                open:false,
                title:'添加项目',
                category:'',
                item:null
            },
            category:'',
            categoryName:'',
            categoryTitle:'添加分类',
            categoryId:'',
            snackbar:{
                autoHideDuration:3000,
                open:false,
                place:'tc',
                message:'',
                color:'success',
                onClose:()=>{
                    this.setState({
                        snackbar:{
                            ...this.state.snackbar,
                            open:false,
                        }
                    })
                }
            }

        }
    }
    openAddCategoryDialog(){
        this.setState({
            categoryId:'',
            categoryTitle:'添加分类',
            categoryDialog:true,
            categoryName:'新分类名'
        })
    }
    openEditCategoryDialog(_id,name){
        this.setState({
            categoryId:_id,
            categoryTitle:'修改分类',
            categoryDialog:true,
            categoryName:name
        })
    }
    saveCategory(category){
        new Promise((resolve,reject)=>{
            this.props.fetchSaveCategory(category,resolve,reject)
        }).then(()=>{
            this.setState({
                categoryDialog:false
            })
        }).catch((e)=>{
            console.error(e)
        })
    }
    deleteCategory(_id){
        new Promise((resolve,reject)=>{
            this.props.fetchDeleteCategory(_id,resolve,reject)
        }).then(()=>{
            this.setState({
                snackbar:{
                    ...this.state.snackbar,
                    open:true,
                    message:'该类已经被删除',
                    color:'danger'
                }
            })
        }).catch((e)=>{
            console.error(e)
        })
    }
    openAddItemDialog(category){
        this.setState({
            itemDialog:{
                ...this.state.itemDialog,
                open:true,
                title:'添加项目',
                category
            }
        })
    }
    openEditItemDialog(category,item){
        this.setState({
            itemDialog:{
                ...this.state.itemDialog,
                open:true,
                title:'修改项目',
                item,
                category
            }
        })
    }
    saveItem(item){
        new Promise((resolve,reject)=>{
            this.props.fetchSaveItem(item,resolve,reject)
        }).then(()=>{
            this.setState({
                itemDialog:{
                    ...this.state.itemDialog,
                    open:false
                }
            })
        }).catch((e)=>{
            console.error(e)
        })
    }
    deleteItem(category,item){
        new Promise((resolve,reject)=>{
            this.props.fetchDeleteItem({category,...item},resolve,reject)
        }).then(()=>{
            this.setState({
                snackbar:{
                    ...this.state.snackbar,
                    open:true,
                    message:'该项已经被删除',
                    color:'danger'
                }
            })
        }).catch((e)=>{
            console.error(e)
        })
    }
    cancelItem(){
        this.setState({
            itemDialog:{
                ...this.state.itemDialog,
                open:false,
            }
        })
    }
    componentDidMount(){
        this.props.fetchInitShareList()
    }
    render(){
        return (
            <React.Fragment>
                <ShareComponent deleteCategory={this.deleteCategory} 
                                openEditItemDialog={this.openEditItemDialog} 
                                openAddItemDialog={this.openAddItemDialog}  
                                openAddCategoryDialog={this.openAddCategoryDialog} 
                                openEditCategoryDialog={this.openEditCategoryDialog}
                                deleteItem = {this.deleteItem} 
                                {...this.props} />
                <ShareCategoryComponent saveCategory={this.saveCategory}  open={this.state.categoryDialog} {...this.props} _id={this.state.categoryId} title={this.state.categoryTitle} defaultValue={this.state.categoryName}/>
                <ShareItemComponent 
                    cancelItem={this.cancelItem} 
                    saveItem={this.saveItem}
                    open = {this.state.itemDialog.open}
                    {...this.state.itemDialog} 
                    {...this.props} />
                <Snackbar {...this.state.snackbar}/>
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
    fetchDeleteCategory: (_id,resolve,reject) => {
        dispatch(shareAction.F_SHARE_FETCH_DELETE_SHARE_CATEGORY(_id,resolve,reject))
    },
    fetchSaveItem: (item,resolve,reject) => {
        dispatch(shareAction.F_SHARE_FETCH_SAVE_SHARE_ITEM(item,resolve,reject))
    },
    fetchDeleteItem:(item,resolve,reject) => {
        dispatch(shareAction.F_SHARE_FETCH_DELETE_SHARE_ITEM(item,resolve,reject))
    }    
})

export default connect(mapStateToProps, mapDispatchToProps)(ShareContainer);