import Link from "next/link";

const ErrorPage = () => {
  return (
    <>
      <h1>Error</h1>
      <Link href={"/"}><a>Go back</a></Link>  
    </>
  )
};

export default ErrorPage;
