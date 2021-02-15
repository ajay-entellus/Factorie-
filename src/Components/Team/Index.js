import { Box, withStyles } from '@material-ui/core'
import React, { Component } from 'react'
import Contact from '../Contact'
import Form from '../Form'
import Title from '../Title'

import POLYGON_LARGE from '../../Assets/Polygon Behind Image.svg'
import PROFILE from '../../Assets/Jitendra1.png'
import Styles from './Styles'



class Team extends Component {
    render() {
        const { classes } = this.props
        return (
            <Box pt={{ xs: "80px", md: "100px", lg: "100px" }} id={this.props.id} >
                <Title title="the team" />
                <Box display='flex' alignItems='flex-end' pt={{ xs: "0px", md: "50px", lg: "50px" }}>
                    <Box width="40%" display={{ xs: "none", sm: "none", md: "block", lg: "block" }}>
                        <Box position='relative'
                            height='60vh'
                            ml={{ lg: "60px" }}>
                            <Box position="absolute" bottom='100px' left="0">
                                <img src={POLYGON_LARGE} width='450px' alt="" />
                            </Box>
                            <Box position="absolute" bottom='0' left="0px">
                                {/* <img src={PROFILE} style={{ display: 'block' }} alt="profile" width="400px" height='500px' /> */}
                                <img src={PROFILE} style={{ display: 'block' }} alt="profile" width="400px" height='400px' />

                            </Box>
                        </Box>
                        <Box id={this.props.ids}><Contact /></Box>
                    </Box>
                    <Box width={{ xs: "100%", sm: "100%", md: '60%' }}>
                        <Box
                            m="auto"
                            display='flex'
                            flexDirection="column"
                            flex='1'
                            maxWidth='500px'
                            p={{ xs: "24px", sm: "24px", ms: "none" }}
                            justifyContent="center"
                            height={{ xs: "auto", md: '60vh' }}
                            alignContent='center'
                            textAlign={{ xs: "center", md: "left" }}
                        >

                            <Box justifyContent='center' position='relative' display={{ xs: "flex", md: "none" }}>
                                <Box>
                                    <img src={POLYGON_LARGE} width='300px' height='300px' alt="" />
                                </Box>
                                <Box position="absolute" top='0' left="0" right='0' bottom='-50px' display='flex' justifyContent='center' alignItems='center'>
                                    <img src={PROFILE} alt="profile" height='200px' />
                                </Box>
                            </Box>
                            <Box color="#53B87B" fontSize='40px' fontWeight='700'>Jitendra Kumar Penikelapati</Box>
                            <Box color="#474747" fontSize="26px" mt='4px' mb="20px">CEO</Box>
                            <Box color="#474747" fontSize="20px">Contrary to popular belief, Lorem Ipsum is not simply random text.
                            It has roots in a piece of classical Latin literature from 45 BC,
                            making it over 2000 years old. Richard McClintock, a Latin professor
                            at Hampden-Sydney College in Virginia, looked up one of the more
                              obscure Latin words, consectetur, from a </Box>
                        </Box>
                        <Box display={{ xs: "none", sm: "none", md: "block" }}
                        > <Form /></Box>
                    </Box>
                </Box>
                <Box className={classes.mobile} >
                    <Form />
                    <Contact id={this.props.mobile} />
                </Box>
            </Box >

        )
    }
}
export default withStyles(Styles)(Team)


