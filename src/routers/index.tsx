import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../modules/home";
import Todo from "../modules/todo";
import Users from "../modules/users";
import Gallery from "../modules/galery";

import Layout from "../shared/components/layout";
import AuthRoutes from "../shared/AuthRoutes";
import Moveit from "../modules/moveit";

const AppRouters: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <AuthRoutes>
            <Layout>
              <Home />
            </Layout>
          </AuthRoutes>
        }
      />
      <Route
        path="/todo"
        element={
          <AuthRoutes>
            <Layout>
              <Todo />
            </Layout>
          </AuthRoutes>
        }
      />
      <Route
        path="/users"
        element={
          <AuthRoutes>
            <Layout>
              <Users />
            </Layout>
          </AuthRoutes>
        }
      />
      <Route
        path="/gallery"
        element={
          <AuthRoutes>
            <Layout>
              <Gallery />
            </Layout>
          </AuthRoutes>
        }
      />

      <Route
        path="/moveit"
        element={
          <AuthRoutes>
            <Layout>
              <Moveit />
            </Layout>
          </AuthRoutes>
        }
      />
    </Routes>
  );
};

export default AppRouters;
