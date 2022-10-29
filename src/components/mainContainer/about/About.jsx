import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
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
                <Box className="d-flex justify-content-center">
                    <img className="m-2 imgCertificate" src={imgAssistance.imgUrl} alt={imgAssistance.alt} />
                    <img className="m-2 imgCertificate" src={imgAprobation.imgUrl} alt={imgAprobation.alt} />
                </Box>
            </Box>
        </Box>
    );
}

export default About;