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
      className={css["search-form"]}
      id="search_form"
      onSubmit={handleSubmit}
    >
      <LocationInputComponent />

      <DateInputComponent />

      <GuestInputComponent />

      <div className={css.btn}>
        {" "}
        <ButtonColorfull>
          <LuSearch /> Search
        </ButtonColorfull>
      </div>
    </form>
  );
};

export default TravelSearchComponent;
