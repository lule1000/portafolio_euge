import { useMediaQuery } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
const imgEuge = {
    alt: 'Foto personal',
    imgUrl: '/images/fotoEuge.webp'
}

const ImgMySelf = () => {
    const margins = useMediaQuery('(min-width:900px)');
    /* let callExe = () => {
        var oShell = new ActiveXObject("Shell.Application");
        var commandToRun = "C:\\Users\\Ulises\\OneDrive\\Documentos\\main.exe";
        oShell.ShellExecute(commandToRun, "", "", "open", "1")
    } */

    return (
        margins ?
            <div>
                <img className="imgEuge" src={imgEuge.imgUrl} alt={imgEuge.alt} />
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography sx={{ textAlign: 'center', color: '#fff', fontFamily: 'Oswald' }}>Software Engineer at ELDAR SRL </Typography>
                </Box>
                {/* <Box>
                    <a href="#execute" onClick={`${callExe()}; return false`}>Run cmd</a>
                </Box> */}
            </div> :
            <div>
                <img className="imgEuge" src={imgEuge.imgUrl} alt={imgEuge.alt} />
                <Typography sx={{ textAlign: 'center', color: '#fff', fontFamily: 'Oswald' }}>Software Engineer at ELDAR SRL </Typography>
            </div>
    );
}

export default ImgMySelf;