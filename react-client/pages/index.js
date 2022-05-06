import styles from "../styles/Home.module.css";
import parse from "html-react-parser";

export default function Home({ data }) {
  return (
    <div className={styles.container}>
      {parse(data.html)}
      {/* <script>{data.javascript}</script> */}
      <footer className={styles.footer}></footer>
    </div>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const response = await fetch(`http://localhost:7777/navbar-data`);
  const data = await response.json();
  data.html = sanitizeJavaScript(data.html);
  data.html = sanitizeCss(data.html);

  return { props: { data } };
}

function sanitizeCss(input) {
  const replaceWith = ">"; // e.g. replace &quot; by "
  const result = input.replace(/&gt;/g, replaceWith);
  return result;
}

function sanitizeJavaScript(input) {
  const replaceWith = '"'; // e.g. replace &quot; by "
  const result = input.replace(/&quot;/g, replaceWith);
  return result;
}
