//var url = "chp.shadiao.app/api.php?level=max&lang=zh_cn";

function generate_str(url) {
	var res = http.get(url);
    if(res.statusCode == 200)
    {
		//toast("请求成功");
		//console.show();
		//str=res. body. string();
		//log(res.body.string());
		return res.body.string();;
	}
	else
	{
		toast("请求失败:" + res.statusMessage);
		return "...";
	}
}


var mode = dialogs.singleChoice("请选择模式",["刷屏模式","情话模式","毒鸡汤模式", "嘲讽模式","骂街模式（慎用）"],1);
var m = mode+1
// toast((m));

var times=""
times=dialogs.rawInput("发送次数");
while(isNaN(times) || times=="") {
    toast("输入有误，请重新输入!");
    times =dialogs.rawInput("发送次数");
}

// 输入内容 
var str = ""
// 模式二、三对应链接
var url = ""

switch(m)
{
	case 1:
		var mode = dialogs.singleChoice("请选择内容来源",["输入","剪切板"],0);
		var m = mode+1
		if(m==1)
		{
			str=dialogs.rawInput("输入发送内容");
			while(str=="")
			{
				str=dialogs.rawInput("输入发送内容");
			}
		}
		else
		{
			str=getClip();
		}
		break;
	case 2:
		url = "https://chp.shadiao.app/api.php?level=max&lang=zh_cn";
		break;
	case 3:
		url = "https://du.shadiao.app/api.php?level=max&lang=zh_cn";
		break;
	case 4:
		url = "https://nmsl.shadiao.app/api.php?level=min&lang=zh_cn";
		break;
	case 5:
		url = "https://nmsl.shadiao.app/api.php?level=max&lang=zh_cn";
		break;
	// case 6:
		
	// 	break;
	default:
		break;
}

toast("开始发送");
var message="";
var flag = true
for(var i=0;i<times;i++)
{
    if(str != "")
	{
		message = str+" " +((i+1) + '');
	}
	else
	{
		message = generate_str(url);
	}
	// 找到文本框
	if(flag)
	{
		input("");
		flag=false;
	}
	// input(i);
	input(message);
	toast(message);
	// sleep(1000);
    click("发送");
	// sleep(1000);
}

toast("发送完成");
