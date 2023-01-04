import React from "react";
import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import MyAchievement from "../components/MyAchievement";
import MyProfile from "../components/MyProfile";
import MyProject from "../components/MyProject";
import Layout from "./Layout";

const Profile = () => {
  return (
    <Layout>
      <MyProfile />
      <AboutMe />
      <MyProject />
      <MyAchievement />
      <Contact />
    </Layout>
  );
};

export default Profile;
