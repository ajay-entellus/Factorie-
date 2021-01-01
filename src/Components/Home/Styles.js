export default {
    container: {
        backgroundColor: '#293557',
        color: "#fff",
    },
    images: {
        backgroundColor: '#293557'
    },
    home: {
        paddingTop: "180px",
        '@media (max-width: 950px)': {
            textAlign: "center",
            padding: "160px 24px 24px 24px",
            margin: "0px auto"
        },
        '@media (max-width: 768px)': {
            textAlign: "center",
            padding: "160px 24px 24px 24px",
            margin: "0px auto"
        },
    },
    hex: {
        '@media (max-width: 756px)': {
            width: "100px",
            height: "120px"
        },
    },
    watermark: {
        width: "1000px",
        '@media (max-width: 1200px)':
            { width: "700px", },
        '@media (max-width: 1024px)':
            { width: "650px", },
        '@media (max-width: 970px)':
            { width: "0px", }

    },

    about: {
        backgroundColor: "#F1F1F1",
        padding: '110px 50px 110px 100px',
        '@media (max-width: 756px)': {
            textAlign: "center",
            padding: "40px 24px"
        },

    },
    dashboard: {
        width: "800px",
        height: "550px",
        position: "absolute", bottom: '0', right: '0',
        '@media (max-width: 1200px)':
            { width: "600px", },
        '@media (max-width: 1024px)':
            { width: "550px", height: "500px", },
        '@media (max-width: 970px)':
        {
            width: "-webkit-fill-available", height: "500px", position: "inherit",
            paddingTop: "40px",
            paddingLeft: "40px"
        },

        '@media (max-width: 768px)':
        {
            width: "-webkit-fill-available", height: "400px", position: "inherit",
            paddingTop: "40px",
            paddingLeft: "40px"
        },
        '@media (max-width: 600px)':
        {
            width: "-webkit-fill-available", height: "280px", position: "inherit",
            paddingTop: "40px",
            paddingLeft: "40px"
        },
    },
    colors: {
        backgroundColor: "#FACD48"
    }
}












// import { Box, withStyles } from '@material-ui/core'
// import React, { Component } from 'react'
// import Styles from './Styles'
// import HEX from '../../Assets/Hex/White.svg'
// import WATERMARK from '../../Assets/Yellow watermark.svg'
// import DASHBOARD from '../../Assets/Dashboard.png'

// import Title from '../Title'

// class Home extends Component {
//     render() {
//         const { classes } = this.props
//         return (
//             <Box className={classes.container} id={this.props.ids} position='relative' >
//                 <Box position='relative' height={{ xs: '500px', sm: '80vh', md: '120vh', lg: "120vh" }}>

//                     <Box maxWidth={{ xs: "400", sm: "600px", md: "850px", lg: "1000px" }} className={classes.home}>
//                         <Title title="manufacture with efficiency" />
//                         <Box paddingLeft={{ md: '100px', lg: '100px' }} fontSize={{ xs: "", md: '40px' }} mt="20px" mb={{ md: "100px" }}>Increase profitability by planning the projects,
//                         tracking the performance of machines, guaging the productivity
//                          of employees and defining quality standards</Box>
//                     </Box>
//                     <Box position='absolute' bottom='0'><img src={HEX} alt="" className={classes.hex} /></Box>
//                     <Box
//                         position='absolute' right='0' bottom='0'
//                     // width={{ xs: "100%", md: "950px", lg: "950px" }}
//                     ><img src={WATERMARK} alt=""
//                         //  className={classes.watermark}
//                         /></Box>
//                 </Box >
//                 <Box
//                     id={this.props.id}
//                     display='flex'
//                     justifyContent='space-between'
//                     alignItems='flex-end'
//                     flexDirection={{ xs: "column-reverse", sm: "column-reverse", md: "row" }}
//                 >
//                     {/* <Box className={classes.images}   position='relative'>
//                         <Box position='absolute' top='0'><img src={HEX} alt="" className={classes.hex} /></Box>
//                         <Box
//                             position='absolute' right='0' top='0'
//                         ><img src={WATERMARK} alt="" className={classes.watermark} /></Box>
//                     </Box> */}
//                     <Box
//                         // width={{ sm: 'auto', md: '500px' }}
//                         width='30%'
//                         className={classes.about} >
//                         <Box ml={{ md: "-100px" }} pb={{ xs: '20px' }}><Title title="about factorie" /></Box>
//                         <Box
//                             color=" #293557"
//                             fontSize={{ xs: '16px', md: '20px' }}
//                         >Factorie is an industrial IoT-driven <strong>intelligent ecosystem </strong>
//                         that manages your production planning, increases production &
//                         machine efficiency, monitors maintenance activities & energy consumption,
//                         helps bolster workforce efficiency and assesses the financial
//                          viability of your factory.</Box>
//                     </Box>
//                     {/* <Box
//                         // width='70%'
//                         // width={{ xs: "100%", md: "650px", lg: "650px" }}
//                         // position='relative'
//                         // width='100%'
//                         zIndex='99'
//                     >
//                         <Box 
//                         position='absolute' bottom='0' right='0'
//                         // width={{ xs: "100%", md: "750px", lg: "750px" }}
//                         >
//                             <img src={DASHBOARD} alt="" width='100%'
//                                 className={classes.dashboard}
//                                 style={{ display: "block" }}
//                             /></Box>
//                     </Box> */}

//                     <Box zIndex='99'>
//                         {/* <Box position='absolute' bottom='0' right='0' > */}
//                             <img src={DASHBOARD} alt="" height='590px'
//                                 // className={classes.dashboard}
//                                 style={{ display: "block" }}
//                             />
//                         {/* </Box> */}

//                     </Box>
//                 </Box>
//             </Box >
//         )
//     }
// }
// export default withStyles(Styles)(Home)