import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import VisibilityIcon from '@mui/icons-material/Visibility';
import Button from '@mui/material/Button';
import useMediaQuery from "@mui/material/useMediaQuery";
import './work.css';

const Work = () => {
    const margin = useMediaQuery('(min-width:500px)')

    return (
        <Box id='work' sx={{ marginBottom: 10, marginTop: 10 }}>
            <Typography variant="h3" sx={{ color: '#fff', fontFamily: 'Oswald', textAlign: 'center', margin: 2, textDecorationLine: 'underline', textDecorationColor: '#ff5800' }}>
                WORK
            </Typography>
            <Box sx={margin && { margin: 4 }}>
                {/* <Typography>Aca el titulo</Typography> */}
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    <iframe src="https://www.youtube.com/embed/AYQ8hT8cVTE" frameBorder="0" allowFullScreen="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
                    {/* <p>Aca la descripcion</p> */}
                    <a target='blanck' href="#" className="text-decoration-none text-white d-flex align-items-center  mt-2">
                        <Button sx={{ color: 'white' }} startIcon={<VisibilityIcon sx={{ color: '#ff5800' }} />}>
                            SEE REPOSITORY
                        </Button>
                    </a>
                </Box>
            </Box>
            {/* <Box sx={ margin && { margin: 4 }}>
            <Typography>Aca el titulo</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    <iframe src="https://www.youtube.com/embed/AYQ8hT8cVTE" frameBorder="0" allowFullScreen="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
                    <p>Aca la descripcion</p>
                    <a target='blanck' href="#" className="text-decoration-none text-white d-flex align-items-center  mt-2">
                        <Button sx={{ color: 'white' }} startIcon={<VisibilityIcon sx={{ color: '#ff5800' }} />}>
                            SEE REPOSITORY
                        </Button>
                    </a>
                </Box>
            </Box> */}
        </Box>
    );
}

export default Work;