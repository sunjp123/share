import React from 'react'
import {fetchGet,fetchPost} from '../common/http'
export default class ShareHome extends React.Component{
	constructor(){
		super()
	}
	componentDidMount(){
		fetchGet('http://localhost:8989/share/list/12324').then(res => res.data).then(data=>{
			console.log(data)
		})
	}
	render(){
		return 'hi'
	}
}