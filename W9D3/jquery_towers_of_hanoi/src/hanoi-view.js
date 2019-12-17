class HanoiView{

    constructor(game,$el){
        this.game = game;
        this.$el = $el;
        this.setupTowers();
        // this.render();
    }

    setupTowers(){
        console.log('ready');
        for(let i = 0; i < 3 ; i++){
            let $ul =$('<ul></ul>');

            for(let j= 0; j < 3; j++){
                let $li = $(`<li></li>`);
                if(i === 0 ){
                    $li = $(`<li class="disk${j+1}"></li>`);
                }
                $ul.append($li);
            }
            $('.hanoi').append($ul);
        }
    }

    render(){

    }
}
module.exports = HanoiView;