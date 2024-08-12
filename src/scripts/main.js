$(document).ready(function () {
    $('#btnResume').click(function(){
        $('#resume').slideToggle('fast')
    })
    $('#title').css({"opacity": "0"});


    var st = 834
    $(document).on('scroll', function(event){
        var st2 = $(this).scrollTop();
        
        if(st2 > st){
            return slideIn(), btnIn()
        }
        else{
            return slideOut(), btnOut()
        }
    })
    
    function slideIn(){
        let class1 = $('.signUp__title--is-hidden').addClass('signUp__title')
        let class2 = $('.signUp__title--is-hidden').removeClass('signUp__title--is-hidden')
        
        class1.fadeTo(200, 1)
    }
    
    function slideOut(){
        let class3 = $('.signUp__title').addClass('signUp__title--is-hidden')
        let class4 = $('.signUp__title--is-hidden').removeClass('signUp__title')
        
        class3.fadeTo(100, 0)
    }

    function btnOut(){
        let btn = $('#alo')

        btn.addClass('signUp__button--is-hidden');
        btn.removeClass('signUp__button')
    }

    function btnIn(){
        
        let signUpBtnIn = $('#alo')
        signUpBtnIn.addClass('signUp__button')
        signUpBtnIn.removeClass('signUp__button--is-hidden')
    }
});

