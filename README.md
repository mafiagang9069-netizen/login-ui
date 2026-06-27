<div align="center">
  <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/151.svg" width="120" alt="Premium Auth Logo" style="filter: hue-rotate(280deg) saturate(2);">
  <h1>✨ Premium Auth UI Kit ✨</h1>
  <p>A world-class, luxurious Authentication UI Kit built with HTML5, Bootstrap 5.3, CSS3, and Vanilla JavaScript.</p>
  
  <p>
    <a href="#features"><img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" /></a>
    <a href="#features"><img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" /></a>
    <a href="#features"><img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" /></a>
    <a href="#features"><img src="https://img.shields.io/badge/Bootstrap_5-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap 5" /></a>
  </p>
  
  <p>
    <a href="https://github.com/yourusername/premium-auth-ui/stargazers"><img src="https://img.shields.io/github/stars/yourusername/premium-auth-ui?style=flat-square&color=pink" alt="Stars"></a>
    <a href="https://github.com/yourusername/premium-auth-ui/network/members"><img src="https://img.shields.io/github/forks/yourusername/premium-auth-ui?style=flat-square&color=pink" alt="Forks"></a>
    <a href="https://github.com/yourusername/premium-auth-ui/blob/main/LICENSE"><img src="https://img.shields.io/github/license/yourusername/premium-auth-ui?style=flat-square&color=pink" alt="License"></a>
  </p>
</div>

<hr />

## 🌟 Overview

Premium Auth UI Kit is an open-source, beautifully designed collection of authentication pages. Designed to feel like a high-end SaaS product (inspired by Linear, Stripe, and Framer), this kit provides a completely Vanilla alternative to heavy React/Tailwind setups without compromising on aesthetics.

![Preview GIF](https://via.placeholder.com/1200x600/EC4899/FFFFFF?text=Animated+Preview+GIF)

## ✨ Features

- **8 Fully Designed Pages**: Login, Sign Up, Forgot Password, Reset Password, OTP Verification, Email Verification, Success, and 404.
- **5 Built-in Themes**: Sakura Pink (Default), Minimal White, Rose Gold, Lavender, and Midnight Pink.
- **Dark & Light Mode**: Built-in toggle with preferences saved in `localStorage`.
- **Glassmorphism Design**: Beautiful backdrop filters and semi-transparent layers.
- **Micro-interactions**: Smooth hover effects, ripple clicks, input glows, and animated SVGs.
- **Password Strength Meter**: Real-time validation with visual feedback.
- **OTP Input**: Auto-focus progression and copy/paste support.
- **No Build Step Required**: Pure HTML/CSS/JS. Just drop it in your project.

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/premium-auth-ui.git
   ```
2. **Open in Browser**
   Simply open `index.html` in your favorite web browser.
3. **Integrate**
   Copy the `css/` and `js/` folders into your own project and use the HTML templates as needed.

## 📂 Folder Structure

```text
premium-auth-ui/
├── index.html               # Login Page
├── signup.html              # Registration Page with Password Strength
├── forgot-password.html     # Request Reset Link
├── reset-password.html      # Create New Password
├── otp.html                 # 6-digit OTP Verification
├── verify-email.html        # Email Link Verification Instruction
├── success.html             # Success screen with Confetti
├── 404.html                 # Not Found Page
├── css/
│   ├── style.css            # Base styles and layout
│   ├── variables.css        # Theme variables & colors
│   ├── components.css       # Forms, Buttons, Cards
│   ├── animations.css       # Keyframes & Micro-interactions
│   └── responsive.css       # Media Queries
└── js/
    ├── app.js               # Entry point
    ├── theme.js             # Dark mode and Theme Switcher logic
    ├── password.js          # Visibility toggle and Strength meter
    ├── validation.js        # Toasts and Form validation helpers
    └── animations.js        # Mouse parallax and dynamic effects
```

## 🎨 Theme Guide

This UI kit uses CSS Variables for easy theming. You can find all color definitions in `css/variables.css`.

To change the default theme, simply update the `data-theme` attribute on the `<html>` tag in your HTML files:

```html
<!-- Available: sakura, minimal, rosegold, lavender, midnightpink -->
<html lang="en" data-theme="sakura" data-bs-theme="light">
```

The user's theme selection via the bottom-right floating widget is automatically saved to `localStorage` and will persist across page reloads.

## 🛠️ Customization Guide

### Changing the Primary Color
To modify the base colors, edit `css/variables.css`:

```css
html[data-theme="sakura"] {
  --primary: #YourHexColor;
  --primary-light: #YourHexColor;
  --primary-dark: #YourHexColor;
}
```

### Changing Illustrations
The current illustrations are placeholder SVGs with CSS hue-rotations applied. To use your own, replace the `<img>` `src` inside the `.illustration-wrapper` div.

## 🗺️ Roadmap

- [x] Initial Release
- [ ] Add Vue.js wrapper components
- [ ] Add React wrapper components
- [ ] Implement Two-Factor Auth Setup page (QR Code)
- [ ] Add more abstract SVG illustrations

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to check the [issues page](https://github.com/yourusername/premium-auth-ui/issues).

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- Twitter: [@yourhandle](https://twitter.com/yourhandle)
