import css from "./index.module.css";
import { LuSearch } from "react-icons/lu";
import DateInputComponent from "../date_input";
import GuestInputComponent from "../guest_input";
import LocationInputComponent from "../location_input";
import ButtonColorfull from "../../buttons/button_colorful";
const TravelSearchComponent = () => {
  // const form = document.querySelector("#search_form");

  // form.addEventListener("submit", submitForm);

  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <form
      id="search_form"
      className={css["search-form"]}
      onSubmit={handleSubmit}
    >
      <LocationInputComponent />

      <DateInputComponent />

      <GuestInputComponent />

      <ButtonColorfull>
        <LuSearch /> Search
      </ButtonColorfull>
    </form>
  );
};

export default TravelSearchComponent;
