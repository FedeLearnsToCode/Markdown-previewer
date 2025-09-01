# Markdown Previewer

A small React project that lets you write Markdown and see a live HTML preview, built for FreeCodeCamp.

---

🔗 Live Demo: https://fedelearnstocode.github.io/Markdown-previewer/

![Markdown Previewer Screenshot](./screenshot.png)

---

## 🛠 Features

- Lets you write Markdown in real-time.
- Shows the preview updating live as you type.
- Uses the `marked` library to parse Markdown.
- Comes with example text to help you get started.
- You can toggle between light and dark mode with one click.
- Has a button to copy all your editor content.
- Includes a quick syntax guide if you need it.

---

## 📦 Technologies Used

- React (version 17 via CDN)
- Bootstrap 5 for styling and responsiveness
- Marked for Markdown parsing
- DOMPurify for security (to prevent unsafe code)
- CSS @keyframe for animations

---

## 💡 Technical Notes 

- I used React 17 because React 18 has some issues with FreeCodeCamp tests.
- Security is important, so I sanitize the HTML before displaying it.
- Everything works locally, no server needed.
- To ensure that FreeCodeCamp's tests run correctly on GitHub Pages, I had to **embed the `app.js` logic directly inside the `index.html` file** using a `<script type="text/babel">` tag. This approach avoids issues with the test bundle not recognizing required elements like `#editor` and `#preview`.

---

## Useful links

- [React CDN (v17)](https://unpkg.com/react@17/umd/react.development.js)
- [ReactDOM CDN (v17)](https://unpkg.com/react-dom@17/umd/react-dom.development.js)
- [Babel Standalone (for JSX)](https://unpkg.com/@babel/standalone/babel.min.js)
- [Bootstrap 5 CSS](https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css)
- [Bootstrap 5 JS Bundle](https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js)
- [Marked (Markdown parser)](https://cdn.jsdelivr.net/npm/marked/marked.min.js)
- [DOMPurify (Sanitizer)](https://cdn.jsdelivr.net/npm/dompurify@3.0.5/dist/purify.min.js)

---

🎓 Built for the project Build a Markdown Previewer by [freeCodeCamp](https://www.freecodecamp.org).

