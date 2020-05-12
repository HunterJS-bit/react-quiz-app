import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Link from '@material-ui/core/Link';
import styled from 'styled-components';

const StyledTypography = styled(Typography)`
    flex-grow: 1;
    text-align: left;
    color: #fff;
`;

const StyledAppBar = styled(AppBar)`
    border-bottom-style: solid; 
    border-bottom-width: 1px;
    border-bottom-color: ${props =>
        props.theme.palette.divider};
    background-color: #0b2239;
`;

const StyledLink = styled(Link)`
    margin: ${props =>
        props.theme.spacing(1, 1.5)};
    color: #fff;
    font-weight: 700;
`;
const Header = () => {

    return (
        <StyledAppBar position="static" color="transparent" elevation={0}>
            <Toolbar>
                <StyledTypography variant="h6" color="inherit" noWrap>
                    Car Test App
                </StyledTypography>
                <nav>
                    <StyledLink component={RouterLink} variant="button" to={'/'}>
                        Home
                    </StyledLink>
                    <StyledLink component={RouterLink} variant="button"  to={'/category'}>
                        Kategorije
                    </StyledLink>
                    <StyledLink component={RouterLink} variant="button" to={'/category/create'}>
                        Create Kategory
                    </StyledLink>
                    <StyledLink component={RouterLink} variant="button" to={'/about'}>
                        About
                    </StyledLink>
                </nav>
                <Button href="#" color="primary" variant="outlined" >
                    Login
                </Button>
            </Toolbar>
        </StyledAppBar>
        // <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        //     <ul className='navbar-nav mr-auto'>
        //         <li>
        //             <Link to={'/'} className='nav-link'>
        //                 Home{' '}
        //             </Link>
        //         </li>
        //         <li>
        //             <Link to={'/category'} className='nav-link'>
        //                 Category
        //             </Link>
        //         </li>
        //         <li>
        //             <Link to={'/create'} className='nav-link'>
        //                 Create Question
        //             </Link>
        //         </li>
        //         <li>
        //             <Link to={'/category/create'} className='nav-link'>
        //                 Create Category
        //             </Link>
        //         </li>
        //         <li>
        //             <Link to={'/quiz/create'} className='nav-link'>
        //                 Create Quiz
        //             </Link>
        //         </li>
        //         <li>
        //             <Link to={'/about'} className='nav-link'>
        //                 About
        //             </Link>
        //         </li>
        //     </ul>
        // </nav>
    );
};

export default Header;