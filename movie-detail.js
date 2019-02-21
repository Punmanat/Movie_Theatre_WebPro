Vue.component('movie-detail', {
    props:["movie"],
    template: `
    <div class="row">
          <div class="mt-5 col-8 embed-responsive embed-responsive-4by3">
            <iframe
              class="embed-responsive-item"
              src="https://www.youtube.com/embed/Z1BCujX3pw8"
            ></iframe>
          </div>
          <div class="col-4 mt-5">
            <div class="card">
              <div class="card-body">
                <h5 class="font card-title">{{ movie.name.en }}</h5>
                <h6 class="font card-subtitle mb-2 text-muted">
                  {{ movie.name.th }}
                </h6>
                <p class="card-text font">ชื่อผู้กำกับ : {{ movie.director }}</p>
                <p class="card-text font">นักแสดง : {{ movie.actors }}</p>
                <p class="card-text font">หมวดหมู่ : Actions</p>
                เรื่องย่อ :
                <p class="card-text font" style="line-height: 1.6;" v-html="movie.synopsis"></p>
                <a href="./theater.html" class="font btn btn-primary w-100 mb-3" style="color:white;text-decoration:none;">ดูรอบฉาย</a>
              </div>
            </div>
          </div>
        </div>
        `
});