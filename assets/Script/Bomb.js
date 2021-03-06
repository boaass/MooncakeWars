// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

var tmpplayer = cc.require('HeroPlayer');
var tmpScore = cc.require('Myscore');
cc.Class({
    extends: cc.Component,

    properties: {
        bombAudio: {
            default: null,
            url: cc.AudioClip
        },
    },

    noteBox: function(){
        return this.node.getBoundingBoxToWorld();
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    update (dt) {
        var hero = cc.find('Canvas/player').getComponent(tmpplayer);
        var tscore = cc.find('Canvas/score').getComponent(tmpScore);

        if (cc.rectIntersectsRect(hero.node.getBoundingBoxToWorld(), this.noteBox())) {
            cc.audioEngine.play(this.bombAudio, false);
            tscore.addScore(-20);
            this.node.removeFromParent();
        }
    },
});
