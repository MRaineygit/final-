let course = document.querySelector("main");

course.innerHTML += `
<h2>COMP2132 Practical Exam</h2>
<p>Marlowe Rainey</p>
`;
$(document).ready(function() {
    $('li>ul.sub-nav').css('visibility', 'hidden')
});
const firstelement = document.querySelector('li> #products');
const firselement_content = document.querySelector('li> #products>ul.sub-nav');
const secondelement = document.querySelector('li>#services');
const secondelement_content = document.querySelector('li>#services>.sub-nav');

$(firstelement).mouseenter(function() {
    $(firselement_content).css('visibility','visible');
});

$(firselement_content).mouseleave(function(){
    $(firselement_content).css('visibility','hidden');
})

$(secondelement).mouseenter(function() {
    $(secondelement_content).css('visibility','visible');
});
$(secondelement_content).mouseleave(function(){
    $(secondelement_content).css('visibility','hidden');
})
//
// $(firselement_content).css('visibility','hidden');
// $(secondelement_content).css('visibility','hidden');




//
// $(document).ready(function(){
//     $(firselement_content).css('visibility', 'hidden');
// });
// //Products
// $(firstelement).mouseenter(function() {
//     $(firselement_content).css('visibility','visible');
// });
//
//
//
//
//
// $().mouseleave(function() {
//     $('ul.sub-nav>li').css('visibility','hidden');
// });
//
//
// $('#services').mouseenter(function() {
//     $('ul.sub-nav>li').css('visibility','visible');
// });
// $('.sub-nav').mouseleave(function() {
//     $('ul.sub-nav>li').css('visibility','hidden');
// });
