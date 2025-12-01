import React, { useEffect, useState } from "react";
import RestartIcon from "./Icons/RestartIcon";
import { faker } from "@faker-js/faker";

const words = faker.word.words(40);

const TypingBoard = ({timeLeft} : {timeLeft: number}) => {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-15">
      <Counter timeLeft={timeLeft} />
      <GenerateRandomWords />
      <div className="size-10 ml-2 mt-10 cursor-pointer bg-primary-800 rounded-full flex items-center justify-center">
        <RestartIcon className="text-primary-100" />
      </div>
    </div>
  );
};

const GenerateRandomWords = () => {
    const [words, setWords] = useState<string>("");

    useEffect(() => {
      setWords(faker.word.words(40));
    }, []);
  return (
    <p className="max-w-[1536px] text-4xl text-primary-800 text-justify leading-12 tracking-tight [word-spacing:8px] mt-5">
      {words}
    </p>
  );
};

const Counter = ({timeLeft} : {timeLeft: number}) => {
  return (
    <div className="w-full flex items-center justify-center text-4xl text-primary-800 font-bold">
      {timeLeft}
    </div>
  );
};

export default TypingBoard;
