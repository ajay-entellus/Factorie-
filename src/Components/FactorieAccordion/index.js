import React, { Component } from 'react'
import { withStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import BulletPoint from '../../Assets/Bullet Point.svg'
import Styles from './Styles';
import { Box } from '@material-ui/core';
import HEX from '../../Assets/Hex 1.svg'
import ARROW from '../../Assets/Arrow-blue.svg'

class FactorieAccordion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: 0
        }
    }

    handleChange = (idx) => {
        this.setState({ expanded: idx })
    };
    render() {
        const { expanded } = this.state
        const { classes } = this.props
        const details = [
            {
                title: "Company Owners",
                detials: [
                    'Create production plans & timelines for each task',
                    'Measure profits from every project, client & machine',
                    'Improve plant efficiency using customizable KPIs',
                    'Monitor energy utilization by the plant & machines',
                    'Create role-based training modules for your employees & track their progress'
                ]
            },
            {
                title: "Production Managers",
                detials: [
                    'Create production plans & timelines for each task',
                    'Measure profits from every project, client & machine',
                    'Improve plant efficiency using customizable KPIs',
                    'Monitor energy utilization by the plant & machines',
                    'Create role-based training modules for your employees & track their progress'
                ]
            },
            {
                title: "Supervisors",
                detials: [
                    'Create production plans & timelines for each task',
                    'Measure profits from every project, client & machine',
                    'Improve plant efficiency using customizable KPIs',
                    'Monitor energy utilization by the plant & machines',
                    'Create role-based training modules for your employees & track their progress'
                ]
            },
            {
                title: "Operators",
                detials: [
                    'Create production plans & timelines for each task',
                    'Measure profits from every project, client & machine',
                    'Improve plant efficiency using customizable KPIs',
                    'Monitor energy utilization by the plant & machines',
                    'Create role-based training modules for your employees & track their progress'
                ]
            }
        ]
        return (
            <Box width={1}>
                {
                    details.map((eachEle, idx) => (
                        <Accordion
                            key={idx}
                            square
                            expanded={expanded === idx}
                            onChange={() => this.handleChange(idx)}
                            classes={{ root: classes.Accordion, expanded: classes.expanded }}
                        >
                            <AccordionSummary
                                aria-controls="panel1d-content"
                                expandIcon={<img src={ARROW} alt="" />}
                                id="panel1d-header"
                                classes={{ root: classes.AccordionSummary, content: classes.content }}
                            >
                                <Box className={expanded === idx ? classes.selected : classes.notSelected}></Box>
                                <Box
                                    fontSize='24px'
                                    fontWeight={expanded === idx ? '700' : "400"}
                                    color={expanded === idx ? '#293557' : " rgba(41,53,87,0.50)"}
                                >{eachEle.title}</Box>
                            </AccordionSummary>
                            <AccordionDetails classes={{ root: classes.AccordionDetails }}>
                                {eachEle.detials.map((eachList) => (
                                    <Box display='flex' alignItems='baseline' key={eachList}>
                                        <img src={BulletPoint} alt='' className={classes.dot} />
                                        <Box style={{ paddingBottom: "20px", }} flex='1'> {eachList}</Box>
                                    </Box>
                                ))}
                                <Box position='absolute' bottom="20px" right='0' >
                                    <img src={HEX} alt='' width='80px' />
                                </Box>
                            </AccordionDetails>



                        </Accordion>
                    ))
                }

            </Box >
        )
    }
}
export default withStyles(Styles)(FactorieAccordion)