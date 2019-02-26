Vue.component('nav-bar',{
    template:`<nav class="navbar navbar-expand-lg bg-dark navbar-dark sticky-top">
    <div class="container">
        <a href="./index.html" class="navbar-brand">Movie Theater</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse"
            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item"><a href="Signin.html" class="nav-link">Sign in</a></li>
                <li class="nav-item"><a href="register.html" class="nav-link">Register</a></li>

                
                <li class="nav-item"><a href="#" class="nav-link"><img width='30' heigth='30'
                            src="https://png.pngtree.com/svg/20170502/user_login__115485.png" alt="user"></a>
                </li>
            </ul>
        </div>
    </div>
</nav>`
});