const tic_tac_toe = {
    board:['','','','','','','','',''],
    simbols: {
       options:['x','o'],
       turn_index:0, 
       change: function(){
           this.turn_index = (this.turn_index === 0 ? 1 :0);
       }
    },
        container_element:null,
        gameover:false,
        vense_sequences:[
            [1,2,3],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ],

    init: function(constainer){
        this.container_element = constainer;
    },

    make_play: function(position){
        if(this.gameover)return false;
        if(this.board[position] === ''){
            this.board[position] = this.simbols.options [this.simbols.turn_index];
            this.draw(); 
            let vense_sequences_index = this.check_sequece(this.simbols.options [this.simbols.turn_index]) 
            if(this.vense_sequences_index >=0){

            }else{
                this.simbols.change();
            }
            return true;
        }else{
            false;
        }
    },

    game_is_over:function(){
        this.game_is_over = true;
        console.log("Game Over");
    },

    start:function(){
        this.board.fill('');
        this.draw();
        this.gameover = false;
    },

    check_sequece:function(simbols){
        for(i in this.vense_sequences){
            if(this.board[this.vense_sequences[i][0]]== simbols &&
               this.board[this.vense_sequences[i][1]]== simbols &&
               this.board[this.vense_sequences[i][2]]== simbols){
                console.log('Sequecia vencendore:' + i);   
                return i ;
                   
               }
        }
    },
    draw: function(){
        let content ='';

        for(i in this.board){
            content += '<div onclick="tic_tac_toe.make_play(' + i + ')">' + this.board[i] + '</div>';
        }
        this.container_element.innerHTML = content;
    }

};  