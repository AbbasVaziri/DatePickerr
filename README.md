# DatePicker Component

This is a custom **DatePicker** component built with **Next.js** and styled using **Tailwind CSS**. It provides a wide array of functionalities, including the ability to select single or multiple dates, disable holidays, and customize the appearance.

## Features

### Functional Capabilities
- Display dates in various months.
- Set holidays via `props` (from a list of holidays).
- Convert dates to the solar Hijri calendar (Jalali).
- Ability to select single or multiple days.
- Select dates in both Persian and Gregorian calendars.
- Disable specific desired dates.
- Set the start of the week (Sunday or Monday).
- Enable or disable specific months, names of months, or years.
- Enable or disable dates before today.
- Disable or enable click functionality on days and dates.
- Provide functionality for single or multiple day selections.
- Customize functionality with click events.
- Use `props` to handle overlapping date ranges and holidays.
- Show holiday and weekend tooltips with hover.

### Styling Capabilities
- Change the style of holidays (active or disabled).
- Style holidays and disabled days.
- Customize active day styles.
- Adjust the `border-size` and `hover` styles.
- Change the layout of months and years with `props`.
- Custom styles for week days.

## Tech Stack

- **Next.js**: For server-side rendering and app structure.
- **Tailwind CSS**: For responsive and flexible styling.
- **Storybook**: For isolated component development and testing.
- **Jalali Moment**: For converting dates to the Jalali calendar.


## Installation Guide

### Prerequisites

Ensure that you have the following installed on your machine:

- **Node.js** (v12.x or later)
- **npm** (v6.x or later) or **yarn**

### Installation Steps

1. **Clone the Repository**:
   Clone the project repository to your local machine.

   ```bash
     git clone https://github.com/AbbasVaziri/DatePickerr.git
2. **Run storybook**:
   after you clone it is better to see the result on storybook so you should run this.
  ```bash
     npm run storybook
```
![image](https://github.com/user-attachments/assets/1b2fe027-31fe-426b-a3ea-26c494cab5a3)

