# ⚖️ BMI Calculator

![Hackatime](https://hackatime.hackclub.com/api/v1/badge/U08Q8UT01SB/27smehta/bmi-calculator)

A clean, minimal Body Mass Index (BMI) calculator built entirely inside a single static HTML file. I made this as a straightforward project to practice the basics of HTML, CSS, and JavaScript without relying on any heavy frameworks.

🚀 **[Try it out live here!](https://bmi-calculator-omega-seven.vercel.app/)**

---

## 🛠️ How to Run Locally

Since this is a completely static site with no build steps, running it is incredibly easy.

**Option 1: The Easy Way**
Simply download or clone the repository and double-click `index.html` to open it directly in your web browser.

**Option 2: Using a Local Server**
If you prefer to run it through a local terminal server:
` ` `bash
python3 -m http.server 8000
` ` `
Then, navigate to `http://localhost:8000` in your browser.

---

## 🧮 How It Works

The calculator takes your input and runs it through the standard metric BMI formula:

$$BMI = \frac{\text{Weight (kg)}}{\text{Height (m)}^2}$$

The JavaScript calculates the value and then checks it against the standard health categories:
* **Underweight:** < 18.5
* **Normal weight:** 18.5 – 24.9
* **Overweight:** 25.0 – 29.9
* **Obese:** ≥ 30.0

### Quick Example:
* **Weight:** 70 kg
* **Height:** 1.75 m
* **Math:** 70 / (1.75²) ≈ 22.86 → **Normal weight**

---

## 💻 Development & Deployment

Everything lives right inside `index.html`. There are no package managers, dependencies, or build tools required. Just open the file in your favorite text editor, make your changes, and save.

Because it's purely static HTML/CSS/JS, it can be hosted instantly on platforms like Vercel, Netlify, or GitHub Pages.