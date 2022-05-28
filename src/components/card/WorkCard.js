import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export function WorkCard(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ width: 345, borderRadius: 2, boxShadow: 10, padding: 2}}>
      <CardHeader
        action={
          <IconButton aria-label="link" onClick={() => {
            window.open(props.data.link);
          }}>
            <ArrowForwardIcon  />
          </IconButton> 
        }
        title={props.data.company}
        subheader={props.data.position}
      />
      <CardMedia
        component="img"
        height="194"
        image={props.data.image}
        alt={props.data.alter}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.data.dates}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{props.data.description[0]}</Typography>
          <Typography paragraph>{props.data.description[1]}</Typography>
          <Typography paragraph>{props.data.description[2]}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
