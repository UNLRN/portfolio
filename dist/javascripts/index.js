
let $window = $(window);
let $hero = $('.hero');
let $titleWrapper = $('.section__title-wrapper');
let $about = $('.section__title-about');
let $projects = $('.section__title-projects');
let $skills = $('.section__title-skills');
let $contact = $('.section__title-contact');

$about.waypoint(function (direction) {
    if ((direction == 'down') && (!$about.hasClass('section__title-about--fixed')) && ($titleWrapper.width() !== $window.width())) {
        $about.addClass('section__title-about--fixed');
    } else if ((direction == 'up') && ($about.hasClass('section__title-about--fixed')) && ($titleWrapper.width() !== $window.width())) {
        $about.removeClass('section__title-about--fixed');
    }
});

$projects.waypoint(function (direction) {
    if ((direction == 'down') && (!$projects.hasClass('section__title-projects--fixed')) && ($titleWrapper.width() !== $window.width())) {
        $about.removeClass('section__title-about--fixed');
        $projects.addClass('section__title-projects--fixed');
    } else if ((direction == 'up') && ($projects.hasClass('section__title-projects--fixed')) && ($titleWrapper.width() !== $window.width())) {
        $projects.removeClass('section__title-projects--fixed');
        $about.addClass('section__title-about--fixed');
    }
});

$skills.waypoint(function (direction) {
    if ((direction == 'down') && (!$skills.hasClass('section__title-skills--fixed')) && ($titleWrapper.width() !== $window.width())) {
        $projects.removeClass('section__title-projects--fixed');
        $skills.addClass('section__title-skills--fixed');
    } else if ((direction == 'up') && ($skills.hasClass('section__title-skills--fixed')) && ($titleWrapper.width() !== $window.width())) {
        $skills.removeClass('section__title-skills--fixed');
        $projects.addClass('section__title-projects--fixed');
    }
});

$contact.waypoint(function (direction) {
    if ((direction == 'down') && (!$contact.hasClass('section__title-contact--fixed')) && ($titleWrapper.width() !== $window.width())) {
        $skills.removeClass('section__title-skills--fixed');
        $contact.addClass('section__title-contact--fixed');
    } else if ((direction == 'up') && ($contact.hasClass('section__title-contact--fixed')) && ($titleWrapper.width() !== $window.width())) {
        $contact.removeClass('section__title-contact--fixed');
        $skills.addClass('section__title-skills--fixed');
    }
});