<template>
  <div id="home">
    <header>
      <div id="icon">  <el-icon><arrow-left-bold /></el-icon> <p>返回</p></div>
      <div id="headTitle">疫情期间学生离校审批</div>
      <div id="more">更多</div>
    </header>
    <div id="container">

      <div id="status">已关闭</div>
      <div class="list">
        <div class="item">
          <p class="name">工单编号</p>
          <p >RE220301000195</p>
        </div>
        <div class="item">
          <p class="name">创建人</p>
          <p>林思源</p>
        </div>
        <div class="item">
          <p class="name">部门</p>
          <p>19商务英语1</p>
        </div>
        <div class="item">
          <p class="name">处理人</p>
          <p></p>
        </div>
        <div class="item">
          <p class="name">申请时间</p>
          <p id="applyTime">
            <el-date-picker
                v-model="applyTime"
                type="datetime"
                placeholder="Select date and time"
                :shortcuts="shortcuts"
            />
          </p>
        </div>
      </div>
      <div class="line"></div>
      <div class="title">
        申请人信息
      </div>
      <div class="list">
        <div class="item">
          <p class="name">学号</p><p >1922620018</p>
        </div>
        <div class="item">
          <p class="name">姓名</p><p >林思源</p>
        </div>
        <div class="item">
          <p class="name">联系电话</p><p >18857090156</p>
        </div>
        <div class="item">
          <p class="name">学院</p><p >人文学院</p>
        </div>
        <div class="item">
          <p class="name">班级</p><p >19商务英语1</p>
        </div>
        <div class="item">
          <p class="name">专业</p><p >商务英语</p>
        </div>
        <div class="item">
          <p class="name">年级</p><p >2019</p>
        </div>
      </div>
      <div class="title">
        寝室信息
      </div>
      <div class="list">
        <div class="item">
          <p class="name">校区</p><p >本部校区</p>
        </div>
        <div class="item">
          <p class="name">楼号</p><p >北宿6</p>
        </div>
        <div class="item">
          <p class="name">寝室号</p><p >307</p>
        </div>
      </div>
      <div class="title">
        请假信息
      </div>
      <div class="list">
        <div class="item">
          <p class="name">请假类别</p><p >事假</p>
        </div>
        <div class="item">
          <p class="name">是否出省</p><p >否</p>
        </div>
        <div class="item">
          <p class="name">目的地范围</p><p >宁波大市区内</p>
        </div>
        <div class="item">
          <p class="name">前往目的地</p><p >海曙区</p>
        </div>
        <div class="item">
          <p class="name">请假开始时间</p><p id="startTime">
          <el-date-picker
              v-model="applyTime"
              type="datetime"
              placeholder="Select date and time"
              :shortcuts="shortcuts"
          />
        </p>
        </div>
        <div class="item">
          <p class="name">请假结束</p><p id="endTime">
          <el-date-picker
              v-model="applyTime"
              type="datetime"
              placeholder="Select date and time"
              :shortcuts="shortcuts"
          />
        </p>
        </div>
        <div class="item">
          <p class="name">天数</p><p >1</p>
        </div>
      </div>
      <div class="line"></div>
      <div class="list">
        <div class="item">
          <p class="name">佐证材料</p><p >1/10</p>
        </div>
        <div class="img-list">
          <el-upload action="#" list-type="picture-card" :auto-upload="false" style="display:flex;height: 100%">
            <el-icon style="width: 100%;height: 100%;margin: 0;display: grid;place-items: center;font-size: 3rem;color: rgba(141,141,141,0.65)" ><picture-filled /></el-icon>

            <template #file="{ file }" >
              <el-image
                  style="width: 100%;height: 100%"
                  :src="file.url"
                  :preview-src-list="[file.url]"
                  fit="cover"
              />
              <!--            <div>-->
              <!--              <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />-->
              <!--              <span class="el-upload-list__item-actions">-->
              <!--          <span-->
              <!--              class="el-upload-list__item-preview"-->
              <!--              @click="handlePictureCardPreview(file)"-->
              <!--          >-->
              <!--            <el-icon><zoom-in /></el-icon>-->
              <!--          </span>-->
              <!--          <span-->
              <!--              v-if="!disabled"-->
              <!--              class="el-upload-list__item-delete"-->
              <!--              @click="handleDownload(file)"-->
              <!--          >-->
              <!--            <el-icon><Download /></el-icon>-->
              <!--          </span>-->
              <!--          <span-->
              <!--              v-if="!disabled"-->
              <!--              class="el-upload-list__item-delete"-->
              <!--              @click="handleRemove(file)"-->
              <!--          >-->
              <!--            <el-icon><Delete /></el-icon>-->
              <!--          </span>-->
              <!--        </span>-->
              <!--            </div>-->
            </template>
          </el-upload>

          <!--        <el-dialog v-model="dialogVisible">-->
          <!--          <img width="100%" :src="dialogImageUrl" alt="" />-->
          <!--        </el-dialog>-->

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  ArrowLeftBold,Delete,Download,ZoomIn,Plus,PictureFilled
} from '@element-plus/icons-vue'
import {ref} from "vue";
const dialogImageUrl = ref('')
const dialogVisible = ref(false)
const disabled = ref(false)

