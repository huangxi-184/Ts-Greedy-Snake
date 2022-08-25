// 定义食物类Food 
class Food {
    element: HTMLElement;
    constructor() {
        // 获取页面中的food的元素 并将值赋给element
        this.element = document.getElementById('food')!
    }

    //获取食物x轴 y轴坐标的方法

    get x() {
        return this.element.offsetLeft;
    }
    get y() {
        return this.element.offsetTop;
    }
    // 吃完食物后随机位置方法

    change() {
        // 生成随机的位置 需要知道坐标的范围 
        // x最小 0 最大是290 为了保证位置的判断 所以食物位置必须10的整数倍
        let left = Math.round(Math.random() * 29) * 10
        let top = Math.round(Math.random() * 29) * 10
        this.element.style.left = left + 'px';
        this.element.style.top = top + 'px';
    }

}
export default Food;
