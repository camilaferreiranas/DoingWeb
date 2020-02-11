import React from 'react';
import Typography from '@material-ui/core/Typography';


function Footer() {
    return (

        <div className="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          conteúdo
        </Typography>
        
        </div>
        
    );
}

export default Footer;