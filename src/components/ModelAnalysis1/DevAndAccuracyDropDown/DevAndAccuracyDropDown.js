import React, { useState, useRef } from "react";
import useOnClickOutside from "../../utils";
import { downSolid } from "../../../images/image";
import styles from "./DevAndAccuracyDropDown.module.css";
const DevAndAccuracyDropDown = ({ title, dropdownItems, rightAlign }) => {
  const [dropdown, setDropDown] = useState(false);
  const handleDropdown = () => {
    if (dropdown) {
      setDropDown(false);
    } else {
      setDropDown(true);
    }
  };
  const dropdownRef = useRef();

  useOnClickOutside(dropdownRef, () => {
    setTimeout(() => {
      setDropDown(false);
    }, 10);
  });

  return (
    <div
      ref={dropdownRef}
      className="text-black w-full !p-2 font-normal border border-black-1200 font-Poppins text-base bg-transparent rounded-lg border-none focus:ring-0 relative cursor-pointer bg-white flex items-center gap-2	"
      onClick={handleDropdown}
    >
      <button
        className="text-black flex items-center justify-center"
        type="button"
      >
        {title}
      </button>{" "}
      <img
        src={downSolid}
        className={["img-fluid ml-2", dropdown && styles.rotate].join(" ")}
        alt=""
      />
      {dropdown && (
        <div
          className={["py-2 text-sm text-gray-700 ", styles.dropDownItems].join(
            " "
          )}
        >
          {dropdownItems.map((el, i) => (
            <a
              key={i}
              onClick={handleDropdown}
              href={el.to}
              className={[
                "text-sm ",
                styles.dropdownItem,
                "font-normal py-3 px-4 rounded-sm",
              ].join(" ")}
            >
              {el.item}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default DevAndAccuracyDropDown;
