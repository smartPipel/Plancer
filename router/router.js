module.exports = function(app){
    app.get("/", (req, res)=>{
        res.render("index.html")
    })
    app.get("/login", (req, res)=>{
        res.render("login.html")
    })
    app.get("/dashboard", (req, res)=>{
        res.render("dashboard.html")
    })
}