import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "@styles/Home.module.css";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { decrement, increment } from "@store/slices/counterSlice";
import { Button } from "@mui/material";
import Layout from "@components/Layout";
import HomePage from "./HomePage";

const Home: NextPage = () => {
  const value = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  return (
    <Layout>
      <HomePage></HomePage>
    </Layout>
  );
};

export default Home;
