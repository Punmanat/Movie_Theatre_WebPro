Vue.component("movie", {
  props: ["movie"],
  template: `
    <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12" v-show="movie.showMovie">
    <div class="card mt-5" style="width: 18rem;">
        <a href="./movie_detail.html"><img class="card-img-top"
            :src="movie.poster"
            alt="Card image cap" style="height:270px"></a>
        <div class="card-body">
            <h5 class="card-title font">{{movie.name.en}} <br> ({{movie.name.th}})</h5>
            <hr>
            <p class="card-text font">ผู้กำกับ  : {{movie.actors}}</p>
            <hr>
            <p class="card-text font">นักแสดง : {{movie.director}}</p>
            <hr>
            <button @click="$emit('show-desc')" class="btn btn-success">แสดงเรื่องย่อ</button>
            <a href="./theater.html" class="ml-4 btn btn-primary" style="color:white">ดูรอบฉาย</a>
            <p class="card-tex font" style="line-height: 1.6;" v-html="movie.synopsis" v-show="movie.showDesc"></p>
        </div>
    </div>
</div>`
});
