from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("home.html")

# @app.route("/api/mensagem", methods=["POST"])
# def mensagem():
#     data = request.json
#     nome = data.get("nome")
#     return jsonify({"resposta": f"Olá, {nome}! Esta é uma resposta do Flask."})

if __name__ == "__main__":
    app.run(debug=True)
