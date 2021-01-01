import { Box, withStyles } from '@material-ui/core'
import React, { Component } from 'react'
import Styles from './Styles'
import Title from '../Title'
import FactorieAccordion from '../FactorieAccordion/index'
import HEX from '../../Assets/Hex 1.svg'
import BulletPoint from '../../Assets/Bullet Point.svg'
class something extends Component {

    state = {
        selected: "CompanyOwners",
    }
    handleClick = (title) => {
        this.setState({ selected: title.split(' ').join('') })
    }


    render() {

        const { classes } = this.props
        const { selected } = this.state
        const details = [{ title: "Company Owners", content: "" },
        { title: "Production Managers", content: "" },
        { title: "Supervisors", content: "" },
        { title: "Operators", content: "" }]
        const content = {
            CompanyOwners: {
                title: "Company Owners",
                detials: [
                    'Create production plans & timelines for each task',
                    'Measure profits from every project, client & machine',
                    'Improve plant efficiency using customizable KPIs',
                    'Monitor energy utilization by the plant & machines',
                    'Create role-based training modules for your employees & track their progress'
                ]
            },
            ProductionManagers: {
                title: "Production Managers",
                detials: [
                    'Create production plans & timelines for each task',
                    'Measure profits from every project, client & machine',
                    'Improve plant efficiency using customizable KPIs',
                    'Monitor energy utilization by the plant & machines',
                    'Monitor energy utilization by the plant & machines',
                ]
            },
            Supervisors: {
                title: "Supervisors",
                detials: [
                    'Create production plans & timelines for each task',
                    'Measure profits from every project, client & machine',
                    'Improve plant efficiency using customizable KPIs',
                    'Monitor energy utilization by the plant & machines',
                    'Create role-based training modules for your employees & track their progress'
                ]
            },
            Operators: {
                title: "Operators",
                detials: [
                    'Create production plans & timelines for each task',
                    'Measure profits from every project, client & machine',
                    'Improve plant efficiency using customizable KPIs',
                    'Monitor energy utilization by the plant & machines',
                    'Create role-based training modules for your employees & track their progress'
                ]
            }
        }
        return (
            <Box display='flex' >
                <Box display={{ xs: 'flex', sm: 'flex', md: 'none' }} style={{ flex: 1 }}> <FactorieAccordion /></Box>

                <Box display={{ xs: 'none', sm: "none", md: 'block' }}>
                    <Box className={classes.ecoSystem}></Box>
                    <Box className={classes.something}>
                        <Box mt="80px" />
                        <Title title="Something for everyone" />
                        <Box mt="60px">
                            {details.map((eachEle, idx) => (
                                <Box className={classes.somethingList} key={idx}>
                                    <Box className={selected === (eachEle.title).split(' ').join('') ? classes.selected : classes.notSelected}></Box>
                                    <Box
                                        onClick={() => this.handleClick(eachEle.title)}
                                        fontSize='30px'
                                        fontWeight={selected === (eachEle.title).split(' ').join('') ? '700' : "400"}
                                        color={selected === (eachEle.title).split(' ').join('') ? '#293557' : " rgba(41,53,87,0.50)"}>
                                        {eachEle.title}
                                    </Box>
                                    <Box className={selected === (eachEle.title).split(' ').join('') ? classes.border : ''}></Box>
                                </Box>
                            ))}
                        </Box>

                    </Box>

                </Box>
                <Box className={classes.content} display={{ xs: 'none', sm: "none", md: 'block' }} position='relative'>
                    <Box className={classes.contentTitle}>{content[selected]['title']}</Box>
                    <Box>
                        {content[selected]['detials'].map((eachEle, idx) => (
                            <Box display='flex' alignItems='baseline' key={idx}>
                                <img src={BulletPoint} alt='' className={classes.dot} />
                                <Box className={classes.contentDetails} flex='1'>{eachEle}</Box>
                            </Box>
                        ))}
                    </Box>
                    <Box position='absolute' bottom="20px" right='0'>
                        <img src={HEX} alt='' />
                    </Box>
                </Box>

            </Box>
        )
    }
}
export default withStyles(Styles)(something)





// <Box display='flex' flexDirection='column' alignItems='flex-start'>
//                         {/* <ul> */}
//                         {content[selected]['detials'].map((eachEle) => (
//                             <li key={eachEle} className={classes.contentDetails}>
//                                 {/* <Box style={{
//                                     width: '12px',
//                                     height: '12px',
//                                     borderRadius: "50%",
//                                     background: "rgba(71,71,71,0.90)",
//                                     marginRight: '10px'
//                                 }}></Box> */}
//                                 {/* <Box > */}
//                                 <span>{eachEle}</span>
//                                 {/* </Box> */}
//                             </li>
//                         ))}
//                         {/* </ul> */}
//                     </Box>