# Will You Be My Girlfriend? 💕

A cute, interactive web app to ask her with style! The "No" button runs away when she tries to click it (following the viral trend), and clicking "Yes" triggers confetti and a sweet message.

## Features

✨ Cute animated heart and gradient background
🏃 "No" button that runs away from clicks/hovers
🎉 Confetti celebration when she clicks "Yes"
📱 Mobile-friendly responsive design
💾 Backend records her answer

## Quick Start (Local Testing)

### Prerequisites
- Python 3.7+
- pip

### Setup

1. Navigate to the project folder:
```bash
cd loveweb
```

2. Create a virtual environment:
```bash
python -m venv venv
```

3. Activate it:
   - **Windows**: `venv\Scripts\activate`
   - **Mac/Linux**: `source venv/bin/activate`

4. Install dependencies:
```bash
pip install -r requirements.txt
```

5. Run the app:
```bash
python app.py
```

6. Open your browser and go to:
```
http://localhost:5000
```

## Deployment (Get The Link!)

### Option 1: Render (RECOMMENDED - FREE)

1. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Will you be my girlfriend?"
   git push -u origin main
   ```

2. Go to [render.com](https://render.com)

3. Click "New +" → "Web Service"

4. Connect your GitHub repo

5. Set these settings:
   - **Name**: will-you-be-mine
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `gunicorn app:app`
   - **Environment**: Python 3.10

6. Click "Deploy" and wait ~2 minutes

7. You'll get a live link like: `https://will-you-be-mine.onrender.com`

### Option 2: Replit (EASIEST)

1. Go to [replit.com](https://replit.com)
2. Click "Create Repl" → Upload your folder
3. It auto-detects Flask, just click "Run"
4. Share the link from the top-right

### Option 3: PythonAnywhere

1. Sign up at [pythonanywhere.com](https://www.pythonanywhere.com)
2. Upload your files
3. Configure a new web app with Flask
4. Get your live URL instantly

## Project Structure

```
loveweb/
├── app.py                 # Flask backend
├── requirements.txt       # Python dependencies
├── Procfile              # For deployment
├── templates/
│   └── index.html        # Main page
└── static/
    ├── style.css         # Styling
    └── script.js         # Button logic & confetti
```

## Customization

### Change the colors?
Edit `static/style.css` - look for `#ff4d6d` and `#fad0c4`

### Add her name?
In `templates/index.html`, change the text from "Okay wait..." to "Hey [Her Name]..."

### Different message?
Edit `static/script.js` - change the message in the `yesBtn` click handler

### Add music?
Add this to `index.html` inside the `<body>`:
```html
<audio autoplay>
  <source src="your-song-url.mp3" type="audio/mpeg">
</audio>
```

## Tips

💡 Send her the link with: "I made something for you... open this when you're alone ❤️"

📸 She'll probably screenshot the confetti

🎬 Record her reaction if possible!

---

Good luck! You got this! 💖
