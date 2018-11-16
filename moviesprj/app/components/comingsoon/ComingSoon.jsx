import React,{Component} from 'react';
import axios from 'axios';
import { Row, Col } from 'antd';
import  './comingsoon.css'

class ComingSoon extends Component{

	constructor(){
		super();
		this.state={
            comingSoon:[]

		}
	}
    componentWillMount(){
		axios.get('../app/json/comingsoon.json')
			.then((response)=>{
				this.setState({
                    comingSoon:response.data.subjects
				})
				console.log(response)
			}).then((error)=>{
            console.log(error)
			})
	}
	render(){
		return (
            <div >
                {
                    this.state.comingSoon.map((item,key)=>{
                        return (
                            <Col span={6} key={key} className='conten'>
                                <img className='img' src={item.images.small} />
                                <span>{item.title}</span>
                            </Col>
                        )
                    })
                }

            </div>
		)
	}
}

export default ComingSoon;