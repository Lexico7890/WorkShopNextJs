import styles, { globalStyles } from "./style";

export default function AppLayout({ children }) {
  return (
    <>
      <div>
        <main>{children}</main>
      </div>
      <style jsx>{styles}</style>
      <style global jsx>
        {globalStyles}
      </style>
    </>
  );
}
