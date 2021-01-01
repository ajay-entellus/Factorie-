import { Box } from '@material-ui/core'
import React, { Component } from 'react'

class Title extends Component {
    render() {
        const { title, fontSize } = this.props
        return (
            <Box
                id={this.props.id}
                color="#1A92E5"
                fontSize={{ xs: '36px', lg: fontSize || '64px' }}
                textAlign={{ xs: "center", md: 'left' }}
                fontWeight='700'
                pl={{ xs: '0', md: "100px", lg: "100px" }}
                maxWidth={{ xs: "280px", md: "100%" }}
                mx='auto'
            >
                { title}
            </Box >
        )
    }
}
export default Title