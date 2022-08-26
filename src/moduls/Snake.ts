class Snake {
    // 蛇头
    head: HTMLElement;
    // 蛇身包括蛇头 会实时刷新
    bodies: HTMLCollection;
    element: HTMLElement;


    constructor() {
        this.head = document.querySelector('#snake > div') as HTMLElement;
        this.bodies = document.getElementById('snake')!.getElementsByTagName('div')
        this.element = document.getElementById('snake')!
    }
    // 读坐标
    get x() {
        return this.head.offsetLeft;
    }
    get y() {
        return this.head.offsetTop;
    }
    //  设坐标
    set x(value: number) {
        if (this.x === value)
            return;
        // 撞墙的范围判断
        if (value < 0 || value > 290) {
            throw new Error('蛇撞墙了')
        }
        // 修正坐标方向 保证不会原地掉头
        // 第二个节点存在,且它的坐标和头相同则说明相等
        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
            if (value > this.x) {
                value = this.x - 10
            } else {
                value = this.x + 10
            }
        }

        this.moveBody();
        this.head.style.left = value + 'px';
        this.checkheadBody()

    }
    set y(value: number) {
        if (this.y === value)
            return
        if (value < 0 || value > 290) {
            throw new Error('蛇撞墙了')
        }
        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
            if (value > this.y) {
                value = this.y - 10
            } else {
                value = this.y + 10
            }
        }
        this.moveBody();
        this.head.style.top = value + 'px';
        this.checkheadBody()
    }
    // 增加蛇身长度
    addBody() {
        this.element.insertAdjacentHTML('beforeend', '<div></div>')
    }
    // 添加蛇身移动方法
    moveBody() {
        //将后面的值移动到前面的一节
        for (let i = this.bodies.length - 1; i > 0; i--) {
            let x = (this.bodies[i - 1] as HTMLElement).offsetLeft
            let y = (this.bodies[i - 1] as HTMLElement).offsetTop;
            (this.bodies[i] as HTMLElement).style.left = x + 'px';
            (this.bodies[i] as HTMLElement).style.top = y + 'px';
        }
    }


    checkheadBody() {
        // 检查所有的身体,检查是否蛇头和蛇身的坐标相同
        for (let i = 1; i < this.bodies.length; i++) {
            let bd = this.bodies[i] as HTMLElement
            if (this.x === bd.offsetLeft && this.y === bd.offsetTop) {
                throw new Error("撞到自己了~~~")
            }
        }
    }

}

export default Snake