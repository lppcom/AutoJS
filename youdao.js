// 微信订阅号 文章 收藏到有道云笔记
// 有道云笔记 需要置顶
auto.waitFor();
setScreenMetrics(1080, 1920);

// 定位到左上角
click(1060, 80);

//click(960,  1600);
textContains("复制链接").findOne().parent().click();
sleep(1000);
toast("ok");

back();
sleep(1000);
back();
toast("ok");

//textContains("有道云笔记").findOne().parent().click();
sleep(1000);
click(400,  400);
sleep(1000);

// 点击左下角按钮，切换到输入模式
id("aqz").findOne().click()
str =getClip();
input("");
input(str);
// 发送
id("aql").findOne().click()
sleep(1000);
back();