
import { Container } from '@mui/material';

export const ItemListContainer=(props)=>{
    
  return (

    <Container sx={{padding:5, textAlign:'center', border:1}} >
        <div> <h4 >{props.greeting}</h4></div>
       
      <p></p>
    </Container>
  );
}