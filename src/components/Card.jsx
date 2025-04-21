import React from "react";
import { ArrowRight } from "lucide-react";

function Card({ text, image, cardColor }) {
  const textArray = text.split(" ");
  const lastWord = textArray[textArray.length - 1];
  const firstPart = textArray.slice(0, -1).join(" ");
  let textColor = "";
  let bgColor = "";
  let buttonColor = "";
  let buttonStroke = "";
  let linkColor = "";
  if (cardColor === "white") {
    textColor = "bg-accent text-black";
    bgColor = "bg-white";
    buttonColor = "bg-black text-white";
    buttonStroke = "stroke-accent";
    linkColor = "text-black";
  } else if (cardColor === "black") {
    textColor = "bg-white text-black";
    bgColor = "bg-black";
    buttonColor = "bg-white text-white";
    buttonStroke = "stroke-black";
    linkColor = "text-white";
  } else if (cardColor === "green") {
    textColor = "bg-white text-black";
    bgColor = "bg-accent";
    buttonColor = "bg-white text-white";
    buttonStroke = "stroke-black";
    linkColor = "text-black";
  }
  return (
    <div
      className={`${bgColor}  flex flex-col 
      justify-around p-6 max-w-full gap-8 mx-auto border-2 border-black
      md:flex-row md:items-center md:gap-6 lg:gap-18 rounded-4xl shadow-[0_4px_0px_rgba(0,0,0,1)] shadow-black`}
    >
      <div className="w-1/2">
        <h3 className="font-bold ft flex flex-col gap-2 text-2xl md:text-xl lg:text-4xl md:mb-6 lg:mb-12">
          <div>
            <span className={`${textColor} rounded-lg text-left`}>
              {firstPart}
            </span>
          </div>
          <div>
            <span className={`${textColor} rounded-lg text-left`}>
              {lastWord}
            </span>
          </div>
        </h3>
        <div className="hidden md:flex md:gap-4 items-center ">
          <div>
            <ArrowRight
              className={`${buttonColor} rotate-[-45deg] hover:rotate-[0deg]  transition-transform duration-150 ease-in-out t size-8 rounded-full stroke-2 ${buttonStroke}`}
            />
          </div>
          <p className={`hidden ${linkColor} sm:inline-block`}>Learn more</p>
        </div>
      </div>
      <div className="flex  md:block md:w-1/2 justify-around items-end gap-12">
        <div className={``}>
          <ArrowRight
            className={`${buttonColor}  md:hidden rotate-[-45deg] hover:rotate-[0deg] transition-transform duration-150 ease-in-out rounded-full size-9 stroke-2 ${buttonStroke}`}
          />
        </div>
        <img src={image} className="" width={400} alt="" />
      </div>
    </div>
  );
}

export default Card;
