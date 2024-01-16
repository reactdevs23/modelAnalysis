import React, { useState, useRef } from "react";
import useOnClickOutside from "../utils";
import { downSolid } from "../../images/image";
import styles from "./Dropdown.module.css";
const DropDown = ({ dropdownItems, setCurrentItem, currentItem, textSize }) => {
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
      className="text-black w-full !p-2 font-normal border border-black-1200 font-Poppins text-base bg-transparent rounded-lg border-none focus:ring-0 relative cursor-pointer bg-white 	"
      onClick={handleDropdown}
    >
      <div className="flex justify-between w-full">
        {" "}
        <p
          className={["font-normal", textSize ? textSize : "text-sm "].join(
            " "
          )}
        >
          {currentItem}
        </p>
        <img
          src={downSolid}
          className={["w-3", dropdown && styles.rotate].join(" ")}
          alt=""
        />
      </div>
      {dropdown && (
        <div className={styles.dropDownItems}>
          {dropdownItems.map((el, i) => (
            <p
              className={[
                textSize ? textSize : "text-sm ",
                styles.dropdownItem,
                "font-normal py-3 px-4 rounded-sm",
              ].join(" ")}
              key={i}
              onClick={() => {
                handleDropdown();
                setCurrentItem(el);
              }}
            >
              {el}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;
