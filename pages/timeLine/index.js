import Link from "next/link";
import AppLayout from "../../components/AppLayout";

export default function TimeLine({userName}) {
  return (
    <>
      <AppLayout>
        <h3>of {userName}</h3>
        <Link href="/">
          <a>
            <h3>This is time line </h3>
          </a>
        </Link>
      </AppLayout>
    </>
  );
}

TimeLine.getInitialProps = async() => {
      return {userName: '@oscar casas'}
}
