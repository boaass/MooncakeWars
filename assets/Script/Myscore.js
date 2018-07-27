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
        myscores: {
            default: null,
            type: cc.Label
        },
    },

    disScore: function(){
        this.myscores.string = this.score.toString();
    },

    addScore: function(tmpscore){
        this.score += tmpscore;
        cc.sys.localStorage.setItem('ScoreDis', this.myscores.string);
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.score = 0;
        this.disScore();
    },

    start () {

    },

    update (dt) {
        this.disScore();
    },
});
