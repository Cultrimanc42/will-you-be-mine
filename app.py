from flask import Flask, render_template, request, jsonify
import json
from datetime import datetime

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/answer", methods=["POST"])
def answer():
    choice = request.json.get("choice")
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    
    # Save the answer to a file
    with open("responses.txt", "a") as f:
        f.write(f"[{timestamp}] She clicked: {choice}\n")
    
    print(f"Answer received: {choice}")
    return jsonify({"status": "received", "message": "Thanks for answering!"})

if __name__ == "__main__":
    app.run(debug=True)
