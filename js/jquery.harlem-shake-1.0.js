(function( $ ) {
    $.fn.harlemShake = function(options) {

        var that = this;
        //14s timeout
        var timeout = 15800;
        var endTime = timeout * 2 - 1000;
        var defaultAnimation = 'wobble';
        var music;

        if(options == 'stop') {
            beforeEnd(that);
            setTimeout( function() {
                end(that);
                console.log(music);
                stopMusic(music);
            }, 1500);
        } else {

            music = startMusic();

            this.each(function(i, item) {
                var animation = $(item).data('animation');
                var animSpeed = $(item).data('animation-speed');
                var pivot = $(item).data('pivot');

                setTimeout( function() {
                    $(item).addClass('hs-animate');
                }, 2000);
                if(pivot) {
                    animate(item, animation, animSpeed);
                    setTimeout( function() {
                    }, timeout);
                } else {
                    setTimeout( function() {
                        animate(item, animation, animSpeed);
                    }, timeout);
                }
            });

            setTimeout( function() {
                beforeEnd(that);
            }, endTime - 2000);

            setTimeout( function() {
                end(that);
            }, endTime);
        }

            function animate(item, animation, speed) {
                if(speed) {
                    $(item).addClass('hs-animate-'+speed);
                }
                if(animation) {
                    $(item).addClass(animation);
                } else {
                    $(item).addClass(defaultAnimation);
                }
            }

            function beforeEnd(items) {
                $(items).each(function(i, item) {
                    $(item).addClass('hs-animate-slow');
                });
            }

            function end(items) {
                console.log(items);
                $(items).each(function(i, item) {
                    var animation = $(item).data('animation');
                    var animSpeed = $(item).data('animation-speed');
                    $(item).removeClass('hs-animate');
                    if(animSpeed)
                        $(item).removeClass('hs-animate-'+animSpeed);
                    if(animation)
                        $(item).removeClass(animation);
                    $(item).removeClass(defaultAnimation);
                    $(item).removeClass('hs-animate-slow');
                    $(item).removeClass('hs-animate-fast');
                });
            }

            function startMusic() {
                a = new Audio('music/harlem-shake.mp3');
                if(!a.play()) {
                    a = new Audio('music/harlem-shake.ogg');
                    a.play();
                }
                return a;
            }

            function stopMusic(music) {
                if(music)
                    music.pause();
            }

        return this;
    };
}) ( jQuery );
