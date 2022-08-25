# Ts-Greedy-Snake
跟学尚硅谷TS,来做一个贪吃蛇

### 小技巧

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
统一样式 和盒子模型

#Snake 通过<div> 中的<div>去配置

``` html
<div id="snake">
    <div></div>
</div>
```

``` css
#snake{
       &>div{
        width: 10px;
        height: 10px;
        background-color: #000;
        border: 1px solid @bg-color;
            }
        }
```
 给蛇配置和底色一样的边框就看不出来了 还可以保证不连在一起 保证了蛇的大小为10px 不动


 ! 表示不可能为空
 `this.elemnet = document.getElementById('food')!`