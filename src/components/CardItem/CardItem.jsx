
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Counter } from '../Counter/Counter';




export default function CardItem(props) {

  const customStyle = {
    backgroundColor: 'rgb(105, 45, 33)', 
    color: 'black', 
    padding:12,
    margin:20,
    maxWidth: 345,
  
  };

  return (
    <Card style={customStyle}>
      <CardActionArea>
        
        <CardContent>

          {/* CardItem props so far: name="" talle="" color="" precio="" description="" */}

          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            <p>Talle {props.talle}</p>
            
          </Typography>

          <Typography variant="body2" color="text.secondary">
            <p>Color:{props.color}</p>
            
          </Typography>

          <Typography  color="text.primary">
            <h6>${props.precio}</h6>
          </Typography>


          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>

          <Counter/>
          
        </CardContent>
      </CardActionArea>
    </Card>
  );
}