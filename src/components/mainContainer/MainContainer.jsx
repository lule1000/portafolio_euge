import { useMediaQuery } from "@mui/material";
import ImgMySelf from "./img/ImgMySelf";
import About from "./about/About";
import Skills from "./skills/Skills";
import Work from "./work/Work";
import Contact from "./contact/Contact";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from '@mui/material/Divider';
import './mainContainer.css';

const MainContainer = () => {
    const margins = useMediaQuery('(min-width:950px)');
    const textAlign = useMediaQuery('(min-width:556px)');
    const vh = useMediaQuery('(min-height:550px)');

    return (
        <>
            <Box sx={vh ?
                { marginLeft: 10, marginRight: 10, display: 'flex', justifyContent: 'space-around', alignItems: 'center', height: '80vh' } :
                { marginLeft: 5, marginRight: 5, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {
                    margins ?
                        <>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <Typography variant='h2' sx={{ color: '#fff', fontFamily: 'Oswald' }}>
                                    Hello!
                                </Typography>
                                <Typography variant='h2' sx={{ color: '#fff', fontFamily: 'Oswald' }}>
                                    I am Eugenio,
                                </Typography>
                                <Typography variant='h2' sx={{ color: '#fff', fontFamily: 'Oswald' }}>
                                    Aplication Developer
                                </Typography>
                            </Box>
                            <ImgMySelf />
                        </> :
                        textAlign ?
                            <Box sx={ { display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                                    <Typography variant='h3' sx={{ color: '#fff', fontFamily: 'Oswald' }}>
                                        Hello!
                                    </Typography>
                                    <Typography variant='h3' sx={{ color: '#fff', fontFamily: 'Oswald' }}>
                                        I am Eugenio,
                                    </Typography>
                                    <Typography variant='h3' sx={{ color: '#fff', fontFamily: 'Oswald' }}>
                                        Aplication Developer
                                    </Typography>
                                </Box>
                                <ImgMySelf />
                            </Box> :
                            <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                                    <Typography sx={{ color: '#fff', fontFamily: 'Oswald', fontSize: '2.5rem' }}>
                                        Hello!
                                    </Typography>
                                    <Typography sx={{ color: '#fff', fontFamily: 'Oswald', fontSize: '2.5rem' }}>
                                        I am Eugenio,
                                    </Typography>
                                    <Typography sx={{ color: '#fff', fontFamily: 'Oswald', fontSize: '2.5rem' }}>
                                        Aplication
                                    </Typography>
                                    <Typography sx={{ color: '#fff', fontFamily: 'Oswald', fontSize: '2.5rem' }}>
                                        Developer
                                    </Typography>
                                </Box>
                                <ImgMySelf />
                            </Box>
                }
            </Box>
            <Box sx={margins ?
                { marginLeft: 10, marginRight: 10, marginTop: 5 } :
                { marginLeft: 5, marginRight: 5, marginTop: 3 }}>
                <About />
                <Divider sx={{ backgroundColor: '#ff5800' }} />
                <Skills />
                <Divider sx={{ backgroundColor: '#ff5800' }} />
                <Work />
                <Divider sx={{ backgroundColor: '#ff5800' }} />
                <Contact />
            </Box>
        </>
    );
}

export default MainContainer;