import React from 'react'

export default function TreeElement({ treeElement }) {
    return (
        <div>
            <label>
                {treeElement.firstName + " "+ treeElement.lastName}
            </label> 
        </div>
    )
}
