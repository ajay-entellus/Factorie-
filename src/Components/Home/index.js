import { Box, withStyles } from '@material-ui/core'
import React, { Component } from 'react'
import Styles from './Styles'
import HEX from '../../Assets/Hex/White.svg'
import WATERMARK from '../../Assets/Yellow watermark.svg'
import DASHBOARD from '../../Assets/Dashboard.png'

import Title from '../Title'

class Home extends Component {
    render() {
        const { classes } = this.props
        return (
            <Box className={classes.container} id={this.props.ids} position='relative'>
                <Box
                    position='relative'
                    height={{ xs: '500px', sm: '600px', md: '850px', lg: "850px" }}>

                    <Box maxWidth={{ xs: "400", sm: "600px", md: "940px", lg: "940px" }} className={classes.home}>
                        <Title title="manufacture with efficiency" fontSize='72px' />
                        <Box paddingLeft={{ md: '100px', lg: '100px' }}
                            fontSize={{ xs: "", md: '30px', lg: "30px" }}
                            mt="20px"
                            mb={{ md: "100px" }}
                        >Increase profitability by planning the projects,
                            tracking the performance of machines, guaging the productivity
                         of employees and defining quality standards</Box>
                    </Box>
                    <Box position='absolute'
                        right='0px'
                        bottom='0px'
                    ><img src={WATERMARK} alt="" className={classes.watermark} style={{ display: "block" }} /></Box>
                    <Box position='absolute' ><img src={HEX} alt="" className={classes.hex} /></Box>

                </Box >
                <Box position='relative' >
                    <Box
                        id={this.props.id}
                        // position='relative'
                        display='flex'
                        justifyContent='space-between'
                        alignItems='flex-end'
                        flexDirection={{ xs: "column-reverse", sm: "column-reverse", md: "row" }}
                        className={classes.colors}
                    >
                        <Box width={{ sm: 'auto', md: '100%' }} className={classes.about} >
                            <Box ml={{ md: "-100px" }} pb={{ xs: '20px' }}><Title title="about factorie" /></Box>
                            <Box
                                color="#293557"
                                fontSize={{  md: '20px' }}
                                width={{ md: "400px", lg: "500px" }}
                                lineHeight="33px"
                            >
                                Factorie is an industrial IoT-driven <strong>intelligent ecosystem </strong>
                                that manages your production planning, increases production &
                                machine efficiency, monitors maintenance activities & energy consumption,
                                helps bolster workforce efficiency and assesses the financial
                                viability of your factory.</Box>
                        </Box>
                        <Box
                            flex='1'
                            zIndex='99'
                            width='100%'
                        >
                            <img src={DASHBOARD} alt=""
                                className={classes.dashboard}
                                style={{ display: "block", }}
                            />
                        </Box>
                    </Box >
                </Box>

            </Box >
        )
    }
}
export default withStyles(Styles)(Home)