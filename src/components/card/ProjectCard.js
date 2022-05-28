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
import GitHubIcon from '@mui/icons-material/GitHub';
import Button from '@mui/material/Button';


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

export function ProjectCard(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ width: 345, borderRadius: 2, boxShadow: 10, padding: 2}}>
      <CardHeader
        action={
          <IconButton aria-label="link" onClick={() => {
            window.open(props.data.github);
          }}>
            <GitHubIcon  />
          </IconButton> 
        }
        title={props.data.title}
        subheader={props.data.subtitle}
      />
      <CardMedia
        component="img"
        height="194"
        image={props.data.image}
        alt={props.data.alter}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.data.description}
        </Typography>
        <br/>
        {props.data.link != '' ? <Button variant="text" onClick={() => {
            window.open(props.data.link);
          }}>Link to Live</Button> : ''}

      </CardContent>
      
    </Card>
  );
}
