import { Box, withStyles } from '@material-ui/core'
import React, { Component } from 'react'
import FACTORIE from '../../Assets/Factorie_Logo 2.svg'
import EMAIL from '../../Assets/Mail Icon.svg'
import PHONE from '../../Assets/Call Icon.svg'
import LOCATION from '../../Assets/Location Icon.svg'
import FACEBOOK from '../../Assets/facebook.svg'
import LINKEDIN from '../../Assets/linkedin.svg'
import TWITTER from '../../Assets/twitter.svg'
import Styles from './Styles'

class Contact extends Component {

    render() {
        const details = [
            { src: EMAIL, desc: "info@factorie.online" },
            { src: PHONE, desc: "+91 8374623170" },
            {
                src: LOCATION, desc: "2-2-185/53/A, 1st Floor, DD Colony Hyderabad - 500013"
            }]
        const { classes } = this.props
        return (
            <Box className={classes.root}
                py='40px'
                id={this.props.id}
            >
                <Box mx="auto" maxWidth='280px'>

                    <Box mb={{ md: '35px' }} display={{ xs: "none", sm: "none", md: "block" }}>
                        <img src={FACTORIE} alt="" />
                    </Box>
                    <Box>
                        {details.map((eachRes, idx) => (<Box
                            //  display="flex" 
                            display='grid'
                            gridTemplateColumns="1fr 100%"
                            alignItems="flex-start"
                            marginBottom="20px"
                            key={eachRes.src}>
                            <Box pt={idx === 2 && '5px'}><img src={eachRes.src} alt="" /></Box>
                            <Box marginLeft="12px" maxWidth={{ xs: '200px', md: "300px" }}>{eachRes.desc}</Box>
                        </Box>))}
                    </Box>
                    <Box display='flex' my="24px" ml="24px">
                        <a href="https://www.qries.com/">
                            <img src={FACEBOOK} alt="" />
                        </a>
                        <Box mr="20px" />
                        <a href="https://www.qries.com/">
                            <img src={LINKEDIN} alt="" />
                        </a>
                        <Box ml="20px" />
                        <a href="https://www.qries.com/">
                            <img src={TWITTER} alt="" />
                        </a>
                    </Box>
                    <Box ml="24px" fontSize="16px" maxWidth='180px'>Copyright © Factorie 2019. All rights reserved.</Box>

                </Box>
            </Box >
        )
    }
}
export default withStyles(Styles)(Contact)
