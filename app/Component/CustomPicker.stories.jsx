import React from 'react';
import CustomPicker from './CustomPicker';

export default {
    title: 'Components/CustomPicker',
    component: CustomPicker,
    argTypes: {
        calendarType: {
            control: {
                type: 'select',
                options: ['jalali', 'gregorian'],
            },
        },
        mode: {
            control: {
                type: 'select',
                options: ['range', 'single', 'multiple'],
            },
        },
        disableWeekends: {
            control: {
                type: 'boolean',
            },
        },
        holidayDates: {
            control: {
                type: 'array',
            },
        },
        weekdaysLong: {
            control: {
                type: 'array',
            },
        },
        numMonth: {
            control: {
                type: 'number',
                min: 1,
                max: 12,
            },
        },
        minDate: {
            control: {
                type: 'date',
            },
        },
        maxDate: {
            control: {
                type: 'date',
            },
        },
        showNavigation: {
            control: {
                type: 'boolean',
            },
        },
        showMonthCation: {
            control: {
                type: 'boolean',
            },
        },
        holidayColor: {
            control: {
                type: 'color',
            },
        },
        rangeMiddleColor: {
            control: {
                type: 'color',
            },
        },
        disabledDayColor: {
            control: {
                type: 'color',
            },
        },
        todayColor: {
            control: {
                type: 'color',
            },
        },
        selectedColor: {
            control: {
                type: 'color',
            },
        },
        outsideDays: {
            control: {
                type: 'boolean',
            },
        },
        minMaxDate: {
            control: {
                type: 'boolean',
            },
        },
        classNames: {
            control: 'object',
        },
        DayWeekStartGre: {
            control: {
                type: 'number',
                min: 1,
                max: 6,
            },
        },
        DayWeekStartPer: {
            control: {
                type: 'number',
                min: 1,
                max: 6,
            },
        },
    },
};

const Template = (args) => <CustomPicker {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    mode: 'single',
    calendarType: 'jalali',
    showNavigation: true,
    disableWeekends: false,
    outsideDays: true,
    DayWeekStartGre: 6,
    DayWeekStartPer: 6,
    numMonth: 2,
    minMaxDate: true,
    showMonthCation: true,
    minDate: new Date(2024, 5, 26),
    maxDate: new Date(2024, 0, 31),
    holidayDates: ['1403/05/05', '1403/04/10', '1403/04/16', '1403/04/26'],
    weekdaysLong: ['شنبه', 'یکشنبه', 'دوشنبه', 'سه شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه'],
    holidayColor: '#e5e880',
    rangeMiddleColor: '#006666',
    disabledDayColor: '#f0f0f0',
    todayColor: '#006666',
    selectedColor: '#006666',
};
