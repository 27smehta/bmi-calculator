# BMI Calculator

A simple BMI (Body Mass Index) calculator implemented as a single static HTML file.

## Overview

This project provides a minimal UI to calculate BMI from weight and height. It's intended as a small demo and starting point for learning HTML, CSS, and basic JavaScript.

## Hackatime
https://hackatime.hackclub.com/api/v1/badge/U08Q8UT01SB/27smehta/bmi-calculator

## Files

- `index.html` — main UI and logic for the BMI calculator.

## Usage

1. Open https://bmi-calculator-omega-seven.vercel.app/

2. Or run locally by serving the folder and opening `index.html` in your browser:

```
python3 -m http.server 8000
# then open http://localhost:8000
```

### How it works

The calculator computes Body Mass Index (BMI) from weight and height using the formula:

$BMI = \frac{\text{weight}_{kg}}{(\text{height}_{m})^2}$

Enter weight in kilograms and height in meters, then click the calculate button to see the numeric BMI and a simple category.

### BMI Categories

- **Underweight:** BMI &lt; 18.5
- **Normal weight:** 18.5 — 24.9
- **Overweight:** 25 — 29.9
- **Obesity:** BMI ≥ 30

### Example

- Weight: 70 kg
- Height: 1.75 m
- BMI = 70 / (1.75^2) ≈ 22.86 → **Normal weight**

## Development

- Edit `index.html` to change UI or logic.
- No build step required.

## Deployment

This is a static site — deploy to GitHub Pages, Vercel, Netlify, or any static host.

## Contributing

Contributions are welcome — open an issue or submit a pull request.