const shortcuts = [
  {
    text: 'Today',
    value: new Date(),
  },
  {
    text: 'Yesterday',
    value: () => {
      const date = new Date()
      date.setTime(date.getTime() - 3600 * 1000 * 24)
      return date
    },
  },
  {
    text: 'A week ago',
    value: () => {
      const date = new Date()
      date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
      return date
    },
  },
]
const applyTime=ref()
const handleRemove = (file) => {
  console.log(file)
}

const handlePictureCardPreview = (file) => {
  dialogVisible.value = true
  dialogImageUrl.value = file.url
}

const handleDownload = (file) => {
  console.log(file)
  dialogVisible.value = true
  dialogImageUrl.value = file.url
}
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html, body,#app,#home {
  font-size: 16px;
  width: 100%;
}

header {
  color: #3d3d3d;
  padding: 0 4vw;
  box-sizing: border-box;
  display: grid;
  height: 6vh;
  font-size: 1rem;
  /*background: red;*/
  grid-template-columns: auto   1fr auto;
  place-items: center;
  border-bottom: 1px solid rgba(155, 155, 155, 0.5);
  #icon{
    display: flex;
    font-size: 1.2rem;
    p{
      font-size: 1rem;
    }
  }
}

header svg{
  position: relative;
  /*font-size: 100px;*/
  top: 2px;
}
#back {
  display: flex;
  align-items: center;
  position: relative;
}

#back p {
  font-size: 2rem;
  position: absolute;
  top: -1.4vh;
}

#back span {
  box-sizing: border-box;
}

#headTitle {
  color: black;
  font-size: 17px;
  font-weight: bold;
}

#container {
  /*margin-top: 5px;*/

}

.list{
  padding:  0 12px;
  .item:last-child{
    border: none;
  }
}
#status {
  padding-top: 12px;
  padding-left:12px;
  color: #b66b4c;
  font-size: 1rem;
  text-align: left;
}
.item{
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5vh;
  border-bottom: 1px solid rgba(155, 155, 155, 0.4);
}
.item .name{
  color: #838383;
}
.line{
  border-bottom: #e6e6e6 1px solid;
  border-top: #e6e6e6 1px solid;
  background: #f0f0f0;
  height:7px;
}
.title{
  font-size: 1rem;
  line-height: 33px;
  text-align: left;
  /* padding: 8px 0 10px 15px; */
  height: 33px;
  background: #d6d6d6;
  padding-left:12px;
}
.img-list{
  height: 80px;
  padding: 5px 0;

}

</style>
