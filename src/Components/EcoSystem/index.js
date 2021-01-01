import { Box, withStyles } from '@material-ui/core'
import React, { Component } from 'react'
import DASHBOARD from '../../Assets/Dashboard icon.svg'
import PROJECT from '../../Assets/Projects icon.svg'
import PROFITABILITY from '../../Assets/Profitability Icon.svg'
import ASSETS from '../../Assets/Assets Icon.svg'
import TrackMaintenance from '../../Assets/Track Maintenance.svg'
import QualityStandards from '../../Assets/Define Quality standards.svg'
import Title from '../Title'
import Styles from './Styles'
import Wrapper from '../Common/Wrapper'


// import from '../../Assets'
// import from '../../Assets'
class EcoSystem extends Component {
    render() {
        const detials = [{ src: DASHBOARD, desc: "Customizable Dashboards" },
        { src: PROJECT, desc: "Plan Projects" },
        { src: PROFITABILITY, desc: "Measure Profitability" },
        { src: ASSETS, desc: "Manage Assets" },
        { src: TrackMaintenance, desc: "Track Maintenance" },
        { src: QualityStandards, desc: "Define Quality Standards" }]
        const { classes } = this.props
        return (
            <Box
                className={classes.ecoSystem}
                pt={{ xs: "80px", md: "100px", lg: "100px" }}
                id={this.props.id} >
                <Title title="an intelligent ecosystem" />
                <Wrapper>
                    <Box
                        alignItems='baseline'
                        marginTop={{ xs: "50px", md: "100px", lg: "100px" }}
                        display='grid'
                        gridTemplateColumns={{ xs: "1fr 1fr", sm: "1fr 1fr 1fr" }}
                        textAlign='center'
                    >
                        {detials.map((eachEle, idx) => (
                            <Box display='flex' flexDirection='column' alignItems='center' marginBottom='80px' key={eachEle.desc}>
                                <Box ><img src={eachEle.src} alt="" /></Box>
                                <Box
                                    width="100px"
                                    paddingTop={{ xs: "16px", md: "30px" }}>
                                    {eachEle.desc}</Box>
                            </Box>
                        ))}
                    </Box>
                </Wrapper>
            </Box>
        )
    }
}
export default withStyles(Styles)(EcoSystem)