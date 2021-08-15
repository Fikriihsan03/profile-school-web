import Head from "next/head";
import Footer from "../components/Footer/footer";
import Layout from "../components/Layout/layout";
import Navbar from "../components/Navbar/navbar";

export default function Home() {
  return (
    <Layout title="Home">
      <h1>Welcome to home page</h1>
    </Layout>
  );
}
