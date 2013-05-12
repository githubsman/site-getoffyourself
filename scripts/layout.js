  $(document).ready(function() {
    $topic='';
    $("#closeme").hide();

    // a comment

    $("#what_you_think_content").hide();
    $("#your_choice_content").hide();
    $("#others_unhelpful_content").hide();
    $("#important_content").hide();
    $("#about_content").hide();

    $('#your_choice').click();

    $('#what_you_think').click(function() {
        $topic = 'what_you_think';
        $("#headline1").stop().animate({ opacity: 0.4 });
        $("#headline2").stop().animate({ opacity: 0.4 });
        $("#dog_top").stop().animate({ opacity: 0.4 });
        $('#what_you_think_content').load('what_you_think.htm');
        $("#what_you_think_content").show();
        $("#maindeck").hide();
        $("#closeme").show();
    });

    $('#your_choice').click(function() {
        $topic = 'your_choice';
        $("#headline1").stop().animate({ opacity: 0.4 });
        $("#headline2").stop().animate({ opacity: 0.4 });
        $("#dog_top").stop().animate({ opacity: 0.4 });
        $('#your_choice_content').load('your_choice.htm');
        $("#your_choice_content").show();
        $("#maindeck").hide();
        $("#closeme").show();
    });

    $('#others_unhelpful').click(function() {
        $topic = 'others_unhelpful';
        $("#headline1").stop().animate({ opacity: 0.4 });
        $("#headline2").stop().animate({ opacity: 0.4 });
        $("#dog_top").stop().animate({ opacity: 0.4 });
        $('#others_unhelpful_content').load('others_unhelpful.htm');
        $("#others_unhelpful_content").show();
        $("#maindeck").hide();
        $("#closeme").show();
    });

    $('#important_caller').click(function() {
        $topic = 'important';
        $("#headline1").stop().animate({ opacity: 0.4 });
        $("#headline2").stop().animate({ opacity: 0.4 });
        $("#dog_top").stop().animate({ opacity: 0.4 });
        $('#important_content').load('important.htm');
        $("#important_content").show();
        $("#maindeck").hide();
        $("#closeme").show();
    });


    $('#pleabargain').click(function() {
        $topic = 'pleabargain';
        $("#headline1").stop().animate({ opacity: 0.4 });
        $("#headline2").stop().animate({ opacity: 0.4 });
        $("#dog_top").stop().animate({ opacity: 0.4 });
        $('#your_choice_content').load('your_choice.htm');
        $("#your_choice_content").show();
        $("#maindeck").hide();
        $("#closeme").show();
    });



    $('#about').click(function() {
        $topic = 'about';
        $("#headline1").stop().animate({ opacity: 0.4 });
        $("#headline2").stop().animate({ opacity: 0.4 });
        $("#dog_top").stop().animate({ opacity: 0.4 });
        $('#about_content').load('about.htm');
        $("#about_content").show();
        $("#maindeck").hide();
        $("#closeme").show();
    });


    $('#closeme').click(function() {
        $topic='';
        $("#what_you_think_content").hide();
        $("#your_choice_content").hide();
        $("#important_content").hide();
        $("#others_unhelpful_content").hide();
        $("#about_content").hide();
        $("#maindeck").show();
        $("#closeme").hide();

        $("#headline1").stop().animate({
            opacity: 1
        });
        $("#headline2").stop().animate({
            opacity: 1
        });

        $("#dog_top").stop().animate({
            opacity: 1
        });
    });




    $("div.realm").hover( function(){
        if ($topic=='') {
            $("div.realm").not(this).stop().animate({
                opacity: 0.6
            });
        }
    }, function(){
        if ($topic=='') {
            $("div.realm").not(this).stop().animate({
                    opacity: 1
                });
        }
    });

  });