import React from 'react'
import { FlexBox, FlexItem } from '../styles/styledComponents/Container'

const FlexProperties = () => {
    return (
        <FlexBox>
            <FlexItem className="one">Flex 1</FlexItem>
            <FlexItem className="two">Flex 2</FlexItem>
            <FlexItem className="three">flex 3</FlexItem>
        </FlexBox>
    )
}

export default FlexProperties
