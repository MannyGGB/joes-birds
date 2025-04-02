//form handled with a server action!

import { BirdType } from "../types/BirdType";

// import { BirdType } from "../types/BirdType";

export default function BirdForm() {
  async function handleSubmit(formData: FormData) {
    "use server";
    const formValues: BirdType = {
      //@ts-expect-error: get is not in BirdType
      bird_name: formData.get("bird_name"),
      //@ts-expect-error: get is not in BirdType
      bird_location: formData.get("bird_location"),
      //@ts-expect-error: get is not in BirdType
      bird_image: formData.get("bird_image"),
    };

    await fetch(`${import.meta.env.VITE_SERVER_POST_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ formValues }),
    });
  }

  return (
    <div>
      <form
        action={handleSubmit}
        className="flex flex-col items-center rounded-md border-2 border-fuchsia-600"
      >
        <fieldset className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
          <legend className="fieldset-legend">
            Add a new bird to the nest
          </legend>

          <label className="fieldset-label">Bird name: </label>
          <input
            type="text"
            className="input"
            placeholder="Write the name of the bird"
            name="bird_name"
            required
          />

          <label className="fieldset-label">Bird location: </label>
          <input
            type="text"
            className="input"
            placeholder="Where did you see it?"
            name="bird_location"
            required
          />

          <label className="fieldset-label">Bird image URL: </label>
          <input
            type="text"
            className="input"
            placeholder="Paste a link to the image"
            name="bird_image"
            required
          />
        </fieldset>
        <button
          className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl p-2 m-2 hover:bg-fuchsia-600 cursor-pointer"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
