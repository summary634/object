import React,{Component} from 'react';
import axios from 'axios';
import { Row, Col } from 'antd';
import  '../comingsoon/comingsoon.css'

class ThreaterMovies extends Component{

    constructor(){
        super();
        this.state={
            ThreaterMovies:[]

        }
    }
    componentWillMount(){
        axios.get('../app/json/threaders.json')
            .then((response)=>{
                this.setState({
                    ThreaterMovies:response.data.subjects
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
                    this.state.ThreaterMovies.map((item,key)=>{
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

export default ThreaterMovies;