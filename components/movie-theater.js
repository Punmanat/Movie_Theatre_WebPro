Vue.component("movie-theater",{
    props:["movie"],
    template:
    `<div
    class="mt-5"
    style="width:100%; height: 240px; background-color:white;"
  >
    <div style="width:40%;top: 6em;position:absolute; right:30%;">
      <img :src="movie.poster" alt="" />
    </div>
    <div
      class="font"
      style="width:40%; padding:1.25em;position:absolute; right:10%;color: black"
    >
      <h3>{{ movie.name.en }}</h3>
      <h5>{{ movie.name.th }}</h5>
      <p>หมวดหมู่ : Action</p>
      <p>เรทผู้ชม : 15+</p>
      <a class="btn btn-primary" href="./movie_detail.html"
        >รายละเอียดภาพยนต์</a
      >
    </div>
  </div>`
});