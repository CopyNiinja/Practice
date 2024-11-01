import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import logo2 from "../assets/logoF.png";
import logo1 from "../assets/logoM.png";
// eslint-disable-next-line react/prop-types
export default function Home({ data }) {
  const [birthday, setBirthday] = useState([]);
  useEffect(() => {
    const today = new Date();
    // eslint-disable-next-line react/prop-types
    const todaysBirthday = data.filter((obj) => {
      if (
        obj.DOB?.getMonth() === today.getMonth() &&
        obj.DOB?.getDate() === today.getDate()
      )
        return true;
    });
    setBirthday(todaysBirthday);
  }, [data]);

  const handleClick = (i) => {
    const filter = [...birthday];
    filter.splice(i, 1);

    setBirthday(filter);
  };

  return (
    <div className=" sm:p-8   sm:mx-2 sm:mr-8">
      <h1 className="text-center font-medium">
        {birthday.length} People Birthday Today!
      </h1>

      <div className=" mt-2 space-y-3 sm:space-y-4">
        {birthday.map((obj, i) => {
          const age = new Date().getFullYear() - obj.DOB.getFullYear();
          return (
            <div
              key={Math.random()}
              className="flex sm:my-2 sm:mx-4 gap-2 justify-between bg-slate-100 rounded-lg  px-2 sm:px-6 py-1 sm:py-3  items-center"
            >
              <div>
                <img
                  src={obj.gender == "M" ? logo1 : logo2}
                  alt=""
                  className="h-12 w-12"
                />
              </div>
              <div>
                <h1
                  className={
                    obj.gender == "M"
                      ? "text-xl text-blue-950"
                      : "text-xl text-pink-700"
                  }
                >
                  {obj.name}
                </h1>
                <p className="text-gray-600">{`${age} years old`}</p>
              </div>
              <div>
                {obj.relationship == "family" ? (
                  <p className="text-purple-700  mx-2 font-medium">family</p>
                ) : (
                  <p className="text-orange-700 mx-2 font-medium">
                    {obj.relationship}
                  </p>
                )}
              </div>

              <button
                className="bg-emerald-600 hover:bg-emerald-800  ml-8 px-3 py-1 rounded-md text-white"
                onClick={() => (window.location = `mailto:${obj.email}`)}
              >
                Wish Now?
              </button>
              <button
                onClick={() => handleClick(i)}
                className="text-green-600 hover:text-emerald-800  "
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
