import React from 'react'
import { connect } from 'react-redux'
import * as shareAction from '../actions/share'
import ShareComponent from '../components/share'
import ShareCategoryComponent from '../components/shareCategory'
class ShareContainer extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.fetchInitShareList()
    }
    render(){
        return (
            <React.Fragment>
                <ShareComponent {...this.props} />
                <ShareCategoryComponent {...this.props} title="添加分类"/>
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
    fetchSaveCategory: (category) => {
        dispatch(shareAction.F_SHARE_FETCH_SAVE_SHARE_CATEGORY(category))
    }  
})

export default connect(mapStateToProps, mapDispatchToProps)(ShareContainer);