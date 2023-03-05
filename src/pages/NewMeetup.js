import axios from "axios";
import { useNavigate } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetups() {
  const navigate = useNavigate();
  /* fetch, then 버전 */
  // const addMeetupHandler = (meetupData) => {
  //   fetch(`${process.env.REACT_APP_DATABASE_BASE_URL}/meetups.json`, {
  //     method: "POST",
  //     body: JSON.stringify(meetupData),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   }).then(() => {
  //     navigate("/");
  //   });
  // };

  /* axios, navigate(replace) 버전 */
  const addMeetupHandler = async (meetupData) => {
    try {
      await axios.post(
        `${process.env.REACT_APP_DATABASE_BASE_URL}/meetups.json`,
        meetupData
      );
      navigate("/", { replace: true });
    } catch (error) {
      console.log("Error:", error.response.data);
    }
  };
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}
export default NewMeetups;
