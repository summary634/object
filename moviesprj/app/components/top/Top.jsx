import React,{Component} from 'react';
import axios from 'axios';
import { Row, Col } from 'antd';
import  '../comingsoon/comingsoon.css'

class Top extends Component{

    constructor(){
        super();
        this.state={
            Top:[]

        }
    }
    componentWillMount(){
        axios.get('../app/json/Top250.json')
            .then((response)=>{
                this.setState({
                    Top:response.data.subjects
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
                    this.state.Top.map((item,key)=>{
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

export default Top;