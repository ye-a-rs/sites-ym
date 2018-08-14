<template>
  <div class="container">
    <!-- <el-carousel :interval="5000" arrow="always">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel> -->
    <div class="content">
      <!-- <div class="name">
          <div class="imgLeft"></div>
          <div class="font">推荐作品</div>
          <div class="imgRight"></div>
      </div>
      <div class="interduce">
        内涵丰富，充分鼓励个性发展
      </div> -->
        <el-row>
          <el-col :span="8" v-for="(o, index) in 10" :key="o" :offset="index > 0 ? 10 : 0">
            <el-card :body-style="{ padding: '0px' }">
              <img class="image" src="../asset/1.png"/>
               <div class="listDetail">
                  <span>好吃的汉堡</span>
                  <div class="listuser">
                      <div class="fl">
                        <img src="../asset/2.gif" class="listuserimg"/>
                        <div class="listusername">Terry的天堂</div>
                      </div>
                      <div class="fr" style="margin-top:7px;">
                        <div class="userLike"></div>
                        <div class="num">4900</div>
                        <div class="userWatch"></div>
                        <div class="num">20</div>
                      </div>
                  </div>
               </div>
            </el-card>
          </el-col>
        </el-row>
    </div>
  </div>
</template>

<style>
.fl {
  float: left;
}
.fr {
  float: right;
}
.content {
  width: 1162px;
  margin: 0 auto;
  margin-top: 54px;
  overflow: hidden;
}
.content .name {
  width: 246px;
  height: 33px;
  margin: 0 auto;
}
.content .name .imgLeft {
  float: left;
  background: url(../asset/word_left_icon.png) 0 0 no-repeat;
  background-size: 100% 100%;
  width: 56px;
  height: 26px;
  margin-right: 15px;
}
.content .name .font {
  font-size: 24px;
  color: #4a4a4a;
  float: left;
}
.content .name .imgRight {
  float: left;
  background: url(../asset/word_right_icon.png) 0 0 no-repeat;
  background-size: 100% 100%;
  width: 56px;
  height: 26px;
  margin-left: 15px;
}
.content .interduce {
  font-size: 18px;
  color: #9b9b9b;
  margin-top: 23px;
  text-align: center;
}
.content .list {
  margin-top: 24px;
  overflow: hidden;
}
.el-main {
  padding: 0px;
}
.container {
  padding: 0;
  margin: 0;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.el-carousel__container {
  height: 470px;
}
.el-col {
  width: 270px;
  height: 287px;
  margin-right: 15px;
  margin-left: 5px;
  margin-top: 24px;
  overflow: hidden;
}
.image {
  width: 270px;
  height: 208px;
}
.listDetail {
  padding: 2px 10px 9px 13px;
  overflow: hidden;
}
.listDetail span {
  font-size: 14px;
  color: #000000;
}
.listDetail .listuser {
  margin-top: 11px;
}
.listDetail .listuser .listuserimg {
  width: 27px;
  height: 26px;
  float: left;
  border-radius: 100px;
}
.listDetail .listuser .listusername {
  font-size: 12px;
  margin-left: 5px;
  color: #000000;
  float: left;
  line-height: 30px;
}
.userLike {
  width: 13px;
  height: 13px;
  float: left;
  background-size: 100% 100%;
  background: url(../asset/like_icon.png) 0 0 no-repeat;
  margin-right: 4px;
}
.num {
  font-size: 12px;
  color: #9b9b9b;
  float: left;
  margin-right: 5px;
}
.userWatch {
  width: 18px;
  height: 14px;
  background-size: 100% 100%;
  background: url(../asset/watch.png) 0 0 no-repeat;
  margin-right: 4px;
  float: left;
}
</style>