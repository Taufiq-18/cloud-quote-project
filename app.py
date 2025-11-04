from flask import Flask, render_template, jsonify
import requests

app = Flask(__name__)

# Home route
@app.route('/')
def home():
    return render_template('index.html')

# API route - fetch quote from external API
@app.route('/api/quote')
def get_quote():
    try:
        response = requests.get('https://api.quotable.io/random')
        data = response.json()
        return jsonify({
            "content": data["content"],
            "author": data["author"]
        })
    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
