import React from 'react';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const BlogSection = styled.div`
margin: 80px 0px;
z-index: 10;
position: relative;
`;

const MainPost = styled.div`
display: flex;
flex-direction: column;
`;

const MainPostWrapper = styled(Paper)`
flex: 1 1;
padding: 24px;
    margin-top: -200px;
    padding-top: 230px;
`;

const ReadMoreButton = styled(Button)`
color: #673ab7;
    margin-top: 8px;
    text-transform: none;
`;

const Headline = styled(Typography)`
color: rgba(0, 0, 0, 0.54);
    font-weight: 700;
    text-transform: uppercase;
`;

const PostWrapper = styled.div`
display: flex;
align-items: center;
    margin-bottom: 40px;
    flex-direction: row;
`;


const SidePostWrapper = styled(Paper)`
flex: 1 1;
height: 185px;
padding: 24px;
    margin-left: -96px;
    padding-left: 104px;
`;

const BlogPart = () => {

    return (<BlogSection>
        <Container container={true} fixed={true} maxWidth="lg">
            <div className="jss1216 jss1214"><Typography variant="h3"> Nas Blog </Typography></div>
            <Grid container={true} spacing={6}>
                <Grid item md={6}>
                    <MainPost>
                        <figure className="big-image">
                            <img src="https://res.cloudinary.com/walden-global-services/image/upload/v1544584575/dandelion/34.jpg" alt="thumb" />
                        </figure>
                        <MainPostWrapper>
                            <div className="summary">
                                <Headline variant="caption" display="block" gutterBottom>Headlineee</Headline>
                                <Typography variant="body1" gutterBottom>Sed imperdiet enim ligula, vitae viverra justo.</Typography>
                            </div>
                            <ReadMoreButton size="small">Read More</ReadMoreButton>
                        </MainPostWrapper>
                    </MainPost>
                </Grid>
                <Grid item md={6}>
                    <PostWrapper>
                        <figure className="small-image">
                            <img src="https://res.cloudinary.com/walden-global-services/image/upload/v1544584529/dandelion/3.jpg" alt="thumb" />
                        </figure>
                        <SidePostWrapper>
                            <div className="summary side-summary">
                                <Headline variant="caption" display="block" gutterBottom>Headlineee</Headline>
                                <Typography variant="body1" gutterBottom>Sed imperdiet enim ligula, vitae viverra justo.</Typography>
                            </div>
                            <ReadMoreButton size="small">Read More</ReadMoreButton>
                        </SidePostWrapper>
                    </PostWrapper>
                    <PostWrapper>
                        <figure className="small-image">
                            <img src="https://res.cloudinary.com/walden-global-services/image/upload/v1544584529/dandelion/4.jpg" alt="thumb" />
                        </figure>
                        <SidePostWrapper>
                            <div className="summary side-summary">
                                <Headline variant="caption" display="block" gutterBottom>Headlineee</Headline>
                                <Typography variant="body1" gutterBottom>Sed imperdiet enim ligula, vitae viverra justo.</Typography>
                            </div>
                            <ReadMoreButton size="small">Read More</ReadMoreButton>
                        </SidePostWrapper>
                    </PostWrapper>
                </Grid>
            </Grid>
        </Container>

    </BlogSection>);
}


export default BlogPart;