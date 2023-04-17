import { Box, Button } from "@mui/material";

export default function ChooseNTE() {

    const handleAdva = () => {
        console.log('Adva')
    }

    const handleAlcatel = () => {
        console.log('Alcatel')
    }

    const handleRad = () => {
        console.log('Rad')
    }

    return (
        <>
        <div className="rounded-lg shadow-md border border-gray-300 bg-white p-4 mt-6">
        <h1 className="text-center text-4xl font-bold mb-4">What type of NTE is on site?</h1>

        <Box className="flex justify-between full-width">   
            <div className="grid grid-cols-3 gap-4">
                <Button onClick={handleAdva}>
                    <img src={'img/adva-main.jpg'} alt="" />
                </Button>
                
                <Button  onClick={handleAlcatel}>
                    <img src={'img/alcatel-main.jpg'} alt="" />
                </Button>

                <Button  onClick={handleRad}>
                    <img src={'img/rad-main.png'} alt="" />
                </Button>
            </div>
        </Box>
        </div>
        
        </>
    );
}