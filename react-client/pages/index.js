import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import parse from "html-react-parser";

export default function Home({ data }) {
  return (
    <div className={styles.container}>
      {parse(data.html)}
      <footer className={styles.footer}></footer>
    </div>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const response = await fetch(`http://localhost:7777/navbar-data`);
  const data = await response.json();
  // console.log(data);
  return { props: { data } };
}
