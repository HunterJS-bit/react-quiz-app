import React from "react";
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton'
import InstagramIcon from "../../assets/instagram.svg";
import SvgIcon from '@material-ui/core/SvgIcon';

const StyledGrid = styled(Grid)`
// position: relative;
// padding-bottom: 64px;
`;

const BottomFooter = () => {
  return (
    <footer>
      <Grid
        container
      >

        <Grid item xs={12} sm={12} md={12} alignItems="center" justify="center">
          <div class="jss961">
            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzRDQUY1MDt9Cgkuc3Qxe2ZpbGw6IzJFN0QzMjt9Cgkuc3Qye2ZpbGw6I0ZGRkZGRjtzdHJva2U6I0ZGRkZGRjtzdHJva2Utd2lkdGg6MjA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQo8L3N0eWxlPgo8Zz4KCTxnPgoJCTxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iNTA1LjEsMTc4LjcgMjU1LjksMzM4LjEgNi45LDE3OS4yIDI1Ni40LDE5LjcgCQkiLz4KCQk8Zz4KCQkJPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIyNTYsNDQyLjggNi42LDI2My45IDYuOSwxNzkuMyAyNTYsMzM5LjUgCQkJIi8+CgkJCTxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iNi45LDIyOC44IDI1NiwzMzkuNyAyNTYsNDkyLjMgNi45LDMzMi4xIAkJCSIvPgoJCTwvZz4KCQk8Zz4KCQkJPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSI1MDUuNCwyMjguOCAyNTYsNDA3LjcgMjU2LjMsNDkyLjMgNTA1LjQsMzMyLjEgCQkJIi8+CgkJCTxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMjU2LjMsNDQyLjggNTA1LjQsMzMyIDUwNS40LDE3OS4zIDI1Ni4zLDMzOS41IAkJCSIvPgoJCTwvZz4KCTwvZz4KCTxnPgoJCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0xMDMuNCwzNTJWMTU2LjRoMjQuM3YxNzMuOWg5MC45VjM1MkgxMDMuNHoiLz4KCQk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMjY5LjksMjg5Ljl2LTk5LjFoMjMuMnY5Ny43YzAsMjguNywxNi4xLDQ2LjksNDYsNDYuOWMyOS45LDAsNDYuMy0xOC4yLDQ2LjMtNDYuOXYtOTcuN2gyMy4ydjk5LjEKCQkJYzAsMzkuOS0yMy41LDY1LjctNjkuNSw2NS43QzI5My4xLDM1NS42LDI2OS45LDMyOS41LDI2OS45LDI4OS45eiIvPgoJPC9nPgo8L2c+Cjwvc3ZnPgo=" alt="logo" />
            <Typography variant="h6" gutterBottom>Architect</Typography>
          </div>
          <Typography variant="body1">Nam posuere accumsan porta. Integer sed ante tincidunt tincidunt sit amet sed libero.</Typography>
          <Typography variant="body2">  ©&nbsp;Auto Theme 2020</Typography>
        </Grid>
        <Grid
          container
        >
          <Grid item xs={12} sm={3}>
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
          <Grid item xs={12} sm={3}>
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
          <Grid item xs={12} sm={3}>
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
          <Grid item xs={12} sm={3}>
            <div class="jss963">
              <IconButton><SvgIcon></SvgIcon></IconButton>
              <IconButton><SvgIcon></SvgIcon></IconButton>
              <IconButton><SvgIcon></SvgIcon></IconButton>
              <IconButton><SvgIcon></SvgIcon></IconButton>
            </div>

          </Grid>
        </Grid>
        {/* <div class="MuiGrid-root MuiGrid-container"> */}
        {/* <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-3">
            <div class="jss961">
              <img
                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzRDQUY1MDt9Cgkuc3Qxe2ZpbGw6IzJFN0QzMjt9Cgkuc3Qye2ZpbGw6I0ZGRkZGRjtzdHJva2U6I0ZGRkZGRjtzdHJva2Utd2lkdGg6MjA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQo8L3N0eWxlPgo8Zz4KCTxnPgoJCTxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iNTA1LjEsMTc4LjcgMjU1LjksMzM4LjEgNi45LDE3OS4yIDI1Ni40LDE5LjcgCQkiLz4KCQk8Zz4KCQkJPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIyNTYsNDQyLjggNi42LDI2My45IDYuOSwxNzkuMyAyNTYsMzM5LjUgCQkJIi8+CgkJCTxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iNi45LDIyOC44IDI1NiwzMzkuNyAyNTYsNDkyLjMgNi45LDMzMi4xIAkJCSIvPgoJCTwvZz4KCQk8Zz4KCQkJPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSI1MDUuNCwyMjguOCAyNTYsNDA3LjcgMjU2LjMsNDkyLjMgNTA1LjQsMzMyLjEgCQkJIi8+CgkJCTxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMjU2LjMsNDQyLjggNTA1LjQsMzMyIDUwNS40LDE3OS4zIDI1Ni4zLDMzOS41IAkJCSIvPgoJCTwvZz4KCTwvZz4KCTxnPgoJCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0xMDMuNCwzNTJWMTU2LjRoMjQuM3YxNzMuOWg5MC45VjM1MkgxMDMuNHoiLz4KCQk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMjY5LjksMjg5Ljl2LTk5LjFoMjMuMnY5Ny43YzAsMjguNywxNi4xLDQ2LjksNDYsNDYuOWMyOS45LDAsNDYuMy0xOC4yLDQ2LjMtNDYuOXYtOTcuN2gyMy4ydjk5LjEKCQkJYzAsMzkuOS0yMy41LDY1LjctNjkuNSw2NS43QzI5My4xLDM1NS42LDI2OS45LDMyOS41LDI2OS45LDI4OS45eiIvPgoJPC9nPgo8L2c+Cjwvc3ZnPgo="
                alt="logo"
              />
              <h6 class="MuiTypography-root MuiTypography-h6 MuiTypography-colorTextPrimary">
                Architect
              </h6>
            </div>
            <p class="MuiTypography-root jss962 MuiTypography-body1 MuiTypography-colorTextPrimary MuiTypography-gutterBottom">
              Nam posuere accumsan porta. Integer sed ante tincidunt tincidunt sit amet sed libero.
            </p>
            <p class="MuiTypography-root MuiTypography-body2 MuiTypography-colorTextSecondary MuiTypography-displayBlock">
              ©&nbsp;Luxiren Theme 2020
            </p>
          </div> */}
        {/* <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6"> */}
        {/* <div class="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-4 MuiGrid-justify-xs-space-evenly">
              <div class="MuiGrid-root jss966 MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-3">
                <div>
                  <h6 class="MuiTypography-root jss960 MuiTypography-h6 MuiTypography-colorTextPrimary MuiTypography-gutterBottom">
                    Company
                  </h6>
                  <ul>
                    <li>
                      <a
                        class="MuiTypography-root MuiLink-root MuiLink-underlineHover MuiTypography-subtitle1 MuiTypography-colorTextSecondary"
                        href="#team"
                      >
                        Team
                      </a>
                    </li>
                    <li>
                      <a
                        class="MuiTypography-root MuiLink-root MuiLink-underlineHover MuiTypography-subtitle1 MuiTypography-colorTextSecondary"
                        href="#history"
                      >
                        History
                      </a>
                    </li>
                    <li>
                      <a
                        class="MuiTypography-root MuiLink-root MuiLink-underlineHover MuiTypography-subtitle1 MuiTypography-colorTextSecondary"
                        href="#contact-us"
                      >
                        Contact us
                      </a>
                    </li>
                    <li>
                      <a
                        class="MuiTypography-root MuiLink-root MuiLink-underlineHover MuiTypography-subtitle1 MuiTypography-colorTextSecondary"
                        href="#locations"
                      >
                        Locations
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="MuiGrid-root jss966 MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-3">
                <div>
                  <h6 class="MuiTypography-root jss960 MuiTypography-h6 MuiTypography-colorTextPrimary MuiTypography-gutterBottom">
                    Resources
                  </h6>
                  <ul>
                    <li>
                      <a
                        class="MuiTypography-root MuiLink-root MuiLink-underlineHover MuiTypography-subtitle1 MuiTypography-colorTextSecondary"
                        href="#resource"
                      >
                        Resource
                      </a>
                    </li>
                    <li>
                      <a
                        class="MuiTypography-root MuiLink-root MuiLink-underlineHover MuiTypography-subtitle1 MuiTypography-colorTextSecondary"
                        href="#resource-name"
                      >
                        Resource name
                      </a>
                    </li>
                    <li>
                      <a
                        class="MuiTypography-root MuiLink-root MuiLink-underlineHover MuiTypography-subtitle1 MuiTypography-colorTextSecondary"
                        href="#another-resource"
                      >
                        Another resource
                      </a>
                    </li>
                    <li>
                      <a
                        class="MuiTypography-root MuiLink-root MuiLink-underlineHover MuiTypography-subtitle1 MuiTypography-colorTextSecondary"
                        href="#final-resource"
                      >
                        Final resource
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="MuiGrid-root jss966 MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-3">
                <div>
                  <h6 class="MuiTypography-root jss960 MuiTypography-h6 MuiTypography-colorTextPrimary MuiTypography-gutterBottom">
                    Legal
                  </h6>
                  <ul>
                    <li>
                      <a
                        class="MuiTypography-root MuiLink-root MuiLink-underlineHover MuiTypography-subtitle1 MuiTypography-colorTextSecondary"
                        href="#privacy-policy"
                      >
                        Privacy policy
                      </a>
                    </li>
                    <li>
                      <a
                        class="MuiTypography-root MuiLink-root MuiLink-underlineHover MuiTypography-subtitle1 MuiTypography-colorTextSecondary"
                        href="#terms-of-use"
                      >
                        Terms of use
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div> */}
        {/* <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-3">
            <div class="jss963">
              <button
                class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeSmall"
                tabindex="0"
                type="button"
                aria-label="FB"
              >
                <span class="MuiIconButton-label">
                  <i class="ion-social-twitter"></i>
                </span>
                <span class="MuiTouchRipple-root"></span>
              </button>
              <button
                class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeSmall"
                tabindex="0"
                type="button"
                aria-label="TW"
              >
                <span class="MuiIconButton-label">
                  <i class="ion-social-facebook"></i>
                </span>
                <span class="MuiTouchRipple-root"></span>
              </button>
              <button
                class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeSmall"
                tabindex="0"
                type="button"
                aria-label="IG"
              >
                <span class="MuiIconButton-label">
                  <i class="ion-social-instagram"></i>
                </span>
                <span class="MuiTouchRipple-root"></span>
              </button>
              <button
                class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeSmall"
                tabindex="0"
                type="button"
                aria-label="LI"
              >
                <span class="MuiIconButton-label">
                  <i class="ion-social-linkedin"></i>
                </span>
                <span class="MuiTouchRipple-root"></span>
              </button>
            </div>
            <div class="MuiInputBase-root MuiOutlinedInput-root jss965 MuiInputBase-adornedStart MuiOutlinedInput-adornedStart">
              <fieldset aria-hidden="true" class="jss970 MuiOutlinedInput-notchedOutline">
                <legend class="jss971">
                  <span>​</span>
                </legend>
              </fieldset>
            </div>
          </div> */}
        {/* </div> */}
      </Grid>
    </footer>
  );
};

export default BottomFooter;
