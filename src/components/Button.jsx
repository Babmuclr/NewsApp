import React from 'react';
import { Button } from '@mui/material';

const returnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
};

const FootButton = () => {
    return (
        <Button 
        onClick={returnTop} 
        variant="outlined" 
        style={{
            width: "100%",
            marginTop: "40px",
            height: "60px"
        }}
        >
            Topに戻る
        </Button>
  );
}

export default FootButton;