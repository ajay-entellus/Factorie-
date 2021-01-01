import { Box } from '@material-ui/core'
import React, { Component } from 'react'
import Title from './Title'
import DATA from '../Assets/Data Illustration.svg'
import INSIGHTS from '../Assets/Insights Illustration.svg'
import HORI from '../Assets/Yellow Boxes-horizontal.svg'
import VERTICAL from '../Assets/Yellow Boxes-vertical.svg'
import HEX from '../Assets/Hex 1.svg'


class HowItsWorks extends Component {

    render() {
        const data = 'We track the performance of your employees and monitor the machines'
        const insights = "And transform the data into meaningful insights"
        return (
            <Box pt={{ xs: "80px", md: "100px", lg: "100px" }} position='relative' id={this.props.id}>
                <Title title="how it works" />
                <Box position='absolute' top="30px" right='0' display={{ xs: "none", sm: "none", md: "block" }}>
                    <img src={HEX} alt='' />
                </Box>
                <Box
                    display="flex"
                    flexDirection={{ xs: "column", sm: "row" }}
                    paddingTop={{ xs: '40px', sm: "150px" }}
                    paddingBottom={{ xs: '40px', sm: "150px" }}
                    alignItems='center'
                    justifyContent="space-around"
                    color="#474747"
                    // display='grid'
                    // gridTemplateColumns={{ xs: "1fr ", sm: "1fr", md: "1fr 1fr 1fr" }}
                    textAlign='center'
                >

                    <Box display="flex" flexDirection='column' width={{ xs: "250px", md: "310px" }} textAlign='center'>
                        <img src={DATA} alt="" />
                        <Box mt={{ xs: "24px", md: "40px" }} fontSize={{ xs: '16px', md: '24px' }}>{data}</Box>
                    </Box>

                    <Box display="flex"
                        flexDirection='column'
                        width={{ xs: "250px", md: "280px" }}
                        alignItems='center'
                        marginBottom={{ md: "14vh",lg:"14vh" }}
                        paddingY={{ xs: "30px", sm: "30px", md: "0px" }}
                    >
                        <img src={window.innerWidth >= 768 ? HORI : VERTICAL} alt="" />
                    </Box>
                    <Box display="flex" flexDirection='column' width={{ xs: "250px", md: "280px" }} textAlign='center'>
                        <img src={INSIGHTS} alt="" />
                        <Box mt={{ xs: "24px", md: "40px" }} fontSize={{ xs: '16px', md: '24px' }}>{insights}</Box>
                    </Box>


                </Box>


            </Box >
        )
    }
}
export default HowItsWorks