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
import foxbusinessURL from '../assets/foxbusiness.png';
import businessInsiderURL from "../assets/businessinsider.png";
import forbesURL from "../assets/forbes.png";
import wsjURL from "../assets/wsj.png";
import motelyfoolURL from "../assets/motleyfool.png";

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
        case "FoxBusiness":
            src=foxbusinessURL;
            break;
        case "BusinessInsider":
            src=businessInsiderURL;
            break;
        case "TheWallStreetJournal":
            src=wsjURL;
            break;
        case "Forbes":
            src=forbesURL;
            break;
        case "MotleyFool":
            src=motelyfoolURL;
            break;
        default:
            src=bloombergURL;
            break;
    }
    const date = new Date(props.pubDate.toDate());
    return (
        <Card sx={{ maxWidth: 400, maxHeight: 300, margin: 0}}>
        <CardActionArea  href={props.link}>
            <CardMedia
                component="img"
                height={props.size > 500 ? 120: 75}
                width={props.size > 500 ? 400: 150}
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