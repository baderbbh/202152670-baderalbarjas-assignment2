# Technical Documentation

## Project Overview

This project is a personal portfolio website created for SWE 363 Assignment 1. Its purpose is to introduce me, present two of my projects, and provide a simple contact form.

The website was built using HTML, CSS, and JavaScript without using an external framework.

## Website Structure

The website is divided into the following sections:

- Navigation bar
- Home section
- About Me section
- Projects section
- Contact section
- Footer

The Projects section includes Madar and Cluclip. Each project has a title, a short description, and a visual placeholder.

## HTML

The page uses semantic HTML elements such as `header`, `nav`, `main`, `section`, `article`, `form`, and `footer`.

Labels are connected to their form fields using matching `for` and `id` values. Required fields are used to prevent users from submitting an incomplete form.

## CSS

CSS variables are used for the website’s colors, backgrounds, borders, and shadows. This makes it easier to keep the design consistent and switch between light and dark themes.

Flexbox is used for the navigation bar, while CSS Grid is used for the home section and project cards.

Media queries adjust the layout for desktop, tablet, and mobile screens. On smaller screens, the project cards change to one column and the home section changes from two columns to one.

## JavaScript

JavaScript is used for the dark and light theme toggle. When the user selects a theme, the choice is saved in local storage and remains selected after the page is refreshed.

JavaScript is also used to handle the contact form. After valid information is entered, the page displays a confirmation message and clears the form without reloading the page.

## Accessibility

The website includes:

- Clear heading levels
- Labels for all form fields
- Alternative descriptions for visual placeholders
- A descriptive label for the theme button
- Readable color contrast
- Keyboard-accessible links, buttons, and form controls

## Testing

I tested the website by resizing the browser and using the browser’s responsive design tools. I checked the layout on desktop, tablet, and mobile screen sizes.

I also tested the navigation links, theme toggle, saved theme preference, required form fields, confirmation message, and email link.

## Current Limitation

The contact form does not send information to a server because the assignment does not require a backend. It only displays a confirmation message after the form is completed.