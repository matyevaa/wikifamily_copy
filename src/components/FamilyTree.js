import React from 'react'
import TreeElement from './TreeElement'

export default function FamilyTree({ treeElements}) {
    return (
        //<div>
        //    {treeElements.length} 
        //</div>
        treeElements.map(treeElement => {
            return <TreeElement key={treeElement.id} treeElement = {treeElement} />
        })

    )
}
