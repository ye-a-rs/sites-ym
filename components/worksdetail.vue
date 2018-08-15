<template>
  <div class="container">
    <div class="content">
        <el-row>
          <el-col :span="1" v-for="(o, index) in 16" :key="o" :offset="index > 0 ? 1 : 1">
            <el-card :body-style="{ padding: '0px' }">
              <img class="image" src="../asset/person.jpg"/>
               <div class="listDetail">
                  <span>好吃的汉堡</span>
                  <div class="listuser">
                      <div class="fl">
                        <img src="../asset/person.jpg" class="listuserimg"/>
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
        <el-pagination
          background
          layout="prev, pager, next"
          :total="23">
        </el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>

<style>
.fl {
  float: left;
}
.fr {
  float: right;
}
.content {
  width: 1140px;
  margin: 0 auto;
  overflow: hidden;
}
.content .name {
  width: 246px;
  height: 33px;
  margin: 0 auto;
}
.content .name .imgLeft {
  float: left;
  /* background: url(../asset/word_left_icon.png) 0 0 no-repeat; */
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
  /* background: url(../asset/word_right_icon.png) 0 0 no-repeat; */
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
  height: 288px;
  margin-right: 20px;
  margin-left: 0px;
  margin-top: 20px;
  overflow: hidden;
}
.el-col:nth-of-type(4n) {
  margin-right: 0px;
}
.image {
  width: 270px;
  height: 206px;
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
  /* background: url(../asset/like_icon.png) 0 0 no-repeat; */
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
  /* background: url(../asset/watch.png) 0 0 no-repeat; */
  margin-right: 4px;
  float: left;
}
/* 分页模块样式 */
.el-pagination {
  margin-top: 30px;
  margin-bottom: 60px;
}
</style>