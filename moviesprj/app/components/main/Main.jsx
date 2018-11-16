import React,{Component} from 'react';
import axios from 'axios';
import { Row, Col } from 'antd';
import  '../comingsoon/comingsoon.css'


class Main extends Component{

	constructor(props){
		super(props);
		this.state = {
			movies:[],
            defaultPageSize:5,
            total:0,    //总页数
            current:1,   //当前页码
            pageSize:4,  //每页条数
		}

		console.log(props)
	}

	componentWillMount(){
		axios.get('../../app/json/top250.json')
		.then(response=>{
            console.log(response);
            this.setState({
                pageSize:(response.data.count)/4,
				movies:response.data.subjects,
                total:response.data.count,

			});
            // console.log(this.state.pageSizeOptions)
		})
		.catch(error=>{

		})
	}
    //分页

	render(){
		return (
			<div >
				{
					this.state.movies.map((item,key)=>{
						return (
								<Col span={6} key={key} className='conten'>
									<img className='img' src={item.images.small} />
									<h4>{item.title}</h4>
								</Col>
						)
					})

				}


				
			</div>
		)
	}

}

export default Main;