import React, { Component } from 'react'
import MenuItem from '../menuItem/MenuItem'
import './MenuWrapper.styles.scss'

export default class MenuWrapper extends Component {
    constructor(){
        super();

        this.state = {
            sessions:[
                {
                    id:1,
                    linkUrl:'',
                    title:'Snickers',
                    img:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
                },
                {
                    id:2,
                    linkUrl:'hats',
                    title:'Hats',
                    img:'https://images.unsplash.com/photo-1529958030586-3aae4ca485ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'
                },
                {
                    id:3,
                    linkUrl:'',
                    title:'Jackets',
                    img:'https://images.unsplash.com/photo-1559551409-dadc959f76b8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80'
                },
                {
                    id:4,
                    linkUrl:'',
                    title:'Women',
                    img:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80'
                },
                {
                    id:5,
                    linkUrl:'',
                    title:'Men',
                    img:'https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1510&q=80'
                }
            ]
        }
    }
    render() {
        return (
            <div className="menuWrapper">
                {this.state.sessions.map( ({ id, ...otherSectionProps }) => {
                    return <MenuItem key={id} {...otherSectionProps}/>
                })}
            </div>
        )
    }
}
