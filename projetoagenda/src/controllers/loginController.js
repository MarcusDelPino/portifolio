const Login = require("../models/LoginModel")

exports.index = (req, res, next) => {
  if(req.session.user) return res.render('login-logado')
  res.render("login")
}

exports.register = async (req, res) => {
  const login = new Login(req.body)
  await login.register()
  try {
    if (login.errors.length > 0) {
      req.flash("errors", login.errors)
      req.session.save(function () {
        return res.redirect("/login/index")
      })
      return
    }

    req.flash("success", 'Seu usuário foi criado com sucesso')
      req.session.save(function () {
        return res.redirect("/login/index")
      })
  } catch (error) {
    console.log(error)
    return res.render("404")
  }
}

exports.login = async (req, res) => {
  const login = new Login(req.body)
  await login.login()
  try {
    if (login.errors.length > 0) {
      req.flash("errors", login.errors)
      req.session.save(function () {
        return res.redirect("/login/index")
      })
      return
    }

    req.flash("success", 'Você entrou no sistema!')
    req.session.user = login.user
      req.session.save(function () {
        return res.redirect("/login/index")
      })
  } catch (error) {
    console.log(error)
    return res.render("404")
  }
}

exports.logout = (req,res) => {
  req.session.destroy()
  res.redirect('/login/index')
}