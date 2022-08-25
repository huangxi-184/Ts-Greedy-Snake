import Food from "./Food";
import ScorePanel from "./ScorePanel";
import Snake from "./Snake";

class GameControl {
    snake: Snake;
    food: Food;
    scorePanel: ScorePanel
    direction: string
    isLive = true

    constructor() {
        this.food = new Food();
        this.scorePanel = new ScorePanel();
        this.snake = new Snake()
        this.direction = ''
        this.init()
    }
    // 按下键盘
    keydownHandler(event: KeyboardEvent) {
        if (event.key) {
            //TODO: 需要加方向的判断
        }
        this.direction = event.key
    }

    // 控制蛇移动
    run() {
        //向上 top减少 向左 left 减少
        let x = this.snake.x;
        let y = this.snake.y;
        // 根据方向取方向
        switch (this.direction) {
            case 'ArrowUp': y = y - 10
                break;
            case 'ArrowDown': y = y + 10
                break;
            case 'ArrowLeft': x = x - 10
                break;
            case 'ArrowRight': x = x + 10
                break;
        }
        // 判断是否吃到食物
        this.checkEat(x, y)

        try {
            this.snake.x = x
            this.snake.y = y
        } catch (e: any) {
            alert(e.message + ' GAME OVER');
            this.isLive = false
        }

        this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30)
    }

    init() {
        //绑定键盘按下事件
        document.addEventListener('keydown', this.keydownHandler.bind(this))
        this.run()
    }

    checkEat(x: number, y: number) {
        if (x === this.food.x && y === this.food.y) {
            // 改食物位置
            this.food.change();
            // 改分数
            this.scorePanel.addScore();
            // 加身体长度
            this.snake.addBody()
            return true
        }
        return false
    }

}

export default GameControl