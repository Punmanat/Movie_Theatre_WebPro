Vue.component('carousel-tag',{
    template:`<div id='movies' class="carousel slide" data-ride="carousel" data- interval="5000">
    <ul class="carousel-indicators">
        <li data-target='#movies' class="active"></li>
        <li data-target='#movies'></li>
        <li data-target='#movies'></li>
    </ul>

    <div class="carousel-inner">
        <div class="carousel-item active">
            <center>
                <img class="img-responsive" style='height:530px;
                                    width:100%;'
                    src="https://images.spot.im/v1/production/r2res9jrakgetufqehtl" alt="">
            </center>
        </div>
        <div class="carousel-item">
            <center>
                <img class="img-responsive" style='height:530px;
                                    width:100%;'
                    src="https://assets1.ignimgs.com/2018/09/04/spidermanps4avengers-1280-1536101474848_1280w.jpg"
                    alt="">
            </center>
        </div>
        <div class="carousel-item">
            <center>
                <img class="img-responsive" style='height:530px;
                                    width:100%;'
                    src="https://s.isanook.com/mv/0/rp/r/w700/ya0xa0m1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL212LzAvdWQvNi8zNDEwMS9tYWFrLXNzLmpwZw==.jpg"
                    alt="">
            </center>
        </div>
    </div>
    <a class="carousel-control-prev" href="#movies" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#movies" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
    </a>
</div>`
});