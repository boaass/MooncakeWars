// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        score: {
            default: null,
            type: cc.Label
        }
    },

    disScore: function(){
        var tmpScore = cc.sys.localStorage.getItem('ScoreDis').toString();   
        this.score.string = tmpScore.toString();     
        // this.node.string = this.score.toString();
        // console.log('node-----', this.node.string);
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.disScore();
    },

    start () {

    },

    // update (dt) {},
});
