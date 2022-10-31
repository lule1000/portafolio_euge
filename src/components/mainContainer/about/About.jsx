import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import './about.css';
const imgAprobation = {
    alt: 'Certificate Aprobation',
    imgUrl: '/images/certificadoAprobacion.webp'
}
const imgAssistance = {
    alt: 'Certificate Assistence',
    imgUrl: '/images/certificadoAsistencia.webp'
}

const About = () => {
    const display = useMediaQuery('(min-width:850px)');
    const [openAsistance, setOpenAsistance] = useState(false);
    const handleOpenAsistance = () => setOpenAsistance(true);
    const handleCloseAsistance = () => setOpenAsistance(false);
    const [openAprobation, setOpenAprobation] = useState(false);
    const handleOpenAprobation = () => setOpenAprobation(true);
    const handleCloseAprobation = () => setOpenAprobation(false);

    return (
        <Box sx={{ marginBottom: 10 }}>
            <Box id='about'>
                <Typography variant="h3" sx={{ color: '#fff', textAlign: 'center', fontFamily: 'Oswald', margin: 2, textDecorationLine: 'underline', textDecorationColor: '#ff5800' }}>
                    ABOUT
                </Typography>
                <Typography sx={{ color: '#fff', fontSize: '1.5rem', fontFamily: 'Oswald', margin: 4 }}>
                    Hi, I'm Eugenio Yepes, I have 21 and I live in Buenos Aires, Argentina. I'm studying Electronic Engineer at UTN and have a great interest in computer science, mathematics and hardware. Also, I'm interested in the development of
                    applications, in particular the low level part, resolved and understanding the logic, following the business rules.
                    I like to set myself new challenges, learn through them and perfect my skills and knowledge.
                </Typography>
            </Box>
            <Box sx={{ margin: 4 }}>
                <Typography variant="h5" sx={{ color: '#fff', fontFamily: 'Oswald' }}>
                    EXPERIENCE:
                </Typography>
                <Typography sx={{ color: '#ff5800', fontSize: '1.2rem', fontFamily: 'Oswald', margin: 2 }}>
                    February 2022 - Present
                </Typography>
                <Typography sx={{ color: '#fff', fontSize: '1.2rem', fontFamily: 'Oswald', marginLeft: 5 }}>
                    Software Engineer at Eldar.srl
                    Developing and software maintenance in POS devices.
                    Payments industry. Agile methodology, Scrum.
                </Typography>
            </Box>
            <Box sx={{ margin: 4 }}>
                <Typography variant="h5" sx={{ color: '#fff', fontFamily: 'Oswald' }}>
                    EDUCATION:
                </Typography>
                <Typography sx={{ color: '#fff', fontSize: '1.2rem', marginLeft: 2, margin: 2, fontFamily: 'Oswald', display: 'flex', alignItems: 'center' }}>
                    <span className="year">2014-2019</span>High School: Escuela Perito Moreno
                </Typography>
                <Typography sx={{ color: '#fff', fontSize: '1.2rem', marginLeft: 2, margin: 2, fontFamily: 'Oswald', display: 'flex', alignItems: 'center' }}>
                    <span className="year">2020-Present</span>Second year of Electronic Engineer: Universidad Tecnológica Nacional UTN FRBA
                </Typography>
                <Typography sx={{ color: '#fff', fontSize: '1.2rem', marginLeft: 2, margin: 2, fontFamily: 'Oswald', display: 'flex', alignItems: 'center' }}>
                    <span className="year">2020</span> Course of Analogic Electronics
                </Typography>
                <Typography sx={{ color: '#fff', fontSize: '1.2rem', marginLeft: 2, margin: 2, fontFamily: 'Oswald', display: 'flex', alignItems: 'center' }}>
                    <span className="year">2020</span>Course of Digital Electronics
                </Typography>
                <Typography sx={{ color: '#fff', fontSize: '1.2rem', marginLeft: 2, margin: 2, fontFamily: 'Oswald', display: 'flex', alignItems: 'center' }}>
                    <span className="year">2022</span>Course of Android with Kotlin
                </Typography>
                <Typography sx={{ color: '#fff', fontSize: '1.2rem', marginLeft: 2, margin: 2, fontFamily: 'Oswald', display: 'flex', alignItems: 'center' }}>
                    <span className="year">2022</span> Course of basic Java
                </Typography>
                <Box sx={display ? { display: 'flex', justifyContent: 'center' } : { display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <img className="m-2 imgCertificate" src={imgAprobation.imgUrl} alt={imgAprobation.alt} />
                        <Button onClick={handleOpenAprobation} sx={{ width: '5%' }}><AspectRatioIcon sx={{ color: '#ff5800' }} /></Button>
                        <Modal
                            open={openAprobation}
                            onClose={handleCloseAprobation}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                            sx={{ display: 'flex', justifyContent: 'center' }}
                        >
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <img className="m-2 imgModal" src={imgAprobation.imgUrl} alt={imgAprobation.alt} />
                                <Button onClick={handleCloseAprobation} sx={{ color: '#ff5800' }}>Close</Button>
                            </Box>
                        </Modal>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img className="m-2 imgCertificate" src={imgAssistance.imgUrl} alt={imgAssistance.alt} />
                        <Button onClick={handleOpenAsistance} sx={{ width: '5%' }}><AspectRatioIcon sx={{ color: '#ff5800' }} /></Button>
                        <Modal
                            open={openAsistance}
                            onClose={handleCloseAsistance}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                            sx={{ display: 'flex', justifyContent: 'center' }}
                        >
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <img className="m-2 imgModal" src={imgAssistance.imgUrl} alt={imgAssistance.alt} />
                                <Button onClick={handleCloseAsistance} sx={{ color: '#ff5800' }}>Close</Button>
                            </Box>
                        </Modal>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default About;