import React, { Component } from 'react'
import SHOP_DATA from './ShopData'
import CollectionItem from './CollectionItem.component'
import './Shop.styles.scss'

export default class Shop extends Component {
    constructor(props){
        super(props)

        this.state = {
            collections: SHOP_DATA
        }
    }
    render() {
        const { collections } = this.state
        return (
            <div className='shop-page'>
                {
                   collections.map(({id, ...otherCollectionProp}) => {
                        return (
                        <div className='menuItems'>
                            <CollectionItem key={id} {...otherCollectionProp}/>
                        </div>
                        )
                    })
                }
            </div>
        )
    }
}
