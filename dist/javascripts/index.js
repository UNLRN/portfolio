$(document).ready(function () {

    let controller = new ScrollMagic.Controller();

    $('.section__title-wrapper').each(function() {

        let element = $($(this).find('.header__text'))[0]

        let scene = new ScrollMagic.Scene({
            triggerElement: this,
            reverse: false,
        })
        .setClassToggle(element, 'fade-in')
        // .addIndicators({
        //     colorTrigger: 'red',
        //     colorStart: 'white',
        //     colorEnd: 'red',
        // })
        .addTo(controller);
    });

    $('.section').each(function() {

        let element = $($(this).find('.section__title-wrapper'))[0]
        let end = $(this).find('.section__content').height() > $(element).height() ? $(this).find('.section__content').height()-$(element).height() : 1;
        console.log(end)

        let projectsPin = new ScrollMagic.Scene({
            triggerElement: element,
            triggerHook: 0,
            duration: end,
        })
        .setPin(element, {pushFollowers: true})
        .addIndicators({
            colorTrigger: 'red',
            colorStart: 'white',
            colorEnd: 'red',
        })
        .addTo(controller);

    })

});

