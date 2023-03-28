import { useFormik } from "formik";

export interface IAvalableRoomFormProps {
  onRoomStateSubmit: (premium: number, economy: number) => void;
}

export const AvailableRoomForm = (props: IAvalableRoomFormProps) => {
  const formik = useFormik({
    initialValues: {
      numberOfPremiumRooms: 0,
      numberOfEconomyRooms: 0,
    },
    onSubmit: (values) => {
      props.onRoomStateSubmit(
        values.numberOfPremiumRooms,
        values.numberOfEconomyRooms
      );
    },
  });

  return (
    <section aria-label="available-rooms-form">
      <h2>Available Rooms</h2>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="numberOfPremiumRooms">Premium Rooms</label>
          <input
            id="numberOfPremiumRooms"
            name="numberOfPremiumRooms"
            onChange={formik.handleChange}
            type="number"
          />
        </div>
        <div>
          <label htmlFor="numberOfEconomyRooms">Economy Rooms</label>
          <input
            id="numberOfEconomyRooms"
            name="numberOfEconomyRooms"
            onChange={formik.handleChange}
            type="number"
          />
        </div>
        <div>
          <button type="submit">Calculate Revenue</button>
        </div>
      </form>
    </section>
  );
};
