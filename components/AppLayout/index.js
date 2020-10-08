import styles, { globalStyles } from "./style";
import Nav from "components/nav";
import Navbar from "components/navbar";

export default function AppLayout({ children }) {
  return (
    <>
      <div>
        <Nav />
        <main>{children}</main>
        <Navbar />
      </div>
      <style jsx>{styles}</style>
      <style global jsx>
        {globalStyles}
      </style>
    </>
  );
}
