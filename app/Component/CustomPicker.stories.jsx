import React from 'react';
import CustomPicker from './CustomPicker';

export default {
    title: 'Components/CustomPicker', component: CustomPicker, argTypes: {
        calendarType: {
            control: {
                type: 'select', options: ['jalali', 'gregorian'],
            },
        }, mode: {
            control: {
                type: 'select', options: ['range', 'single', 'multiple'],
            },
        }, disableWeekends: {
            control: {
                type: 'boolean',
            },
        }, holidayDates: {
            control: {
                type: 'array',
            },
        }, weekdaysLong: {
            control: {
                type: 'array',
            },
        }, numMonth: {
            control: {
                type: 'number', min: 1, max: 12,
            },
        }, minDate: {
            control: {
                type: 'date',
            },
        }, maxDate: {
            control: {
                type: 'date',
            },
        }, showNavigation: {
            control: {
                type: 'boolean',
            },
        }, showMonthCation: {
            control: {
                type: 'boolean',
            },
        }, holidayColor: {
            control: {
                type: 'color',
            },
        }, rangeMiddleColor: {
            control: {
                type: 'color',
            },
        }, disabledDayColor: {
            control: {
                type: 'color',
            },
        }, todayColor: {
            control: {
                type: 'color',
            },
        }, selectedColor: {
            control: {
                type: 'color',
            },
        }, outsideDays: {
            control: {
                type: 'boolean',
            },
        }, minMaxDate: {
            control: {
                type: 'boolean',
            },
        }, classNames: {
            control: 'object',
        }, DayWeekStartGre: {
            control: {
                type: 'number', min: 1, max: 6,
            },
        }, DayWeekStartPer: {
            control: {
                type: 'number', min: 1, max: 6,
            },
        },
        highlightToday:{
            control:{
                type: 'boolean',
            }
        }
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
    holidayDates: ["1403/01/01",  // Nowruz (Persian New Year)
        "1404/01/01",  // Nowruz (Persian New Year)
        "1404/01/02",  // Nowruz Holiday
        "1404/01/03",  // Nowruz Holiday
        "1404/01/04",  // Nowruz Holiday
        "1404/01/12",  // Islamic Republic Day
        "1404/01/13",  // Nature Day
        "1404/01/22",  // Eid al-Fitr
        "1404/01/23",  // Eid al-Fitr Holiday
        "1404/03/14",  // Death of Imam Khomeini
        "1404/03/15",  // 15th of Khordad Uprising
        "1404/04/08",  // Eid al-Adha
        "1404/04/16",  // Eid al-Ghadir
        "1404/06/23",  // Tasua
        "1404/06/24",  // Ashura
        "1404/08/03",  // Prophet Muhammad's Birthday
        "1404/10/22",  // Martyrdom of Fatima
        '1403/05/07',
        '1403/04/10',
        '1403/04/19',
        '1403/04/26'],
    weekdaysLong: ['شنبه', 'یکشنبه', 'دوشنبه', 'سه شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه'],
    holidayColor: '#e5e880',
    rangeMiddleColor: '#006666',
    disabledDayColor: '#f0f0f0',
    todayColor: '#006666',
    selectedColor: '#006666',
    highlightToday:true,
};
