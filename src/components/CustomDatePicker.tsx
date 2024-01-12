import React, { FC } from "react";
import "../styles/style.css";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

interface CalendarProps {
    isDoubleDatePicker: boolean;
    handleDateClick: (day: number) => void;
    selectedDate: number;
    activeMonth: number;
    handlePrevMonth: () => void;
    handleNextMonth: () => void;
    handleDoneBtn: () => void;
}

const Calendar: FC<CalendarProps> = ({
    isDoubleDatePicker,
    handleDateClick,
    selectedDate,
    activeMonth,
    handlePrevMonth,
    handleNextMonth,
    handleDoneBtn,
}) => {
    const year = 2023; // Change to the desired year

    const getMonthName = (month: number) => {
        const monthNames = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ];
        return monthNames[month];
    };

    const getDayName = (day: number) => {
        const dayNames = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
        ];
        return dayNames[day];
    };

    interface CalendarCellProps {
        day: number;
        isCurrentDate: boolean;
        isDisabled: boolean;
    }

    const CalendarCell: FC<CalendarCellProps> = ({ day, isCurrentDate, isDisabled }) => {
        const cellClass = isCurrentDate ? "selected" : "";
        return (
            <td
                style={{
                    // padding: "5px",
                    opacity: isDisabled ? "0.5" : "1",
                }}
                className={cellClass}
                onClick={!isDisabled ? () => handleDateClick(day) : undefined}
            >
                {day}
            </td>
        );
    };

    const generateCalendar = (year: number, month: number) => {
        const today = new Date();
        const currentMonth = today.getMonth();
        const currentDate = today.getDate();
        const firstDay = new Date(year, month, 1).getDay();
        const numDays = new Date(year, month + 1, 0).getDate();

        let day = 1;
        const rows = [];

        for (let i = 0; i < 6; i++) {
            const cells = [];

            for (let j = 0; j < 7; j++) {
                if (i === 0 && j < firstDay) {
                    cells.push(
                        <td key={`cell-${i}-${j}`}></td>
                    );
                } else if (day > numDays) {
                    cells.push(
                        <td key={`cell-${i}-${j}`}></td>
                    );
                } else {
                    const isCurrentDate = day === selectedDate;
                    const disabled = month < currentMonth || (month === currentMonth && day < currentDate);
                    cells.push(
                        <CalendarCell
                            key={`cell-${i}-${j}`}
                            day={day}
                            isDisabled={disabled}
                            isCurrentDate={isCurrentDate}
                        />
                    );
                    day++;
                }
            }

            rows.push(
                <tr key={`row-${i}`}>{cells}</tr>
            );
        }

        return (
            <div className="">
                <div
                    style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <div onClick={() => handlePrevMonth()}>
                        <div className="text-[25px] cursor-pointer">
                            <FaLongArrowAltLeft />
                        </div>
                    </div>
                    <h2 className="font-semibold text-[#101618]">
                        {getMonthName(month).substring(0, 3)}&nbsp;{year}
                    </h2>
                    <div onClick={() => handleNextMonth()}>
                        <div className="text-[25px] cursor-pointer">
                            <FaLongArrowAltRight />
                        </div>
                    </div>
                </div>

                <table className="date-table">
                    <thead className="text-[#73767F]">
                        <tr>
                            {Array.from({ length: 7 }).map((_, index) => (
                                <th key={`header-${index}`} className="table-head">
                                    {getDayName(index).substring(0, 3)}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="cursor-pointer">{rows}</tbody>
                </table>

                <div
                    style={{
                        width: "100%",
                        padding: "12px",
                    }}
                >
                    {!isDoubleDatePicker && (
                        <button
                            className="font-semibold hover:opacity-90"
                            style={{
                                backgroundColor: "#feb13a",
                                width: "100%",
                                border: "none",
                                padding: "10px 13px",
                                borderRadius: "5px",
                                fontSize: "18px",
                                color: "#fff",
                            }}
                            onClick={handleDoneBtn}
                        >
                            Done
                        </button>
                    )}
                </div>
            </div>
        );
    };

    return (
        <div className="calendar-div">
            {generateCalendar(year, activeMonth)}
        </div>
    );
};

export default Calendar;
