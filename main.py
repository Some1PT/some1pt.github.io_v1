import flask

app = flask.Flask(__name__)
@app.route('/')
def index():
    return flask.send_from_directory('.', 'index.html')
@app.route('/writeups')
def writeups():
    return flask.send_from_directory('.', 'Writeups.html')
@app.route('/blog')
def blog():
    return flask.send_from_directory('.', 'blog.html')
@app.route('/contacts')
def contacts():
    return flask.send_from_directory('.', 'contacts.html')
if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
