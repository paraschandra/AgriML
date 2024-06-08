import React, { useState } from "react";
import parse from "html-react-parser";
import cropData from "../../../constants/cropData";
import fertilizer_rec from "../../../assets/fertilizer_rec.jpeg";

const Fertilizers = () => {
  const initialData = {
    n: "",
    p: "",
    k: "",
    crop: "",
    state: "",
    district: "",
    target: "",
  };
  const [formData, setFormData] = useState(initialData);
  const [result, setResult] = useState(null);

  const [states, setStates] = useState(null);
  const [districts, setDistricts] = useState(null);

  const crops = cropData;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/fertilizer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setResult(data.result);
    } catch (error) {
      console.error("Error:", error);
    }

    setFormData(initialData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCropChange = (e) => {
    setFormData({ ...formData, crop: e.target.value });
    setStates(crops.find((crop) => crop.name === e.target.value).states);
  };

  const handleStateChange = (e) => {
    setFormData({ ...formData, state: e.target.value });
    setDistricts(
      states.find((state) => state.name === e.target.value).districts
    );
  };

  const handleReset = () => {
    setFormData(initialData);
    setResult(null);
  };

  return (
    <>
      <div className="w-full sm:max-w-7xl mx-auto sm:py-8">
        <br />
        <h2 className="text-3xl sm:text-3xl font-semibold sm:text-left text-center sm:ml-8">
          | Fertilizer Recommendations
        </h2>
        <div className="relative flex sm:flex-row flex-col justify-between items-center rounded-ld sm:mx-16 mx-2">
          <div className="flex flex-col justify-between items-center my-10">
            <div className={`pt-1 h-full ${result ? "hidden" : ""}`}>
              <img className="w-96" src={fertilizer_rec} alt="image3" />
            </div>

            <div className="text-center sm:text-left font-normal text-lg sm:max-w-xl">
              {result !== null && <p>{parse(result)}</p>}
            </div>
          </div>

          <div className="sm:w-3/6 w-4/5 max-w-full rounded-lg shadow-lg sm:px-10 px-4 py-8 my-10 sm:my-0">
            <form onSubmit={handleSubmit}>
              <label
                htmlFor="nitrogen"
                className="text-2xl sm:text-lg font-semibold"
              >
                Nitrogen
              </label>
              <br />
              <input
                type="number"
                min={0}
                max={140}
                name="n"
                value={formData.n}
                onChange={handleChange}
                placeholder="Enter available nitrogen..."
                required
                className="w-full h-12 border-b-2 px-2"
              />
              <br />
              <br />

              <label
                htmlFor="phosphorous"
                className="text-2xl sm:text-lg font-semibold"
              >
                Phosphorous
              </label>
              <br />
              <input
                type="number"
                min={5}
                max={145}
                name="p"
                value={formData.p}
                onChange={handleChange}
                placeholder="Enter available phosphorous..."
                required
                className="w-full h-12 border-b-2 px-2"
              />
              <br />
              <br />

              <label
                htmlFor="potassium"
                className="text-2xl sm:text-lg font-semibold"
              >
                Potassium
              </label>
              <br />
              <input
                type="number"
                min={5}
                max={205}
                name="k"
                value={formData.k}
                onChange={handleChange}
                placeholder="Enter available potassium..."
                required
                className="w-full h-12 border-b-2 px-2"
              />
              <br />
              <br />

              <label
                htmlFor="crop"
                className="text-2xl sm:text-lg font-semibold"
              >
                Crop
              </label>
              <br />
              <select
                name="crop"
                value={formData.crop}
                onChange={handleCropChange}
                required
                className="w-full h-12 border-b-2 px-2 cursor-pointer"
              >
                <option disabled={true} value="">
                  Select a crop
                </option>
                {crops.map((crop, idx) => (
                  <option key={idx} value={crop.name}>
                    {crop.name}
                  </option>
                ))}
              </select>
              <br />
              <br />

              <label
                htmlFor="state"
                className="text-2xl sm:text-lg font-semibold"
              >
                State
              </label>
              <br />
              <select
                name="state"
                value={formData.state}
                onChange={handleStateChange}
                required
                className="w-full h-12 border-b-2 px-2 cursor-pointer"
              >
                <option disabled={true} value="">
                  Select a state
                </option>
                {states?.map((state) => (
                  <option value={state.name}>{state.name}</option>
                ))}
              </select>
              <br />
              <br />

              <label
                htmlFor="district"
                className="text-2xl sm:text-lg font-semibold"
              >
                District
              </label>
              <br />
              <select
                name="district"
                value={formData.district}
                onChange={handleChange}
                required
                className="w-full h-12 border-b-2 px-2 cursor-pointer"
              >
                <option disabled={true} value="">
                  Select a district
                </option>
                {districts?.map((district, idx) => (
                  <option key={idx} value={district}>
                    {district}
                  </option>
                ))}
              </select>
              <br />
              <br />

              <label
                htmlFor="target"
                className="text-2xl sm:text-lg font-semibold"
              >
                Targeted yield:
              </label>
              <br />
              <input
                type="number"
                name="target"
                value={formData.target}
                onChange={handleChange}
                placeholder="Enter yield target in q / HA..."
                required
                className="w-full h-12 border-b-2 px-2"
              />
              <br />

              <div className="mt-8 float-right">
                <button
                  type="button"
                  onClick={handleReset}
                  value="Reset"
                  className="inline-flex text-white items-center px-6 py-3 mr-6 font-medium bg-gray-400 rounded-lg hover:opacity-80"
                >
                  Reset
                </button>

                <button
                  type="submit"
                  className="inline-flex text-white items-center px-6 py-3 font-medium bg-emerald-600 rounded-lg hover:opacity-80"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fertilizers;
