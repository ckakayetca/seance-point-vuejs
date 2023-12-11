# SeancePoint

SeancePoint is a Single Page Application made with VueJS for the 2023 VueJS exam in SoftUni

# Concept

The idea of the project is to implement an e-commerce application where users are able to:

- publish seance offers (psychiatry or psychology appointments, taro reading, astrology, maths lessons, etc), thereafter edit or delete it.

- make an appointment for someone else's seance, thereafter cancel it if needed.

- leave a review (required rating and optional comment), thereafter edit or delete it

- view their private profile page, where they will be able to edit the information in their profile or view their own seances and appointments

# Architecture

The folder architecture of the app is as follows:

- COMPONENTS folder, containing:
    - core elements such as the footer and header + error page
    - shared components such as the form input field component and the loader (spinner) component, which I implemented for reusability

- VIEWS folder, containing the separate pages, structured as follows:
    - AUTH folder for pages related to the authentication of the user (also contains the views that are related to the user himself, such as the My Appointments page)

    - SEANCES folder, containing the pages related to the e-commerce subject;

- API folder for the HTTP request management with Axios

- ROUTES folder for the Vue Router and its respective middlewares for authorization and authentication of the user (acting as route guards)

- STORES folder for the state management with Pinia

- UTILS folder for reusable code

# UI

I would like to apologise for the rough user interface of the application. Although simple and without much content, I suppose it is very intuitive and would provide a good user experience.

# Used libraries

This application uses Moment.js and Vue Datepicker as additional libraries.