// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

var HeroPlayer = require('HeroPlayer');
var tmpscore = require('Myscore');
cc.Class({
    extends: cc.Component,

    properties: {
        player: {
            default: null,
            type: cc.Node
        },
        timesDisplay: {
            default: null,
            type: cc.Label
        },
        mooncake: {
            default: null,
            type: cc.Prefab
        },
        bomb: {
            default: null,
            type: cc.Prefab
        },
        radish: {
            default: null,
            type: cc.Prefab
        }
    },

    createBomb: function(){
        var newBomb = cc.instantiate(this.bomb);
        this.node.addChild(newBomb, 88);
        newBomb.setPosition(this.getNewStarPosition());
        var moveto = cc.moveTo(3.3, cc.p(newBomb.getPositionX(), -this.node.height/2-50));
        var finish = cc.callFunc(newBomb.removeFromParent, newBomb);
        var myAction = cc.sequence(moveto, finish);
        newBomb.runAction(myAction);
    },

    createMoonCake: function(){
        var newMookCake = cc.instantiate(this.mooncake);
        this.node.addChild(newMookCake, 88);
        newMookCake.setPosition(this.getNewStarPosition());
        var moveto = cc.moveTo(2.3, cc.p(newMookCake.getPositionX(), -this.node.height/2-50));
        var finish = cc.callFunc(newMookCake.removeFromParent, newMookCake);
        var myAction = cc.sequence(moveto, finish);
        newMookCake.runAction(myAction);
    },

    createRadish: function(){
        var newRadish = cc.instantiate(this.radish);
        this.node.addChild(newRadish, 88);
        newRadish.setPosition(this.getNewStarPosition());
        var moveto = cc.moveTo(2.3, cc.p(newRadish.getPositionX(), -this.node.height/2-50));
        var finish = cc.callFunc(newRadish.removeFromParent, newRadish);
        var myAction = cc.sequence(moveto, finish);
        newRadish.runAction(myAction);
    },

    getNewStarPosition: function(){
        var randX = cc.random0To1() * 400 - 180;
        var randY = this.node.height/2 + 100;
        console.log('物品创建坐标'+cc.p(randX, randY));
        return cc.p(randX, randY);
    },

    updateOne: function(dt){
        this.times -= 1;
        this.timesDisplay.string = this.times.toString();
        if (this.times <= 0) {
            this.gameOver();
        }
    },

    updateRadish: function(){
        console.log('updateRadish');
        var tmpRadish = this.createRadish();
    },

    updateMoonCake: function(){
        var tmpMoonCake = this.createMoonCake();
    },

    updateBomb: function(){
        var tmpBomb = this.createBomb();
    },

    gameOver: function(){
        // cc.eventManager.removeAllListeners();
        this.resignEvent();
        this.player.stopAllActions();
        cc.director.loadScene('GameOver');
    },

    resignEvent: function(){
        this.node.off(cc.Node.EventType.TOUCH_START);
    },
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        var self = this;
        var hero = self.player.getComponent(HeroPlayer);
        this.node.on(cc.Node.EventType.TOUCH_START, function(event){
            var tmppostion = event.touch.getLocationX()-320;
            hero.heroMove(tmppostion);
        });

        this.times = 60;
        this.schedule(this.updateOne, 1);
        this.schedule(this.updateRadish, 1.7);
        this.schedule(this.updateMoonCake, 3);
        this.schedule(this.updateBomb, 2.7);
    },

    start () {

    },

    // update (dt) {},
});
