# Agus Purwadi - Digital Marketing Portfolio  

This project is a personal portfolio website showcasing Agus Purwadi's expertise in digital marketing, including portfolio, client testimonials, and a consultation booking system.  

---

## Features  

- **Navigation Bar**: Provides quick access to Portfolio, Consultation, and Email.  
- **Introduction Section**: Highlights Agus Purwadi’s skills and experience in digital marketing.  
- **Projects & Work**: Displays past projects with key achievements.  
- **Testimonials**: Client reviews to build credibility.  
- **Consultation Booking Form**: Users can request a free consultation by submitting a form.  
- **Thank You Page**: Displays submitted form data dynamically.  

---

## File Structure & Key Components  

### HTML Structure  

- **`index.html`** (Main Page)  
  - `<header>`: Contains the navigation bar with links.  
  - `<main>`:  
    - `<section class="intro">`: Displays Agus Purwadi’s introduction with an image.  
    - `<section class="projects">`: Highlights past projects and achievements.  
    - `<section class="testimonials">`: Displays client feedback.  
    - `<section id="contact">`: Booking form for consultation requests.  
  - `<footer>`: Displays copyright information and social media links.  

- **`thank-you.html`** (Form Submission Page)  
  - `<section id="thank-you">`: Shows submitted user data dynamically.  

---

### CSS Styling (`styles.css`)  

- **Global Reset**: Resets default margins, paddings, and sets `box-sizing: border-box`.  
- **Typography & Layout**:  
  - Uses Arial, sans-serif for consistency.  
  - Flexible grid and flexbox layouts for responsiveness.  
- **Navigation Bar (`.container-nav`)**:  
  - Uses flexbox for alignment and spacing.  
  - Links (`<a>`) change color and underline on hover.  
- **Sections (`.container-2`, `.description-box`, `.project-list`)**:  
  - Uses grid and flexbox for adaptive layouts.  
  - Adjusts layout for mobile screens via `@media queries`.  
- **Forms (`.container-form`)**:  
  - Consistent padding, borders, and spacing for a clean UI.  
  - Uses `box-shadow` for a subtle card effect.  

---

### JavaScript Functionality (`script.js`)  

- Extracts form data from the URL (`getQueryParams()`).  
- Displays submitted name, company, email, phone, and date on the Thank You Page dynamically.  
- Ensures empty fields display "N/A" instead of `null`.  

---

## Responsive Design  

- **Desktop View**: Uses grid and flexbox for structured layout.  
- **Mobile View** (`@media screen and (max-width: 1024px)`)  
  - **Navigation Menu**: Adjusts font sizes and spacing.  
  - **Stacked Layouts**: Intro, projects, and testimonials sections adapt for smaller screens.  
  - **Form & Buttons**: Ensure comfortable tap targets and readability.  

---

## How to Run the Project  

1. Clone the repository or download the files.  
2. Open `index.html` in a browser.  
3. To test form submission:  
   - Fill out the form and submit.  
   - The `thank-you.html` page will display the submitted details dynamically.  

---

## Future Improvements  

- Add backend integration for form submissions.  
- Implement dark mode toggle for better UX.  
- Improve animations and transitions for smoother UI interactions.  

---

This project is built using HTML, CSS, and JavaScript to create a clean, responsive, and functional portfolio site.  