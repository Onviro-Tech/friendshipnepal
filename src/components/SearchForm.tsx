import React, { useEffect, useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import Button from "./Button";
import Calendar from "./CustomDatePicker";
import { destinationList } from "../datas/data";

const SearchForm = () => {
  const [selectedDate2, setSelectedDate2] = useState<any>(null);
  const [activeMonth2, setActiveMonth2] = useState<number>(0); // Specify the type as number
  const [duration, setDuration] = useState<boolean>(false);
  const [personNum, setPersonNum] = useState<any>(false);
  const [date, setDate] = useState<boolean>(false);
  const [seniorNum, setSeniorNum] = useState<number>(1); // Specify the type as number
  const [infantNum, setInfantNum] = useState<number>(0); // Specify the type as number
  const [totalNum, setTotalNum] = useState<any>(0);
  const [selectedDestination, setSelectedDestination] = useState<any>('');

  useEffect(() => {
    const currentDate = new Date();
    const month = currentDate.getMonth();
    // const day = currentDate.getDate();

    setActiveMonth2(month);

    // setSelectedDate2(day);
  }, []);

  const handleDateClick2 = (day: any) => {
    setSelectedDate2(day);
  };

  const handlePrevMonth2 = () => {
    if (activeMonth2 > 0) {
      setActiveMonth2((prev: any) => prev - 1);
    }
  };

  const handleNextMonth2 = () => {
    if (activeMonth2 < 11) {
      setActiveMonth2((prev: any) => prev + 1);
    }
  };
  useEffect(() => {
    setTotalNum(seniorNum + infantNum);
  }, [seniorNum, infantNum]);

  const handleDestinationClick = (item:any) => {
    setSelectedDestination(item.name);
    setDuration(false); // Close the dropdown after selecting an item
  };

  return (
    <div className="w-max px-[11px] mt-4 lg:mt-8 font-inter">
      <div
        className="tracking-widest flex flex-col lg:flex-row justify-evenly items-center gap-[17px] py-8 lg:py-0 lg:gap-[51px] rounded-[10px] px-8"
        style={{
          backgroundColor: "rgb(255 255 255 / 57%)",
          backdropFilter: "blur(51px)",
        }}
      >
        <div className="relative">
          <div
            className="lg:px-8 lg:py-4 cursor-pointer text-black flex justify-between gap-[11px] items-center"
            onClick={() => {
              setDuration((prev: any) => !prev);
              setPersonNum(false);
              setDate(false);
            }}
          >
            <p>{selectedDestination || 'Destination ?'}</p>
            <AiFillCaretDown />
          </div>
          {duration && (
            <div className="w-max absolute left-[50%] transition -translate-x-[50%] top-[137%] z-50 shadow-2xl bg-white px-3 py-3 lg:px-5 rounded-[12px]">
              {destinationList.map((item: any, index: number) => (
                <div
                  className="flex justify-center items-center text-[#73767F] text-[21px] border-b border-[#73767F] py-1"
                  key={index}
                  onClick={() => handleDestinationClick(item)}
                >
                  <div className="text-[17px] w-[100px] cursor-pointer">
                    <p>{item?.name}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="relative">
          <div
            className="lg:px-8 lg:py-4 lg:border-l-2 cursor-pointer text-black flex justify-between gap-[11px] items-center"
            onClick={() => {
              setPersonNum((prev: any) => !prev);
              setDuration(false);
              setDate(false);
            }}
          >
            <p>
              <strong className="text-black mr-1">{totalNum}</strong>
              {totalNum > 1 ? "Persons" : totalNum <= 1 ? "Person" : ""}
            </p>
            <AiFillCaretDown />
          </div>
          {personNum && (
            <div className="w-max absolute left-[50%] transition -translate-x-[50%] top-[137%] z-50 shadow-2xl bg-white p-3 lg:p-5 rounded-[12px]">
              <div className="flex justify-center items-center text-[#73767F] text-[21px] border-b border-[#73767F] py-3">
                <div
                  className="w-[21px] h-[21px] flex items-center justify-center border border-mainColor font-bold text-mainColor cursor-pointer"
                  onClick={() => {
                    if (seniorNum > 1) {
                      setSeniorNum((prev: any) => prev - 1);
                    }
                  }}
                >
                  -
                </div>
                <div className="text-[17px] w-[100px] text-center flex gap-1 justify-evenly">
                  <p>{seniorNum}</p>
                  <p>Adults</p>
                </div>
                <div
                  className="w-[21px] h-[21px] flex items-center justify-center border border-mainColor font-bold text-mainColor cursor-pointer"
                  onClick={() => {
                    setSeniorNum((prev: any) => prev + 1);
                  }}
                >
                  +
                </div>
              </div>

              <div className="flex justify-center items-center text-[#73767F] text-[21px] py-3">
                <div
                  className="w-[21px] h-[21px] flex items-center justify-center border border-mainColor font-bold text-mainColor cursor-pointer"
                  onClick={() => {
                    if (infantNum > 0) {
                      setInfantNum((prev: any) => prev - 1);
                    }
                  }}
                >
                  -
                </div>
                <div className="text-[17px] w-[100px] text-center flex gap-1 justify-evenly">
                  <p>{infantNum}</p>
                  <p>Children</p>
                </div>
                <div
                  className="w-[21px] h-[21px] flex items-center justify-center border border-mainColor font-bold text-mainColor cursor-pointer"
                  onClick={() => {
                    setInfantNum((prev: any) => prev + 1);
                  }}
                >
                  +
                </div>
              </div>
              <div className="w-full" onClick={() => {}}>
                <Button
                  btnName="Done"
                  style="bg-[#FEB13A] w-full rounded-[5px] py-[10px] text-[18px] text-white"
                  handleOnclick={() => {
                    setPersonNum(false);
                  }}
                />
              </div>
            </div>
          )}
        </div>
        <div className="relative">
          <div
            className="lg:px-8 lg:py-4 lg:border-l-2 cursor-pointer text-black flex justify-between gap-[11px] items-center"
            onClick={() => {
              setDate((prev: any) => !prev);
              setPersonNum(false);
              setDuration(false);
            }}
          >
            <p>             
              {selectedDate2 !==null ? `${activeMonth2}/${selectedDate2}/2023` : "Date"}
            </p>
            <AiFillCaretDown />
          </div>
          {date && (
            <div className="w-max absolute left-[50%] transition -translate-x-[50%] top-[137%] z-50 shadow-2xl bg-white p-2 lg:p-5 rounded-[12px]">
              <Calendar
                handleDateClick={handleDateClick2}
                activeMonth={activeMonth2}
                handleNextMonth={handleNextMonth2}
                handlePrevMonth={handlePrevMonth2}
                selectedDate={selectedDate2}
                isDoubleDatePicker={false}
                handleDoneBtn={() => {
                  setDate(false);
                }}
              />
            </div>
          )}
        </div>
        <div className="lg:px-8 lg:my-4 lg:border-l-2 cursor-pointer text-black">
          <Button
            btnName="Search"
            handleOnclick={() => {
              ("");
            }}
            style="bg-[#FEB13A] tracking-widest text-white font-inter px-[51px] py-4 rounded-[10px]"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
