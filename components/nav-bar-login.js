Vue.component('nav-bar-login',{
    props:['username'],
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
                <li class="nav-item font ml-2 p-2" style="color:white">Welcome {{username}}</li>    
                  
                <li class="nav-item mt-1">
                <div class="dropdown">
  <img class=" dropdown-toggle" data-toggle="dropdown" width='30' heigth='30'
  src="https://png.pngtree.com/svg/20170502/user_login__115485.png" alt="user">
  <div class="dropdown-menu">
    <button class="dropdown-item" @click="$emit('logout')">Logout</button>
  </div>
</div>
                
                
                <a href="#" class="nav-link"></a>
                </li>
            </ul>
        </div>
    </div>
</nav>`
});