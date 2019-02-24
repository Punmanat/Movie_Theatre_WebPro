Vue.component('sunday',{
  props:['link'],
    template:`<div
    class="mt-5"
    style="width:100%; height:500px;background-color:white;"
  >
    <div
      style="width:100%; height:10%;background: linear-gradient(to right, #6699ff 0%, #ff99cc 100%);"
    >
      <p style="color:white;padding: 15px;" class="font">กรุงเทพและปริมณฑล</p>
    </div>
    <div style="width:100%; height:40%;background: white;">
      <div class="font mt-2" style="position:absolute; padding: 10px;left: 14%;
      ">
        <p class="font">seacon square</p>
        <img
        class="ml-2"
          src="https://pbs.twimg.com/profile_images/924817144017068032/Nw_k0qAc_400x400.jpg"
          width="100"
          height="100"
          alt=""
        />
        <a :href="link" class="btn btn-primary" style="color:white;position:absolute;left: 116%;
        top: 50%;">07.00</a>
        <a :href="link" class="btn btn-primary" style="color:white;position:absolute;left: 180%;
        top: 50%;">12.00</a>
        <a :href="link" class="btn btn-primary" style="color:white;position:absolute;left: 244%;
        top: 50%;">15.00</a>
        <a :href="link" class="btn btn-primary" style="color:white;position:absolute;left: 308%;
        top: 50%;">18.00</a>
      </div>
    </div>
    <div
      style="width:100%; height:10%;background: linear-gradient(to right, #6699ff 0%, #ff99cc 100%);"
    >
      <p style="color:white;padding: 15px;" class="font">ภาคเหนือ</p>
    </div>
    <div style="width:100%; height:40%;background: white;">
          <div class="font mt-2" style="position:absolute; padding: 10px;left: 14%;
          ">
            <p class="font">เมญ่า เชียงใหม่</p>
            <img
            class="ml-2"
              src="https://pbs.twimg.com/profile_images/1029338912982880256/eIfyaAXq_400x400.jpg"
              width="100"
              height="100"
              alt=""
            />
            <a :href="link" class="btn btn-primary" style="color:white;sposition:absolute;left: 116%;
            top: 50%;">10.00</a>
            <a :href="link" class="btn btn-primary" style="color:white;position:absolute;left: 180%;
            top: 50%;">14.30</a>
            <a :href="link" class="btn btn-primary" style="color:white;position:absolute;left: 244%;
            top: 50%;">21.00</a>
          </div>
        </div>
  </div>
</div>`
});