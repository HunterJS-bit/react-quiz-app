import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      maxWidth: 320,
    },
    media: {
      height: 160,
    },
    cta: {
      marginTop: 24,
      textTransform: 'initial',
    }
  });

const BlogCard = () => {
    const classes = useStyles();


    return (
        <Card className={classes.root}>
            <CardMedia 
                    className={classes.media}
                    image={'https://images.unsplash.com/photo-1468774871041-fc64dd5522f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80'} 
                />            
                <CardContent>
                <Typography color="textSecondary" gutterBottom>
                    March 20, 2019
                </Typography>
                <Typography gutterBottom variant="h5" component="h2">
                    What happened in Thailand?
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Kayaks crowd Three Sisters Springs, where people and manatees maintain controversial coexistence.
                </Typography>
                <Button color={'primary'} fullWidth className={classes.cta}>
                    Find Out More >
                </Button>
            </CardContent>
        </Card>
    );
};

export default BlogCard;