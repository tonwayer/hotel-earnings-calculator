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
    <section
      aria-label="available-rooms-form"
      className="border p-4 border-blue-300/80 rounded-md"
    >
      <h2>Available Rooms</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="flex items-end mt-4">
          <img
            alt="free premium rooms"
            className="w-10 mr-2"
            src="/premium.png"
          />
          <div>
            <label
              htmlFor="numberOfPremiumRooms"
              className="mb-2 text-sm font-medium text-gray-900 mr-1"
            >
              Premium Rooms:{" "}
            </label>
            <input
              id="numberOfPremiumRooms"
              className="rounded bg-gray-50 border border-gray-300 text-gray-900 text-sm p-1"
              name="numberOfPremiumRooms"
              onChange={formik.handleChange}
              type="number"
            />
          </div>
        </div>
        <div className="flex items-end mt-4">
          <img
            alt="free economy rooms"
            className="w-10 mr-2"
            src="/economy.png"
          />
          <div>
            <label
              htmlFor="numberOfEconomyRooms"
              className="mb-2 text-sm font-medium text-gray-900 mr-1"
            >
              Economy Rooms:{" "}
            </label>
            <input
              id="numberOfEconomyRooms"
              className="rounded bg-gray-50 border border-gray-300 text-gray-900 text-sm p-1"
              name="numberOfEconomyRooms"
              onChange={formik.handleChange}
              type="number"
            />
          </div>
        </div>
        <div className="mt-4 flex justify-center">
          <button
            className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            type="submit"
          >
            Calculate Earnings
          </button>
        </div>
      </form>
    </section>
  );
};
