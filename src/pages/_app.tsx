import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import "@/styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <SEO title={process.env.siteTitle} />
    <Component {...pageProps} />
  </Layout>
);

export default MyApp;
