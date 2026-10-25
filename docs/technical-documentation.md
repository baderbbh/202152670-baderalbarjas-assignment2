# Technical Documentation

## Project Overview

This project is a personal portfolio website created for SWE 363 Assignment 2. It builds on Assignment 1 with expandable project details, button transitions, and clearer demo form feedback.

The website was built using HTML, CSS, and JavaScript without an external framework.

## Website Structure

The website is divided into the following sections:

- Navigation bar
- Home section
- About Me section
- Projects section
- Contact section
- Footer

The Projects section includes Madar and Cluclip. Each project has a title, a short description, a visual placeholder, and a button that shows or hides additional details.

## HTML

The page uses semantic HTML elements such as `header`, `nav`, `main`, `section`, `article`, `form`, and `footer`.

Labels are connected to their form fields using matching `for` and `id` values. Required fields prevent incomplete input, and the email field uses `type="email"` to check its format.

Each project detail button uses `aria-controls` to identify its details section and `aria-expanded` to indicate whether that section is open. The details are initially hidden using the `hidden` attribute.

## CSS

CSS variables define the website’s colors, backgrounds, borders, and shadows. This keeps the design consistent and supports light and dark themes.

Flexbox is used for the navigation bar, while CSS Grid is used for the home section and project cards.

Media queries adjust the layout for desktop, tablet, and mobile screens. On smaller screens, the project cards change to one column and the home section changes from two columns to one.

Project detail buttons use a short color transition when hovered over. A visible outline shows keyboard focus. Button text can wrap on narrow screens, and the transition is disabled when the user prefers reduced motion.

## JavaScript

### Theme Toggle

JavaScript switches between light and dark themes. The selected theme is saved in local storage and restored after the page is refreshed. The theme button’s text and accessible label update to describe the available action.

### Expandable Project Details

Each project detail button shows or hides its own details section. JavaScript finds the matching section using the button’s `aria-controls` value and checks that it exists before adding a click handler.

When clicked, the button changes the section’s `hidden` property, updates `aria-expanded`, and switches its text between Show and Hide.

### Demo Contact Form

The contact form uses browser validation for required fields and email format.

After valid input, JavaScript prevents submission and displays a message explaining that validation passed but no message was sent. The fields stay filled so the visitor does not lose their text.

Editing any field clears the previous feedback. The email link provides a way to contact me.

## Accessibility

The website includes:

- Semantic page sections and a clear heading structure
- Labels connected to all form fields
- A descriptive label for the theme button
- Keyboard-accessible links, buttons, and form controls
- Project buttons connected to their details through `aria-controls`
- An `aria-expanded` value that updates when details open or close
- Visible keyboard focus outlines on project detail buttons
- Reduced-motion support for project button transitions
- Form feedback in an `aria-live="polite"` region

## Testing

I tested the website by resizing the browser and using the browser’s responsive design tools. I checked the layout on desktop, tablet, and mobile screen sizes.

I tested the navigation links, theme toggle, saved theme preference, and email link.

For the project details, I checked that:

- Both buttons open and close their own details.
- Button labels change between Show and Hide.
- The buttons remain readable in light and dark themes.
- Hover colors change smoothly.
- Pressing Tab shows a visible focus outline.
- The buttons fit on a narrow screen.

For the demo contact form, I checked that:

- Empty required fields are blocked.
- Invalid email input is blocked.
- Valid input displays the demo confirmation.
- The fields remain filled after validation.
- Editing a field clears the previous confirmation.

## Current Limitation

The contact form is a demo. It validates input but does not send or store messages. Visitors should use the email link to contact me.