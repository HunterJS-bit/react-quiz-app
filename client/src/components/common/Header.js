import React from 'react';
import { Link } from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';

const Header = () => {

    return (
        <AppBar position="static" color="default" elevation={0} >
            <Toolbar>
                <Typography variant="h6" color="inherit" noWrap >
                    Company name
                </Typography>
                <nav>
                    <Link variant="button" color="textPrimary" to={'/'} >
                        Home
                    </Link>
                    <Link variant="button" color="textPrimary" to={'/category'} >
                        Kategorije
                    </Link>
                    <Link variant="button" color="textPrimary" href="#" >
                    Support
                    </Link>
                </nav>
                <Button href="#" color="primary" variant="outlined" >
                    Login
                </Button>
            </Toolbar>
        </AppBar>
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