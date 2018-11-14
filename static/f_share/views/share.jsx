import React from 'react'
import { connect } from 'react-redux'
import * as shareAction from '../actions/share'
import ShareComponent from '../components/share'

class ShareContainer extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.fetchInitShareList()
    }
    render(){
        return <ShareComponent {...this.props} />
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
    }  
})

export default connect(mapStateToProps, mapDispatchToProps)(ShareContainer);