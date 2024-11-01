import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import pic from "../assets/bear4.jpg";
// eslint-disable-next-line react/prop-types
export default function Add({ data, change }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    DOB: "",
    gender: "",
    relationship: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();

    const newData = [...data];
    const newObj = {
      name: form.name,
      DOB: new Date(form.DOB),
      gender: form.gender,
      email: form.email,
      relationship: form.relationship,
    };
    newData.push(newObj);
    change(newData);
    toast.success(`${form.name}'s Birthday Added!`);
    console.log(newData);
  };
  const handleChange = (e) => {
    setForm((obj) => ({ ...obj, [e.target.name]: e.target.value }));
  };
  return (
    <div className="p-2 md:p-6 flex  items-center ">
      <Toaster position="top-center" reverseOrder={false} />
      <form
        onSubmit={handleSubmit}
        className="flex flex-3 flex-col gap-y-2 md:gap-y-6 mt-4 md:mt-8 sm:text-lg text-emerald-950 font-semibold"
      >
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={form.name}
            onChange={handleChange}
            className="font-normal border-2 rounded-md ml-4"
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="font-normal rounded-md   border-2 ml-[1.2rem]"
            required
          />
        </div>
        <div>
          <label htmlFor="DOB">DOB:</label>
          <input
            type="date"
            name="DOB"
            id="DOB"
            value={form.DOB}
            onChange={handleChange}
            className="font-thin rounded-md  px-10 border-2 ml-6"
            max={(() => {
              const today = new Date();
              return `${today.getFullYear()}-${String(
                today.getMonth() + 1
              ).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
            })()}
            required
          />
        </div>

        <div>
          <label htmlFor="male">male:</label>
          <input
            type="radio"
            name="gender"
            id="male"
            value="M"
            checked={form.gender === "M"}
            onChange={handleChange}
            required
            className="mx-2 "
          />
          <label htmlFor="female">female:</label>
          <input
            type="radio"
            name="gender"
            id="female"
            value="F"
            checked={form.gender === "F"}
            onChange={handleChange}
            required
            className="ml-2"
          />
        </div>
        <div>
          <label htmlFor="relationship">Relationship:</label>
          <select
            name="relationship"
            id="relationship"
            value={form.relationship}
            onChange={handleChange}
            required
            className="font-normal border-2 rounded-md ml-4"
          >
            <option value="" disabled>
              Select relationship
            </option>
            <option value="friend">Friend</option>
            <option value="family">Family</option>
            <option value="colleague">Colleague</option>
          </select>
        </div>
        <button
          type="submit"
          className="border-2 hover:bg-emerald-800   bg-emerald-500 text-white px-2 py-2 rounded-md"
        >
          Add
        </button>
      </form>
      <div className="flex-1 sm:pl-12">
        <img src={pic} alt="" className="w-full " />
      </div>
    </div>
  );
}
