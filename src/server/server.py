from flask import Flask, render_template

app = Flask(__name__,
            static_folder="../static/dist",
            template_folder="../static")


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/test/')
@app.route('/test/<path:path>')
def test(path=None):
    print(path)
    if path is not None:
        path = path.split('/')[:]
        print("Path:", path)
        path = 'test/' + '/'.join(path).strip('/').split('.')[0] + ".js"
        path = 'test/index.js'
    else:
        path = 'test.js'
    print(path)
    return render_template('/test/index.html', path=path)

#
# @app.route("/css/style.css")
# def style():
#    return send_static_file()


if __name__ == "__main__":
    app.run("localhost", 8877, debug=True)
