# Marvel Characters

This project is an app that is connected to an external APIs and showing the result from it, which is marvel characters. 
It is developed for Appspace assignment, using React js with styled-components; for generating a hash for API route md5 from crypto-js library is used; for API calls
axios; the rest of the components are developed from scratch and in some cases icons from react-icons library are used.
 
 The app itself is single-page represented in two screens:
  - Listing, which is the main and only component passed to the App.js where you can find all the functionality related to API calls, filtering data, 
  displaying it and much more;
  - Detail, the hidden card that shows detailed information of the selected element when active;
 
Apart from these two main components the app also contains searchbar, using which you can navigate through the page, card component that serves for displaying 
data to the user in Listing and a Modal that pops up a second after the page is loaded.
The app is fully responsive and optimized for all devices with special features available for some of them (ex. detailed card component displaying close icon 
if the owner has a Touch Screen Device and displaying nothing otherwise)

Open [https://monumental-conkies-9acc89.netlify.app/](https://monumental-conkies-9acc89.netlify.app/) to view it in your browser.

> To start the app run this command inside the project

```bash
npm start #runs the app in the development mode
```


## Page preview
