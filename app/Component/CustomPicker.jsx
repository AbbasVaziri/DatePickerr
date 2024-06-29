import React, { useState } from "react";
import "react-day-picker/style.css";
import { DayPicker as JalaliDayPicker } from "react-day-picker/jalali";
import { DayPicker as GregorianDayPicker, getDefaultClassNames } from "react-day-picker";
import { enUS, faIR } from "date-fns/locale";
import PropTypes from "prop-types";
import {
    formatDayGregorian,
    formatDayJalali,
    formatMonthCaptionGregorian,
    formatMonthCaptionJalali,
    formatWeekNumberGregorian,
    formatWeekNumberJalali
} from "@/app/Component/dateFormatters";
import CustomCaption from "@/app/Component/CustomCaption";
import moment from "jalali-moment";
import { Vazirmatn } from 'next/font/google';

const vazirmatn = Vazirmatn({ subsets: ['latin'] });

const PERSIAN_DAYS = ['شنبه', 'یکشنبه', 'دوشنبه', 'سه شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه'];
const MILADI_DAYS = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

const CustomPicker = (props) => {
    const {
        mode,
        disableWeekends,
        holidayDates,
        weekdaysLong,
        numMonth,
        minDate,
        maxDate,
        showNavigation,
        showMonthCation,
        calendarType,
        holidayColor,
        rangeMiddleColor,
        disabledDayColor,
        todayColor,
        selectedColor,
        outsideDays,
        minMaxDate,
        DayWeekStartGre,
        DayWeekStartPer,
    } = props;

    const [selectedDate, setSelectedDate] = useState('');
    const [footerText, setFooterText] = useState("Please pick a date.");
    const defaultClassNames = getDefaultClassNames();

    const modifiersClassNames = {
        holiday: "holiday-disabled",
        selected: "custom-selected",
        range_start: `custom-range-start ${calendarType === "jalali" ? 'jalali-start' : 'gregorian-start'}`,
        range_middle: "custom-range-middle",
        range_end: `custom-range-end ${calendarType === "jalali" ? 'jalali-end' : 'gregorian-end'}`,
        disabled: "custom-disabled-day",
        weekends: "weekends"
    };

    const shamsiToMiladi = (date) => {
        return moment.from(date, 'fa', 'YYYY/MM/DD').locale('en').format('YYYY-MM-DD');
    };

    const isHoliday = (dates, day) => {
        const miladiDay = moment(day.date).format('YYYY-MM-DD');
        return dates.some(date => shamsiToMiladi(date) === miladiDay);
    };

    function highlightDay(props) {
        const isHolidayFlag = isHoliday(holidayDates, props.day);
        return (
            <span {...props.rootProps} style={{ whiteSpace: "nowrap" }}>
        {isHolidayFlag ? (
            <span style={{ color: holidayColor }}>{props.formattedDate}</span>
        ) : (
            props.formattedDate
        )}
      </span>
        );
    }

    const handleSelect = (date) => {
        setSelectedDate(date);
        if (calendarType === 'jalali') {
            const jalaliDate = moment(date).locale("fa").format('jYYYY/jMM/jDD');
            setFooterText(date ? `Selected date: ${jalaliDate}` : "Please pick a date.");
        } else {
            const gregorianDate = moment(date).format('YYYY-MM-DD');
            setFooterText(date ? `Selected date: ${gregorianDate}` : "Please pick a date.");
        }
    };

    const disabledDays = { before: minDate, after: maxDate };

    const commonProps = {
        mode,
        showOutsideDays: outsideDays,
        numberOfMonths: numMonth,
        selected: selectedDate,
        onSelect: handleSelect,
        disabled: minMaxDate ? disabledDays : undefined,
        pagedNavigation: true,
        dir: "rtl",
        components: {
            Weekdays: (props) => <CustomCaption {...props}
                                                weekdaysLong={calendarType === 'jalali' ? weekdaysLong : MILADI_DAYS} />,
            DayDate: highlightDay,
        },
        modifiersClassNames,
        classNames: {
            calendar: `${defaultClassNames.calendar} shadow-lg p-5 relative`,
            chevron: `${defaultClassNames.chevron} fill-amber-500`,
            today: `today`,
            month_caption: showMonthCation ? `text-xl flex justify-center mb-[15px]` : 'hidden',
            nav: `absolute w-full flex justify-between ${calendarType === "jalali" ? 'flex-row-reverse' : ''}`,
            button_next: showNavigation ? `nav-button nav-button-next` : 'hidden',
            button_previous: showNavigation ? `nav-button nav-button-prev` : 'hidden',
            selected: `text-white bg-[#006666]`,
            outside: `text-gray-500 opacity-50`,
            range_middle: `bg-[#006666]`,
            disabled: `custom-disabled-day`,
        },
        formatters: {
            formatDay: calendarType === "jalali" ? formatDayJalali : formatDayGregorian,
            formatMonthCaption: calendarType === "jalali" ? formatMonthCaptionJalali : formatMonthCaptionGregorian,
            formatWeekNumber: calendarType === "jalali" ? formatWeekNumberJalali : formatWeekNumberGregorian,
        },
    };

    const jalali_weekends = disableWeekends ? { dayOfWeek: [5] } : {};
    const gre_weekends = disableWeekends ? { dayOfWeek: [6] } : {};

    return (<>
        <style>
            {`
            .weekends {
                color: red
            }
                .holiday-disabled {
                    color: red;
                    pointer-events: none;
                }
                .custom-disabled-day {
                    color: gray;
                    background-color: ${disabledDayColor};
                    pointer-events: none;
                }
                .custom-selected {
                    background-color: ${selectedColor};
                    color: white;
                }
                .custom-range-start {
                    background-color: ${selectedColor};
                    color: white;
                }
                .jalali-start {
                    border-bottom-right-radius: 10px;
                    border-top-right-radius: 10px;
                }
                .gregorian-start {
                    border-bottom-left-radius: 10px;
                    border-top-left-radius: 10px;
                }
                .custom-range-middle {
                    background-color: ${rangeMiddleColor};
                    color: white;
                }
                .custom-range-end {
                    background-color: ${selectedColor};
                    color: white;
                }
                   .jalali-end {
                    border-bottom-left-radius: 10px;
                    border-top-left-radius: 10px;
                }
                .gregorian-end {
                    border-bottom-right-radius: 10px;
                    border-top-right-radius: 10px;
                }
                .today {
                   background-color: ${todayColor} !important;
                   font-weight: bold !important;
                }
                .custom-picker {
                    font-family: 'Vazirmatn', sans-serif;
                }
                `}
        </style>
            <div className="custom-picker flex justify-center mt-auto">
                {calendarType === "jalali" ? (
                    <JalaliDayPicker
                        modifiers={{ weekends: jalali_weekends }}
                        {...commonProps}
                        locale={faIR}
                        dir='rtl'
                        footer={<p>{footerText}</p>}
                        weekStartsOn={DayWeekStartPer}
                    />
                ) : (
                    <GregorianDayPicker
                        modifiers={{ weekends: gre_weekends }}
                        {...commonProps}
                        locale={enUS}
                        dir="ltr"
                        footer={<p>{footerText}</p>}
                        weekStartsOn={DayWeekStartGre}
                    />
                )}
            </div>
        </>
    );
};

