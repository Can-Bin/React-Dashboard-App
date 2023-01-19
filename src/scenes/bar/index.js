import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart"

const Bar = () => {
    return(
        <Box>
            <Header title="BAR CHART" subtitle="Simple Bar Chart"/>
            <Box>
                <BarChart/>
            </Box>
        </Box>
    )
}

export default Bar