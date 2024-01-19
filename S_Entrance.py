from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def login_form():
    return render_template('S_Entrance.html')

@app.route('/login', methods=['POST'])
def login():
    username = request.form['username']
    password = request.form['password']

    # Дополнительный код для проверки данных пользователя, например, проверка в базе данных

    # Здесь обычно происходит проверка данных пользователя и аутентификация
    # В данном примере просто возвращается сообщение об успешном входе
    return f'Login successful for {username}'

if __name__ == '__main__':
    app.run(debug=True)
