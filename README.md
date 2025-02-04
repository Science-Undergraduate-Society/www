# susubc.ca
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

### Pages are routed based on the Navbar, with each heading corresponding to a sub-route for its associated page. For example, the "Join Us" heading in the Navbar has a dropdown that includes sub-routes like "Apply."

| Page | Endpoint | Description | 
| --------- | -------|------| 
| Home  | /  | Home/landing page |
| Apply | /joinSus/apply | Application Info |
| Elections | /joinSus/elections | Spring and Fall Election Info |
| Budget | /aboutUs/budget | Budget Info |
| Clubs | /aboutUs/clubs | Club Info |
| Code & Procedures | /aboutUs/codeProcedures | SUS Code & Procedures |
| Executives | /aboutUs/executives | Executives (VP + Prez) information | 
| Meeting Minutes | /aboutUs/meetingMinutes | Meeting Minutes for Current Year |
| Office Hours | /aboutUs/officeHours | Elected Executives and Building Manager Hours |
| Past Events | /ourEvents/past | Past Events |
| Upcoming Events | /ourEvents/upcoming | Upcoming Events |
| About Abdul Ladha | /scienceStudentCentre/abdulLadha | About Abdul Ladha |
| About ALSSC | /scienceStudentCentre/aboutALssca | Abdul Ladha Science Student Center Info |
| Event Bookings | /scienceStudentCentre/eventBooking | ALSSC Event Bookings |
| Meeting Bookings | /scienceStudentCentre/meetingBooking | ALSSC Meeting Room Bookings |
| Shop | /shop | SUS merch page |
| Bluecard | /studentServices/bluecard | Bluecard Info |
| Grants | /studentServices/grants | Grants Info |
| Health & Wellness | /studentServices/health | Health and wellness resources and information |
| Study Sphere | /studentServices/studySphere | Study Sphere |
| Volunteer Portal | /studentServices/volunteerPortal | Volunteer Portal |

## Development Processes

### Pages Router
- Next.js has been setup using a pages router. This simply means that all .js files in the pages folder are automatically available as routes via their file name. Pages router also allows for nested folders (see /shop for an example)
- Webmasters will be assigned a specific page within the pages folder. Please take a look at the routes table above if you cannot find your specific file to make sure it exists (if not please speak to the webmaster chair).
- Each of the pages should already have basic code including `export default function`... `return(...)`. This is where your page will begin.

### Styled Components 
- If you take a look at each of the javascript files, you can see that they all import `styled-components`.
- Styled components lets you write CSS directly in our Javascript. Doing this allows for better coupling between pages/components and CSS. THis also means that we can reduce the number of files in our project.
- Each block of CSS (what we would consider as our className) is created as a const which contains our CSS
- In the example below, we created a const that contains the styling for our background div. Note that we use `styled.div` to dictate that this HTML element is a div.
```
const Background = styled.div`
    height: 100vh;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`
```
- To utilize the Background HTML element, we can simply wrap the const name with <> as shown below
```
<Background>
    Hello World!
</Background>
```
- For OG Documentation -> https://styled-components.com/

### Images
- To use images, you can created a `styled.img` element and make CSS changes as you normally would to that specific const.
- Next.js is structured to serve static files including images in the `public` folder which can be referened in our code by starting from the base URL (/). Please see below for an example
```
const Graphic = styled.img`
    width: 50%;
    object-fit: cover;
`

<Graphic src="/images/health-images/health-main.jpg"/>
```
- In the example above, we access the `public` folder via (/), and within that folder we have our `images` folder.
- If you want to add more photos, please find or add the folder within `images` titled `(your-page-name)-images`. In said folder, you can add all of your photos
