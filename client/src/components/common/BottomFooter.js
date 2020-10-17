import React from "react";
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton'
import InstagramIcon from "../../assets/instagram.svg";
import FaceBookIcon from "../../assets/twitter.svg";
import TwitterIcon from "../../assets/facebook.svg";
import SvgIcon from '@material-ui/core/SvgIcon';
import Icon from '@material-ui/core/Icon';

const InfoSection = styled(Grid)`
   padding-top: 64px;
`;

const SocialSection = styled(Grid)`
  padding-top: 40px;
`;


const BottomFooter = () => {
  return (
    <footer>
      <Container container={true} fixed={true} maxWidth="lg">
        <Grid item xs={12} sm={12} md={12} alignItems="center" justify="center">
          <div class="jss961">
            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzRDQUY1MDt9Cgkuc3Qxe2ZpbGw6IzJFN0QzMjt9Cgkuc3Qye2ZpbGw6I0ZGRkZGRjtzdHJva2U6I0ZGRkZGRjtzdHJva2Utd2lkdGg6MjA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQo8L3N0eWxlPgo8Zz4KCTxnPgoJCTxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iNTA1LjEsMTc4LjcgMjU1LjksMzM4LjEgNi45LDE3OS4yIDI1Ni40LDE5LjcgCQkiLz4KCQk8Zz4KCQkJPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIyNTYsNDQyLjggNi42LDI2My45IDYuOSwxNzkuMyAyNTYsMzM5LjUgCQkJIi8+CgkJCTxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iNi45LDIyOC44IDI1NiwzMzkuNyAyNTYsNDkyLjMgNi45LDMzMi4xIAkJCSIvPgoJCTwvZz4KCQk8Zz4KCQkJPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSI1MDUuNCwyMjguOCAyNTYsNDA3LjcgMjU2LjMsNDkyLjMgNTA1LjQsMzMyLjEgCQkJIi8+CgkJCTxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMjU2LjMsNDQyLjggNTA1LjQsMzMyIDUwNS40LDE3OS4zIDI1Ni4zLDMzOS41IAkJCSIvPgoJCTwvZz4KCTwvZz4KCTxnPgoJCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0xMDMuNCwzNTJWMTU2LjRoMjQuM3YxNzMuOWg5MC45VjM1MkgxMDMuNHoiLz4KCQk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMjY5LjksMjg5Ljl2LTk5LjFoMjMuMnY5Ny43YzAsMjguNywxNi4xLDQ2LjksNDYsNDYuOWMyOS45LDAsNDYuMy0xOC4yLDQ2LjMtNDYuOXYtOTcuN2gyMy4ydjk5LjEKCQkJYzAsMzkuOS0yMy41LDY1LjctNjkuNSw2NS43QzI5My4xLDM1NS42LDI2OS45LDMyOS41LDI2OS45LDI4OS45eiIvPgoJPC9nPgo8L2c+Cjwvc3ZnPgo=" alt="logo" />
            <Typography variant="h6" gutterBottom>Architect</Typography>
          </div>
          <Typography variant="body1">Nam posuere accumsan porta. Integer sed ante tincidunt tincidunt sit amet sed libero.</Typography>
        </Grid>
        <InfoSection
          container
        >
          <Grid item xs={12} sm={4}>
            <div>
              <Typography variant="h6" gutterBottom>
                Company
              </Typography>
              <ul>
                <li>
                  <Link variant="subtitle1"> Team</Link>
                </li>
                <li>
                  <Link variant="subtitle1"> History</Link>
                </li>
                <li>
                  <Link variant="subtitle1"> Contact us</Link>
                </li>
                <li>
                  <Link variant="subtitle1"> Locations</Link>
                </li>
              </ul>
            </div>

          </Grid>
          <Grid item xs={12} sm={4}>
            <div>
              <Typography variant="h6" gutterBottom>
                Resources
              </Typography>
              <ul>
                <li>
                  <Link variant="subtitle1"> Resource</Link>
                </li>
                <li>
                  <Link variant="subtitle1">   Resource name</Link>
                </li>
                <li>
                  <Link variant="subtitle1"> Final resource</Link>
                </li>
                <li>
                  <Link variant="subtitle1"> another Resource</Link>
                </li>
              </ul>
            </div>

          </Grid>
          <Grid item xs={12} sm={4}>
            <div>
              <Typography variant="h6" gutterBottom>
                Legal
              </Typography>
              <ul>
                <li>
                  <Link variant="subtitle1"> Privacy</Link>
                </li>
                <li>
                  <Link variant="subtitle1"> Term of use </Link>
                </li>
              </ul>
            </div>

          </Grid>
        </InfoSection>
        <SocialSection item xs={12} sm={12} md={12} alignItems="center" justify="center">
          <Icon>
            <img class="social-icon" src={InstagramIcon} />
          </Icon>
          <Icon>
            <img class="social-icon" src={FaceBookIcon} />
          </Icon>
          <Icon>
            <img class="social-icon" src={TwitterIcon} />
          </Icon>
        </SocialSection>
        <Typography variant="body2" style={{ 'margin-top': '20px' }}>  © 2020 Auto Theme</Typography>
      </Container>
    </footer >
  );
};

export default BottomFooter;
