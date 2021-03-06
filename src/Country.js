const Country = ({ details }) => {
  if (details.messages) {
    return (
      <div className="ip-address">
        <h2>Something went wrong! check your ip address or try again later</h2>
      </div>
    );
  }

  // console.log(details)
  const {
    ip,
    location: { country, region, timezone },
    isp,
  } = details;
  return (
    <div className="ip-address">
      <div>
        <h4>ip address</h4>
        <h2>{ip}</h2>
      </div>
      <div>
        <h4>location</h4>
        <h2>{`${country} ${region}`}</h2>
      </div>
      <div>
        <h4>timezone</h4>
        <h2>UTC {timezone}</h2>
      </div>
      <div>
        <h4>isp</h4>
        <h2>{isp}</h2>
      </div>
    </div>
  );
};

export default Country;
