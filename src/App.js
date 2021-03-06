import React, { useState, useEffect } from "react";
import "./App.css";
import Map from "./Map";
import Country from "./Country";
import Input from "./Input";

function App() {
  const [details, setDetails] = useState("");
  const [loading, setLoading] = useState(true);
  const [ipAddress, setIpAddress] = useState("");
  const [value, _setValue] = useState("");

  const api_key = "at_MHAotlNsjhap04GT2WperxD3KnpbX";

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://geo.ipify.org/api/v2/country?apiKey=${api_key}&ipAddress=${ipAddress}`
        );
        const data = await res.json();
        // console.log(data);
        setDetails(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        // console.log(error);
      }
    };
    fetchData();
  }, [ipAddress]);
  if (loading) {
    return <div className="loading"></div>;
  }

  return (
    <main>
      <div className="image-container">
        <div className="wrapper">
          <h2 className="heading">IP address tracker</h2>
          <Input
            details={details}
            value={value}
            _setValue={_setValue}
            setIpAddress={setIpAddress}
            setDetails={setDetails}
          />

          <Country details={details} />
        </div>
      </div>

      <Map />
    </main>
  );
}

export default App;
