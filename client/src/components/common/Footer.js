import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box'
import Copyright from './Copyright';


const StyledFooter = styled.footer`
    padding:  ${props => props.theme.spacing(3, 2)};
    margin-top: auto;
    border-top-width: 1px;
    margin-top: ${props => props.theme.spacing(8)},
    padding-top: ${props => props.theme.spacing(3)};
    padding-bottom: ${props => props.theme.spacing(3)};
    background-color: ${props => props.theme.palette.grey[300]}
`;

const footers = [
    {
      title: 'Company',
      description: ['Team', 'History', 'Contact us', 'Locations'],
    },
    {
      title: 'Features',
      description: ['Cool stuff', 'Random feature', 'Team feature', 'Developer stuff', 'Another one'],
    },
    {
      title: 'Resources',
      description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
    },
    {
      title: 'Legal',
      description: ['Privacy policy', 'Terms of use'],
    },
  ];

const Footer = () => {

    return (<StyledFooter>
                <Grid container spacing={4} justify="space-evenly">
                        {footers.map((footer) => (
                    <Grid item xs={6} sm={3} key={footer.title}>
                    <Typography variant="h6" color="textPrimary" gutterBottom>
                        {footer.title}
                    </Typography>
                    <ul>
                        {footer.description.map((item) => (
                        <li key={item}>
                            <Link href="#" variant="subtitle1" color="textSecondary">
                            {item}
                            </Link>
                        </li>
                        ))}
                    </ul>
                    </Grid>
                ))}
                </Grid>
                <Box mt={5}>
                    <Copyright />
                </Box>
        </StyledFooter>)
};

export default Footer;
