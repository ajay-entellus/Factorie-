import { Box, Drawer, withStyles } from '@material-ui/core'
import React, { useRef, useState } from 'react'
import { useWindowScroll } from 'react-use'
import { Link, animateScroll as scroll } from 'react-scroll'
import Home from '../Home'
import HowItsWorks from '../HowItsWorks'
import EcoSystem from '../EcoSystem'
import Something from '../Something'
import Team from '../Team/Index'
import Styles from './Styles'
import LOGO1 from '../../Assets/Factorie_Logo 1.svg'
import LOGO2 from '../../Assets/Factorie_Logo 2.svg'
import HAMBURGER1 from '../../Assets/Hamburger-white.svg'
import HAMBURGER2 from '../../Assets/Hamburger-black.svg'
import HEX from '../../Assets/Hex 2.svg'
import close from '../../Assets/close.svg'
import './index.css'

function Header(props) {
    const { classes } = props
    const [state, setState] = useState(false)
    const [stage, setStage] = useState('')
    const toggleDrawer = () => {
        setState(!state)
    }
    const { x, y } = useWindowScroll();
    // const [scrolled, setscrolled] = useState(0);
    const [windowSize, setWindowSize] = React.useState(window.innerWidth);
    const [indexval, setIndexval] = useState(false);

    const onResize = (event) => {
        setWindowSize(window.innerWidth);
    };
    const onScroll = (event) => {
        setIndexval(window.pageYOffset > 10 ? true : false);
    };

    React.useEffect(() => {
        window.addEventListener("scroll", onScroll);

        window.addEventListener("resize", onResize);
        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onResize);
        };
    });
    let scrolled = 0
    React.useEffect(() => {
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        // setscrolled(parseInt((y / height) * 100));
        scrolled = parseInt((y / height) * 100)
        console.log(`Height in percentage at scroll point is: ${scrolled}`);
        if (scrolled > 0 && windowSize <= 769) {
            mobile()
        }
        else if (scrolled > 0 && windowSize > 769) {
            if (scrolled >= 15 && scrolled <= 25) {
                setStage('about')
            }
            else if (scrolled >= 26 && scrolled <= 48) {
                setStage('how it works')
            }
            else if (scrolled >= 49 && scrolled <= 85) {
                setStage('features')
            }
            else if (scrolled >= 86 && scrolled <= 95) {
                setStage('team')
            }
            else if (scrolled >= 96 && scrolled <= 120) {
                setStage('contact')
            }
            else {
                setStage('')
            }
        }
    }, [scrolled, windowSize, x, y])

    const mobile = () => {
        if (scrolled > 0 && windowSize <= 769) {
            if (scrolled <= 9) {
                setStage('')
            }
            else if (scrolled >= 9 && scrolled <= 22) {
                setStage('about')
            } else if (scrolled >= 23 && scrolled <= 43) {
                setStage('how it works')
            } else if (scrolled >= 44 && scrolled <= 72) {
                setStage('features')
            } else if (scrolled >= 72 && scrolled <= 85) {
                setStage('team')
            } else if (scrolled >= 90 && scrolled <= 110) {
                setStage('contact')
            }
        }
    }
    const homesection = useRef(null)
    const aboutsection = useRef(null);
    const featuresection = useRef(null);
    const howdifferentsection = useRef(null);
    const teamsection = useRef(null);
    const formsection = useRef(null);

    const scrolltohome = () => window.scrollTo({ top: scrolltohome.current.offsetTop, behavior: "smooth" })
    const scrolltoabout = () => window.scrollTo({ top: aboutsection.current.offsetTop, behavior: "smooth" })
    const scrolltoworks = () => window.scrollTo({ top: featuresection.current.offsetTop, behavior: "smooth" })
    const scrolltofeatures = () => window.scrollTo({ top: howdifferentsection.current.offsetTop, behavior: "smooth" })
    const scrolltoteam = () => window.scrollTo({ top: teamsection.current.offsetTop, behavior: "smooth" })
    const scrolltocontact = () => window.scrollTo({ top: formsection.current.offsetTop, behavior: "smooth" })

    const menuItems = [{ menu: 'about', linkTo: "about", links: scrolltoabout },
    { menu: 'how it works', linkTo: "works", links: scrolltoworks },
    { menu: 'features', linkTo: "features", links: scrolltofeatures },
    { menu: 'team', linkTo: "team", links: scrolltoteam },
    { menu: 'contact', linkTo: "contact", linkTomobie: "contactMobile", links: scrolltocontact }
    ]
    return (
        <Box>
            cons
            <Box className={classes.Header}
                style={indexval === false ? {
                    backgroundColor: "#293557",
                    fontSize: "20px",
                    color: "#FFFFFF"
                } : {
                        background: '#FFFFFF',
                        boxShadow: '0 2px 6px 0 rgba(0,0,0,0.30)',
                        color: "#474747",
                        fontSize: "20px",
                    }}>
                <Box className={classes.Logo} >
                    <Link activeClass="active" to={'home'} spy={true} smooth={true} style={{ cursor: 'pointer' }}>
                        <img src={indexval === false ? LOGO1 : LOGO2} alt="logo" />
                    </Link>

                </Box>
                <Box className={classes.Nav} >
                    {menuItems.map((eachIteam) => (
                        <Box className={classes.a} key={eachIteam.menu} >
                            <Link activeClass="active" to={eachIteam.linkTo} spy={true} smooth={true} onClick={() => console.log(eachIteam.menu)} style={{ cursor: 'pointer' }}>
                                <span className={eachIteam.menu === stage && indexval ? 'span' : ""}>
                                    {eachIteam.menu}
                                </span>
                            </Link>
                        </Box>
                    ))}

                    <Box className={classes.hamburger} onClick={toggleDrawer}>
                        <img src={indexval === false ? HAMBURGER1 : HAMBURGER2} alt="hamburger" />
                    </Box>
                </Box>
            </Box>
            <Drawer anchor={"right"} open={state} onClose={toggleDrawer} classes={{ paper: classes.drawerPaper }}>
                <Box position='absolute' bottom="0" left="0" zIndex='-1'>
                    <img src={HEX} alt="" />
                </Box>
                <Box padding="30px">
                    <Box display='flex' justifyContent='space-between' alignItems='center'>
                        <img src={LOGO1} alt="logo" />
                        <Box onClick={toggleDrawer}><img src={close} alt="close" width='30px' heigth='30px' /></Box>
                    </Box>

                    <Box className={classes.menuItems}>{menuItems.map((eachMenu) => (
                        <Box
                            marginBottom="40px"
                            fontWeight={eachMenu.menu === stage ? 600 : 400}
                            color={eachMenu.menu === stage ? '#E95652 ' : "#fff"}
                            key={eachMenu.menu}
                        >
                            <Link activeClass="active" to={eachMenu.linkTomobie ? eachMenu.linkTomobie : eachMenu.linkTo} spy={true} smooth={true}
                                onClick={() => { toggleDrawer(eachMenu.menu); setStage(eachMenu.menu) }}>
                                <span className={eachMenu.menu === stage ? 'span' : ''}>
                                    {eachMenu.menu}
                                </span>
                            </Link>
                        </Box>
                    ))}</Box>


                </Box>
            </Drawer>
            <Home id='about' ids='home' />
            <HowItsWorks id='works' />
            <EcoSystem id='features' />
            <Something />
            <Team id='team' ids="contact" mobile='contactMobile' />

        </Box >
    )
}


export default withStyles(Styles)(Header)