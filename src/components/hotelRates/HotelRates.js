import React from "react";
import getRooms from "../../services/HotelService";
import List from "../../components/list/List";
import "../styles/styles.css";

const HotelRates = () => {
  const [hotel, setHotel] = React.useState(0);
  const [checkinDate, setCheckinDate] = React.useState("");
  const [nights, setNigths] = React.useState(0);
  const [availableRates, setAvailableRates] = React.useState([]);
  const [msgInfo, setMsgInfo] = React.useState("");

  function apiRequest() {
    getRooms(hotel, checkinDate, nights)
      .then(response => {
        setAvailableRates(response.availableRates[hotel]);
      })
      .catch(console.error);
  }

  function formatDate(date) {
    let splitDate = date.split("-");
    if (splitDate.count === 0) {
      return null;
    }

    let year = splitDate[0];
    let month = splitDate[1];
    let day = splitDate[2];
    return day + "/" + month + "/" + year;
  }

  function getCurrentDate() {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();

    return day + "/" + month + "/" + year;
  }

  function onSubmit(e) {
    const currentDate = getCurrentDate();

    if (!!hotel && !!checkinDate && !!nights) {
      if (hotel === "Select from the list") {
        setMsgInfo("Pick a hotel from the list");
      }

      if (checkinDate >= currentDate) {
        apiRequest();
      } else {
        setMsgInfo("Error selecting a date from the past.");
      }

      if (nights > 0 && nights <= 30) {
        apiRequest();
      } else {
        setMsgInfo("Please select between 1 and 30 days"); // If the input is 0 or >30
      }
    } else {
      setMsgInfo("All fields are mandatory");
    }
    e.preventDefault();
  }

  React.useEffect(() => {
    setMsgInfo("");
  }, [hotel, checkinDate, nights]);

  return (
    <div className={"hotel-rates"}>
      <header className={"header"}>
        <h1 className={"header-title"}>Find the cheapest option</h1>
      </header>
      <main className={"main"}>
        <section className={"body-search"}>
          {msgInfo ? <span className={"error"}>{msgInfo}</span> : ""}
          <div class="col-3">
            <form className={"select-hotel"}>
              <form>
                <div class="form-group">
                  <label for="exampleFormControlSelect1">Pick hotel</label>
                  <select
                    class="form-control form-control-sm"
                    id={"select-hotel"}
                    onChange={e => setHotel(e.currentTarget.value)}
                  >
                    <option defaultValue>Select from the list</option>
                    <option value={44069509}>Hotel Baqueira Val de Neu</option>
                    <option value={100376478}>Hotel Grand Luxor</option>
                    <option value={10030559}>Hotel Moderno</option>
                  </select>
                </div>
              </form>
            </form>
          </div>
          <form>
            <div className={"form-group search-input"}>
              <p>Select check in date</p>
              <label htmlFor={"input-checkin"}></label>
              <input
                id={"input-checkin"}
                type="date"
                placeholder={"Check-in"}
                onChange={e =>
                  setCheckinDate(formatDate(e.currentTarget.value))
                }
              />
            </div>
            <div className={"form-group search-input"}>
              <p>Select number of nights</p>
              <label htmlFor={"nights"}></label>
              <input
                id={"input-nights"}
                type="number"
                placeholder={"How many nights?"}
                onChange={e => setNigths(e.currentTarget.value)}
              />
            </div>
            <div>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={onSubmit}
              >
                Search
              </button>
            </div>
          </form>
        </section>
        <section className={"results"}>
          <h2>Search result</h2>
          {availableRates ? (
            <div>
              <ul className={"results-list"}>
                {availableRates.map((rates, i) => (
                  <List key={i} {...rates} />
                ))}
              </ul>
            </div>
          ) : (
            <div className={"error"}>
              {" "}
              <p>Sorry, no offer available</p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default HotelRates;
