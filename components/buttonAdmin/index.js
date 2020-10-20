export default function ButtonAdmin({ children, onClick, color }) {
  return (
    <>
      <button onClick={onClick}>{children}</button>
      <style jsx>
        {`
          button {
            background: ${color};
            border: 0;
            color: #fff;
            border-radius: 8px;
            font-weight: 700;
            font-size: 20px;
            padding: 15px 24px;
            cursor: pointer;
            transition: opacity 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            user-select: none;
            width: 100%;
            margin: 10px 0px;
          }

          button[disabled] {
            opacity: 0.2;
            pointer-events: none;
          }

          button > :global(svg) {
            margin-right: 10px;
          }

          button:hover {
            opacity: 0.7;
            color: #fff;
          }
        `}
      </style>
    </>
  );
}
