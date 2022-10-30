/* eslint-disable*/ 
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem'
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';
import post1 from './blog-post.1.md';
import post2 from './blog-post.2.md';
import post3 from './blog-post.3.md';

import Information from "../subjectList/Information";
import SubjectList from 'contains/subjectList/SubjectList';

import bgFront from "assets/images/rotating-card-bg-front.jpeg";
import bgBack from "assets/images/rotating-card-bg-back.jpeg";
import bgImage from "assets/images/background.jpg";

const sections = [
  { title: 'Bone', url: '#' },
  { title: 'Brain', url: '#' },
  { title: 'Eye', url: '#' },
  { title: 'Heart', url: '#' },
  { title: 'Lung', url: '#' },
  { title: 'Skin', url: '#' },
  { title: 'Teeth', url: '#' },
  { title: 'Nose', url: '#' },
  { title: 'Hair', url: '#' },
  { title: 'Kidney', url: '#' },
];

const mainFeaturedPost = {
  title: 'An introduction of online hospital',
  description:
    "if an online medical website allows professional doctors to guide patients and their families through video, it will significantly improve the efficiency of medical treatment.",
  image: bgImage,
  imageText: 'main image description',
  linkText: 'Continue reading…',
};

import brainImage from "assets/subjectList/brain.jpg";
import boneImage from "assets/subjectList/bone.jpg";
import heartImage from "assets/subjectList/heart.jpg";
import eyeImage from "assets/subjectList/eye.jpg";
import lungImage from "assets/subjectList/lung.jpg";
import skinImage from "assets/subjectList/skin.jpg";
const featuredPosts = [
  {
    title: 'Brain',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image : brainImage,
  },
  {
    title: 'Bone',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: boneImage,
  },
  {
    title: 'heart',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: heartImage,
  },
  {
    title: 'eye',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image : eyeImage,
  },
  {
    title: 'lung',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: lungImage,
  },
  {
    title: 'skin',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: skinImage,
  },
];

const posts = [post1, post2, post3];

const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

const theme = createTheme();

export default function Blog() {
  return (
    <div>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Online Hosptial" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container justifyContent="space-around" sm={1} md={12} spacing={3}>
              {featuredPosts.map((post) => (
                <SubjectList key={post.title} post={post} />
              ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title="From the firehose" posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social} 
            />
          </Grid>
        </main>
      </Container>
      <Information />
      {
      //   <SubjectList 
      //   image={bgBack}
      //   title="Discover More"
      //   description="You will save a lot of time going from prototyping to full-functional code because all elements are implemented."
      // />
      }
      
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </div>
  );
}