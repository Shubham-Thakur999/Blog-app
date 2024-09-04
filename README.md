Interactive Blog Card Showcase

This project is a single-page application built with Next.js that displays a list of interactive blog cards. The cards include smooth hover animations, and the page features transitions and styling using Tailwind CSS and ShadCN.

Table of Contents:
Project Overview
Technologies Used
Setup and Installation
Running the Project Locally
Animations and Transitions

Project Overview
The Interactive Blog Card Showcase displays a list of blog posts, each as a card with a title and brief description. The cards are styled using ShadCN, and animations are applied to provide a smooth user experience. The project is responsive and adapts to different screen sizes.

Technologies Used
Next.js: A React framework for building fast, server-rendered applications.
Tailwind CSS: A utility-first CSS framework for rapid UI development.
ShadCN: A UI component library built on top of Tailwind CSS.
Framer Motion: A popular library for animations in React.
next-themes: A lightweight library to manage theme switching in Next.js.

Setup and Installation
Clone the repository:
git clone https://github.com/Shubham-Thakur999/Blog-app.git

cd interactive-blog-card-showcase

Install dependencies:
Make sure you have Node.js installed, then run:

npm install
Run the development server:
Start the development server with:
npm run dev
This will start the application on http://localhost:3000.


Animations and Transitions
The application uses a combination of Tailwind CSS and Framer Motion to achieve smooth animations and transitions:

Card Hover Animation: Each blog card uses a hover effect where the card slightly enlarges (transform: scale(1.05)), and the shadow becomes more prominent. This effect is achieved using Tailwind's utility classes along with a transition-transform class to smooth the animation.

Fade-In Animation: When the page first loads, the blog cards fade in with a slight upward motion. This effect is implemented using Framer Motion's initial, animate, and transition properties. The fade-in effect provides a polished appearance as the content loads.

Responsive Design: The layout uses Tailwind CSS's responsive grid system, ensuring that the blog cards look great on both mobile and desktop devices. The grid automatically adjusts the number of columns based on the screen size.

Dark Mode: If dark mode is enabled, the application smoothly transitions between light and dark themes using next-themes. The background and text colors are adjusted with a transition-colors class for a smooth effect.
