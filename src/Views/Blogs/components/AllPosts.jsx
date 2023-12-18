import { ArrowForward } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Pagination,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
const StyledRoot = styled(Box)(({ theme }) => ({
  padding: theme.spacing(6, 10),
}));
const StyledHeading = styled(Typography)(({ theme }) => ({
  color: "#000",
  fontFamily: "Inter",
  fontSize: "40px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
}));
const StyledSub = styled(Typography)(({ theme }) => ({
  color: "#000",
  fontFamily: "Inter",
  fontSize: "20px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
  marginTop: theme.spacing(3),
}));
const cardData = [
  {
    img: "/coll.png",
    title: "Collaborate Unleashed",
    sub: "Explore the power of unleashed collaboration with insights on effective team communication, productivity hacks, and the latest trends in the digital workplace.",
  },
  {
    img: "/inn.png",
    title: "Innovation Junction",
    sub: "Navigate the intersection of innovation and collaboration. Join us on Innovation Junction for deep dives into cutting-edge technologies, AI-driven advancements",
  },
  {
    img: "/prod.png",
    title: "Productivity Pulse",
    sub: "Stay in sync with the heartbeat of productivity! Productivity Pulse is your go-to resource for tips, tricks, and in-depth guides on maximizing efficiency, task management, and workflow optimization.",
  },
  {
    img: "/techT.png",
    title: "Tech Talk Hub",
    sub: "Dive into the heart of technology discussions at Tech Talk Hub. Uncover insights into the latest advancements, tech trends, and how they impact communication, collaboration, and project management.",
  },
  {
    img: "/agile.png",
    title: "Agile Insights Hub",
    sub: "Gain valuable insights into the world of Agile methodologies. AgileInsightsHub provides thought-provoking articles, case studies, and best practices for implementing Agile workflows, sprint methodologies, and more.",
  },
  {
    img: "/incl.png",
    title: "Inclusive Teams Chronicle",
    sub: "Explore the journey to building inclusive and diverse teams. Inclusive Teams Chronicle shares stories, strategies, and resources for creating workplaces that thrive on diversity, equity, and inclusion.",
  },
  {
    img: "/techT.png",
    title: "Tech Talk Hub",
    sub: "Dive into the heart of technology discussions at Tech Talk Hub. Uncover insights into the latest advancements, tech trends, and how they impact communication, collaboration, and project management.",
  },
  {
    img: "/agile.png",
    title: "Agile Insights Hub",
    sub: "Gain valuable insights into the world of Agile methodologies. AgileInsightsHub provides thought-provoking articles, case studies, and best practices for implementing Agile workflows, sprint methodologies, and more.",
  },
  {
    img: "/incl.png",
    title: "Inclusive Teams Chronicle",
    sub: "Explore the journey to building inclusive and diverse teams. Inclusive Teams Chronicle shares stories, strategies, and resources for creating workplaces that thrive on diversity, equity, and inclusion.",
  },
  {
    img: "/techT.png",
    title: "Tech Talk Hub",
    sub: "Dive into the heart of technology discussions at Tech Talk Hub. Uncover insights into the latest advancements, tech trends, and how they impact communication, collaboration, and project management.",
  },
  {
    img: "/agile.png",
    title: "Agile Insights Hub",
    sub: "Gain valuable insights into the world of Agile methodologies. AgileInsightsHub provides thought-provoking articles, case studies, and best practices for implementing Agile workflows, sprint methodologies, and more.",
  },
  {
    img: "/incl.png",
    title: "Inclusive Teams Chronicle",
    sub: "Explore the journey to building inclusive and diverse teams. Inclusive Teams Chronicle shares stories, strategies, and resources for creating workplaces that thrive on diversity, equity, and inclusion.",
  },
];
const AllPosts = () => {
  return (
    <StyledRoot>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={6}>
          <img
            src="/allpost.png"
            style={{ height: "300px", borderRadius: "40px" }}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <StyledHeading>Introduction of Sparkamis</StyledHeading>
          <StyledSub>
            Welcome to Spike, where innovation meets collaboration – a
            revolutionary All-in-One Communication Platform that redefines
            teamwork with a seamless blend of intuitive design, powerful
            productivity tools, and transformative collaboration features
          </StyledSub>
          <Button sx={{ mt: 5 }} variant="outlined" endIcon={<ArrowForward />}>
            Read More
          </Button>
        </Grid>
      </Grid>
      <Box sx={{ mt: 15 }}>
        <Grid container spacing={3}>
          {cardData.map((val, ind) => {
            return (
              <Grid item xs={12} md={6} lg={4}>
                <Card sx={{borderRadius:'20px'}}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="240"
                      image={val.img}
                      alt="Tech Image"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {val.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {val.sub}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      <i>
                        <b>
                        Read More
                        </b>
                        </i>
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
        <Box sx={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            mt:10
        }}>
        <Pagination count={40} variant="outlined" shape="rounded" />
        </Box>
      </Box>
    </StyledRoot>
  );
};

export default AllPosts;
