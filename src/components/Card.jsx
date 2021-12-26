import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import reutersURL from '../assets/reuters.png';
import bloombergURL from '../assets/bloomberg.png';
import cnbcURL from '../assets/cnbc.png';
import thestreetURL from '../assets/thestreet.png';
import foxbusinessURL from '../assets/foxibusiness.png';

export default function MediaCard(props) {
    let src;
    switch (props.source) {
        case "Reuters":
            src=reutersURL;
            break;
        case "Bloomberg":
            src=bloombergURL;
            break;
        case "CNBC":
            src=cnbcURL;
            break;
        case "TheStreet":
            src=thestreetURL;
            break;
        case "Fox Business":
            src=foxbusinessURL;
            break;
        default:
            src=bloombergURL;
            break;
        }
    const date = new Date(props.pubDate.toDate());
  return (
    <Card sx={{ maxWidth: 150, maxHeight: 250, margin: 0}}>
    <CardActionArea  href={props.link}>
        <CardMedia
            component="img"
            height="75"
            src={src}
            alt={props.id}
        />
        <CardContent>
            <Typography gutterBottom variant="body2" component="div">
                {props.title}
            </Typography>
            <Typography variant="caption" color="text.secondary">
                {date.toDateString()}
            </Typography>
        </CardContent>
    </CardActionArea>
    </Card>
  );
}