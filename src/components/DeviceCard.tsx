import { DeviceCardProps } from "../types/device";
import { Box, Card, CardContent, CardMedia, Typography, IconButton } from "@mui/material";
import { PowerSettingsNewSharp, LightbulbOutlined } from "@mui/icons-material";

const DeviceCard:React.FC<DeviceCardProps> = ({ device, onToggle }) => {



    return (
        <Card className="flex">
            <Box className="flex flex-col">
                <CardContent>
                    <Typography component="div" variant="h5">
                        {device.sku}
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        component="div"
                    >
                        {device.device}
                    </Typography>
                </CardContent>
                <Box className="flex align-center pb-1 pl-1">
                    <IconButton aria-label="power">
                        <PowerSettingsNewSharp />
                    </IconButton>
                </Box>
            </Box>
            <IconButton aria-label="light">
                <LightbulbOutlined />
            </IconButton>
        </Card>
    )
}

export default DeviceCard;