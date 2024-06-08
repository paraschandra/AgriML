import React, { useState } from "react";
import parse from "html-react-parser";
import Crop from "../../../assets/crop.svg";

const Crops = () => {
  const initialData = { n: "", p: "", k: "", pH: "", state: "", dist: "" };
  const [formData, setFormData] = useState(initialData);
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/crop", {
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

  const handleReset = () => {
    setFormData(initialData);
    setResult(null);
  };

  return (
    <>
      <div className="w-full sm:max-w-7xl mx-auto">
        <br />
        <h2 className="text-3xl sm:text-3xl font-semibold sm:text-left text-center sm:ml-8 sm:mt-6">
          | Crop Recommendation
        </h2>
        <div className="relative flex sm:flex-row flex-col justify-between items-center rounded-ld sm:mx-16 mx-2 sm:py-12">
          <div className="sm:w-3/6 w-4/5 max-w-full rounded-lg shadow-lg sm:px-10 px-4 sm:py-10 py-6">
            <form onSubmit={handleSubmit}>
              <label
                htmlFor="nitrogen"
                className="text-2xl sm:text-lg font-semibold"
              >
                Nitrogen &nbsp;
                <span className="text-sm font-light">(0 - 140 kg / ha)</span>
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
                Phosphorous &nbsp;
                <span className="text-sm font-light">(5 - 145 kg / ha)</span>
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
                Potassium &nbsp;
                <span className="text-sm font-light">(5 - 205 kg / ha)</span>
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

              <label htmlFor="ph" className="text-2xl sm:text-lg font-semibold">
                pH level &nbsp;
                <span className="text-sm font-light">(3.5 - 9.94)</span>
              </label>
              <br />
              <input
                type="number"
                min={3.5}
                max={9.94}
                name="pH"
                value={formData.pH}
                onChange={handleChange}
                step={0.01}
                placeholder="Enter soil pH..."
                required
                className="w-full h-12 border-b-2 px-2"
              />
              <br />
              <br />

              <label
                htmlFor="state"
                className="text-2xl sm:text-lg font-semibold"
              >
                State
              </label>
              <br />
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="Enter state..."
                required
                className="w-full h-12 border-b-2 px-2"
              />
              <br />
              <br />

              <label
                htmlFor="dist"
                className="text-2xl sm:text-lg font-semibold"
              >
                District
              </label>
              <br />
              <input
                type="text"
                name="dist"
                value={formData.dist}
                onChange={handleChange}
                placeholder="Enter district..."
                required
                className="w-full h-12 border-b-2 px-2"
              />
              <br />

              <div className="mt-8">
                <button
                  type="button"
                  value="Reset"
                  onClick={handleReset}
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
          <div className="flex flex-col justify-between items-center my-10">
            <div className={`sm:ml-auto pt-1 h-full ${result ? "hidden" : ""}`}>
              <img className="h-80" src={Crop} alt="image3" />
            </div>
            <div className="text-center sm:text-left font-normal text-lg sm:max-w-xl">
              {result !== null && <p>{parse(result)}</p>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Crops;
