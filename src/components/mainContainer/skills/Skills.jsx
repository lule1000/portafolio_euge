import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const Skills = () => {
    return (
        <Box id='skills' sx={{ marginBottom: 10, marginTop: 10 }}>
            <Box>
                <Typography variant="h3" sx={{ color: '#fff', fontFamily: 'Oswald', textAlign: 'center', margin: 2, textDecorationLine: 'underline', textDecorationColor: '#ff5800' }}>
                    SKILLS
                </Typography>
            </Box>
            <Box sx={{ margin: 4 }}>
                <Typography sx={{ color: '#fff', margin: 1, fontSize: '1.2rem', fontFamily: 'Oswald', display: 'flex', alignItems: 'center' }}>
                    <FiberManualRecordIcon sx={{ color: '#ff5800' }} /> Programming in C/C++
                </Typography>
                <Typography sx={{ color: '#fff', margin: 1, fontSize: '1.2rem', fontFamily: 'Oswald', display: 'flex', alignItems: 'center' }}>
                    <FiberManualRecordIcon sx={{ color: '#ff5800' }} /> Programming in Java
                </Typography>
                <Typography sx={{ color: '#fff', margin: 1, fontSize: '1.2rem', fontFamily: 'Oswald', display: 'flex', alignItems: 'center' }}>
                    <FiberManualRecordIcon sx={{ color: '#ff5800' }} /> Developing applications with Kotlin in Android Studio
                </Typography>
                <Typography sx={{ color: '#fff', margin: 1, fontSize: '1.2rem', fontFamily: 'Oswald', display: 'flex', alignItems: 'center' }}>
                    <FiberManualRecordIcon sx={{ color: '#ff5800' }} /> Using files, sockets and networks, threads and states machines in C language
                </Typography>
                <Typography sx={{ color: '#fff', margin: 1, fontSize: '1.2rem', fontFamily: 'Oswald', display: 'flex', alignItems: 'center' }}>
                    <FiberManualRecordIcon sx={{ color: '#ff5800' }} /> Knowledge in payments industry
                </Typography>
                <Typography sx={{ color: '#fff', margin: 1, fontSize: '1.2rem', fontFamily: 'Oswald', display: 'flex', alignItems: 'center' }}>
                    <FiberManualRecordIcon sx={{ color: '#ff5800' }} /> Processing payments with cards in POS (Point of Sale) devices, using EMV and ISO 8583 protocols
                </Typography>
                <Typography sx={{ color: '#fff', margin: 1, fontSize: '1.2rem', fontFamily: 'Oswald', display: 'flex', alignItems: 'center' }}>
                    <FiberManualRecordIcon sx={{ color: '#ff5800' }} /> Experience in development over Verifone terminal, Evo and Engage operative system
                </Typography>
                <Typography sx={{ color: '#fff', margin: 1, fontSize: '1.2rem', fontFamily: 'Oswald', display: 'flex', alignItems: 'center' }}>
                    <FiberManualRecordIcon sx={{ color: '#ff5800' }} /> Knowledge about payments processing using the following technologies, manual input, magnetic stripe, contactless, chip, NFC and QR
                </Typography>
                <Typography sx={{ color: '#fff', margin: 1, fontSize: '1.2rem', fontFamily: 'Oswald', display: 'flex', alignItems: 'center' }}>
                    <FiberManualRecordIcon sx={{ color: '#ff5800' }} />Design schematics and PCBs in Altium and Proteus
                </Typography>
                <Typography sx={{ color: '#fff', margin: 1, fontSize: '1.2rem', fontFamily: 'Oswald', display: 'flex', alignItems: 'center' }}>
                    <FiberManualRecordIcon sx={{ color: '#ff5800' }} />Leadership and teamwork
                </Typography>
            </Box>
        </Box>
    );
}

export default Skills;