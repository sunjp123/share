import React from 'react'
import {fetchGet,fetchPost} from '../common/http'
export default class ShareHome extends React.Component{
	constructor(){
		super()
	}
	componentDidMount(){
		fetchGet('http://localhost:8989/share/save',{title:"test",link:"test",author:"test",privite:false})
	}
	render(){
		return 'hi'
	}
}