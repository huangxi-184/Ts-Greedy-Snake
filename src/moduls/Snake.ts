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
    set x(value:number) {
        if (this.x === value)
            return;
        if (value < 0 || value > 200) {
            throw new Error('蛇撞墙了')
        }
        this.head.style.left = value + 'px'
    }
    set y(value:number) {
        if (this.y === value)
            return
        if (value < 0 || value > 200) {
            throw new Error('蛇撞墙了')
        }
        this.head.style.top = value + 'px'
    }
    // 增加蛇身长度
    addBody() {
        this.element.insertAdjacentHTML('beforeend', '<div></div>')
    }

}

export default Snake