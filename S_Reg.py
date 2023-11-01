from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def registration_form():
    return render_template('S_Reg.html')

@app.route('/register', methods=['POST'])
def register():
    username = request.form['username']
    email = request.form['email']
    password = request.form['password']
    confirm_password = request.form['confirm_password']

    # Дополнительный код для обработки данных, например, добавление в базу данных

    return f'Registration successful for {username}'

if __name__ == '__main__':
    app.run(debug=True)
