import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import elseURL from "../assets/news2.png"
import bloombergURL from '../assets/bloomberg.png';

export default function MediaCard(props) {
    let src;
    if (props.source === "Bloomberg"){
        src = bloombergURL;
    } else if (props.top_image !== ""){
        src = props.top_image;
    }else {
        src = elseURL;
    }
    const date = new Date(props.pubDate.toDate());
    return (
        <Card sx={{ maxWidth: 400, maxHeight: 300, margin: 0}}>
        <CardActionArea  href={props.link}>
            <CardMedia
                component="img"
                height={160}
                width={400}
                image={src}
                alt={props.id}
                onError={e => {
                    e.target.src = elseURL;
                }}
            />
            <CardContent>
                <Typography gutterBottom variant="body2" component="div">
                    {props.title}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                    {date.toDateString()} {props.source}
                </Typography>
            </CardContent>
        </CardActionArea>
        </Card>
    );
}