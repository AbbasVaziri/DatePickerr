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
- **Redux**: For state management.
- **Storybook**: For isolated component development and testing.
- **Jalali Moment**: For converting dates to the Jalali calendar.


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
