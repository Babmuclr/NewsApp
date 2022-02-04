import React from 'react';
import { Button } from '@mui/material';

const AddButton = (props) => {
    return (
        <Button 
        onClick={props.func} 
        variant="outlined" 
        style={{
            width: "100%",
            marginTop: "40px",
            height: "60px",
            color: "black",
            borderColor: "black",
        }}
        >
            追加の記事を閲覧する
        </Button>
  );
}

export default AddButton;