# sus.ubc.ca
Website for the Science Undergraduate Society of the University of British Columbia in Vancouver, Canada.

## Getting Started

First, run the development server (from root folder):

```bash
npm install

npm run dev
# or
yarn dev
```

## Pages/Routes

| Page | Endpoint | Description |
| --------- | -------|------|
| Home  | /  | Home/landing page |
| Join Sus | /joinSus | Application/position\volunteer information |
| Executives | /executives | Executives (VP + Prez) information |
| Budget | /budget | Budget information |
| Code & Procedures | /codeProcedures | SUS Code & Procedures |
| Upcoming Events | /events | All events under SUS (calendar) |
| Blue Card | /bluecard | BlueCard information and download link |
| Grants | /grants | Science grants information |
| ALSSC | /alssc | Abdul Ladha Science Student Center information |
| Book Room | /roomBooking | ALSSC room booking page |
| Shop | /shop | SUS merch page |
| Health & Wellness | tbd | Health and wellness resources and information |

## Development Processes

### Pages Router
- Next.js has been setup using a pages router. This simply means that all .js files in the pages folder are automatically available as routes via their file name. Pages router also allows for nested folder (see /shop for an example)
- Webmasters will be assigned a specific page within the pages folder. Please take a look at the routes table above if you cannot find your specific file to make sure it exists (if not please speak to your chair).
- Each of the pages should already have basic code including 'export default function'... This is where your page will start

### Styled Components 
- If you take a look at each of the javascript files, you can see that they all import "styled-components".
