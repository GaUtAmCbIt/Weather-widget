import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import "./InfoBox.css"
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
export default function InfoBox({info}){

    const INIT_URL = "https://plus.unsplash.com/premium_photo-1727730047398-49766e915c1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q0xFQVIlMjBTS1l8ZW58MHx8MHx8fDA%3D"
    const HOT_URL = "https://images.unsplash.com/photo-1561647784-2f9c43b07a0b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
    const COLD_URL = "https://plus.unsplash.com/premium_photo-1661963113279-5825c7500813?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QVJDVElDfGVufDB8fDB8fHww"
    
    return (
        <div className="InfoBox">
             
            <div className='card-container'>
            <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        sx={{ height: 140 }}
        image= {info.temp < 15 ? COLD_URL : HOT_URL}
        title="WEATHER INFO"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {info.city }{info.temp < 15 ? <AcUnitIcon/> : <WbSunnyIcon/>}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          <p>Temperature is : {info.temp}</p>
          <p>Maximum Temperature is : {info.tempMax}</p>
          <p>Minimum Temperature is : {info.tempMin}</p>
          <p>Feels like  : {info.feelsLike}</p>
          <p>The current weather is : {info.weather}</p>
        </Typography>
      </CardContent>
    </Card>
            </div>

        
        </div>
           
    )
}