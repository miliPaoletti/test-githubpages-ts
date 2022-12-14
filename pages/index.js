import Head from "next/head";
import { useEffect, useState } from "react";
import { fetchAllDestinations } from "./api/destinations";

export default function Home() {
  const [allDestinations, setAllDestinations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetchAllDestinations().then((val) => {
      console.log("val");
      console.log(val);
      setAllDestinations(val.slice(0, 6));
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Loading ....</p>;
  }
  return (
    <div>
      <Head>
        <title>Test TS</title>
        <meta name="description" content="Generated by create next app" />
        {/* <link
          rel="icon"
          href={`${process.env.NEXT_PUBLIC_FAVICON}/favicon.ico`}
        /> */}
      </Head>
      Testing
      <div>Delete ./</div>
      {allDestinations.map((item) => {
        return (
          <div key={item["id"]}>
            {item["id"]} - {item["data"].title}
          </div>
        );
      })}
    </div>
  );
}
