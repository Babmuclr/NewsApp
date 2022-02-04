import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

import elseURL from "../assets/news2.png"
import bloombergURL from '../assets/bloomberg.png';
import { flexbox } from '@mui/system';

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
        <Card sx={{ maxWidth: 400*props.scopex, maxHeight: 400*props.scopey, margin: 0}} variant="outlined">
            <CardActionArea  href={props.link}>
                {props.version === "square"?
                    <div>
                        <CardMedia
                        component="img"
                        height={140*props.scopey}
                        width={400*props.scopex}
                        image={src}
                        alt={props.id}
                        onError={e => {
                            e.target.src = elseURL;
                        }}
                        />
                        <CardContent>
                        <div>
                            <div style={{fontFamily:"HG明朝E", fontWeight:"bold", fontSize:18+(props.scopey-1)*3 }}>
                                {props.title} 
                            </div>
                            <div style={{fontFamily:"HG明朝E", fontWeight:"light", fontSize:12+props.scope*3, color:'gray' }}>
                                {date.toDateString()} {props.source}
                            </div>
                        </div>
                        </CardContent>
                    </div>
                :
                    <flexbox style={{display: "flex", alignItems: "center"}}>
                        <CardMedia
                        component="img"
                        height={210}
                        width={500}
                        image={src}
                        alt={props.id}
                        onError={e => {
                            e.target.src = elseURL;
                        }}
                        style={{flexGrow:2}}
                        />
                        <CardContent style={{flexGrow:1}}>
                        <div>
                            <div style={{fontFamily:"HG明朝E", fontWeight:"bold", fontSize:21 }}>
                                {props.title} 
                            </div>
                            <div style={{fontFamily:"HG明朝E", fontWeight:"light", fontSize:12, color:'gray' }}>
                                {date.toDateString()} {props.source}
                            </div>
                        </div>
                        </CardContent>
                    </flexbox>
                }
                
            </CardActionArea>
        </Card>
    );
}