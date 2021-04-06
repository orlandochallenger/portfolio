import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Card, Typography, Button, CardActionArea, CardMedia, CardContent, CardActions} from "@material-ui/core";
import data from "../../data"

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const CardItems = () => {
  const classes = useStyles();

    return (
      <main>
        {data.map(item =>(
        <Card className={classes.root} key={item.id}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image={item.img}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {item.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {item.desc}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
      </Card>
      ))}
      </main>
      
        
    )
}

export default CardItems
