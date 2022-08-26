// 表示记分盘的类
class ScorePanel {
    // 记分属性
    score = 0;
    level = 1;
    scoreEle: HTMLElement;
    levelEle: HTMLElement;

    maxlevel: number;   //最大等级
    Upscore: number; // 每级经验数
    constructor(maxlevel = 10, upScore = 2) {
        this.scoreEle = document.getElementById('score')!;
        this.levelEle = document.getElementById('level')!;
        this.maxlevel = maxlevel
        this.Upscore = upScore
    }

    //加分方法
    addScore() {
        this.score++;
        // span 标签需要一个字符串来表示  隐形转化成字符串
        this.scoreEle.innerHTML = this.score + '';
        // 每多少分升级
        if (this.score % this.Upscore === 0) {
            this.levelUp();
        }
    }

    levelUp() {
        if (this.level < this.maxlevel) {
            this.level++
            this.levelEle.innerHTML = this.level + '';
        }
    }

}

export default ScorePanel
