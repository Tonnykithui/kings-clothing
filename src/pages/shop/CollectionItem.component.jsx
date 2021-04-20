import React from 'react'
import SingleItem from '../../components/collectionItemSingle/SingleItem.component'
import './CollectionItem.styles.scss'

const CollectionItem = ({ id, items, name, title}) => {
    return (
        <div className='collectionItem'>
            <h1 className='collectionTitle'>{title}</h1>
            <div className='collectionItemRow'>
            {
                items.filter((item, idx) => idx < 4).map(({id, ...otherProps}) => {
                    return(
                        <div className='collection'>
                            <SingleItem key={id} {...otherProps}/>
                        </div>
                    )
                })
            }
            </div>
            
        </div>
    )
}

export default CollectionItem