CustomPicker.propTypes = {
    mode: PropTypes.oneOf(["range", "single", "multiple"]),
    disableWeekends: PropTypes.bool,
    holidayDates: PropTypes.arrayOf(PropTypes.string),
    weekdaysLong: PropTypes.arrayOf(PropTypes.string),
    numMonth: PropTypes.number,
    minDate: PropTypes.instanceOf(Date),
    maxDate: PropTypes.instanceOf(Date),
    showNavigation: PropTypes.bool,
    showMonthCation: PropTypes.bool,
    calendarType: PropTypes.oneOf(["jalali", "gregorian"]),
    holidayColor: PropTypes.string,
    rangeMiddleColor: PropTypes.string,
    disabledDayColor: PropTypes.string,
    todayColor: PropTypes.string,
    selectedColor: PropTypes.string,
    outsideDays: PropTypes.bool,
    minMaxDate: PropTypes.bool,
    DayWeekStartGre: PropTypes.number,
    DayWeekStartPer: PropTypes.number
};

CustomPicker.defaultProps = {
    mode: "single",
    disableWeekends: true,
    holidayDates: [],
    weekdaysLong: PERSIAN_DAYS,
    numMonth: 1,
    minDate: new Date(),
    maxDate: new Date(new Date().getFullYear(), new Date().getMonth() + 6, 0),
    showNavigation: true,
    showMonthCation: true,
    calendarType: "jalali",
    holidayColor: "#e5e880",
    rangeMiddleColor: "#006666",
    disabledDayColor: "#f0f0f0",
    todayColor: "#006666",
    selectedColor: "#006666",
    outsideDays: true,
    minMaxDate: true,
    DayWeekStartGre: 6,
    DayWeekStartPer: 6,
};

export default CustomPicker;