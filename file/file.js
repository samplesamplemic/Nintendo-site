
var btnstor = document.getElementById('btn-store');
var divhide = document.getElementById('stor-bot-nav');
var closestore = document.getElementById('cls-btn-store');
var spanstore = document.getElementById('span-store');

//btn bot-nav div(show/hide)
btnstor.onclick = function () {
    if (divhide.style.display = 'none') {
        divhide.style.display = 'flex';
    } 
}

//icon-close hide div
closestore.onclick = function () {
    divhide.style.display = 'none';
}
       
         //hide div click outside 
        $(document).mouseup(function (e) {
        var container = $("#stor-bot-nav");
        if(!container.is(e.target) && 
        container.has(e.target).length === 0 ) {
            container.hide();
        } 
     });

    


//bot nav games btn
var btngame = document.getElementById('btn-game-nav-bot');
var divgame = document.getElementById('games-bot-nav');
var closegm = document.getElementById('cls-btn-games-bot-nav');

btngame.onclick = function () {
    if (divgame.style.display = 'none') {
        divgame.style.display = 'flex';
    } 
}
closegm.onclick = function () {
    divgame.style.display = 'none';
}


$(document).mouseup(function (e) {
    var container = $("#games-bot-nav");
    var btnstr = $('.btn-stor')
    if(!container.is(e.target) && 
    container.has(e.target).length === 0 ) {
        container.hide();
    }  if(btnstr.is(e.target) && 
    btnstr.has(e.target).lenght === 0) {
        container.hide();
    }
});



//bot nav switch btn
var btnswitch = document.getElementById('btn-switch-nav-bot');
var divswitch = document.getElementById('switch-bot-nav');
var closeswitch = document.getElementById('cls-btn-switch-bot-nav');

btnswitch.onclick = function () {
    if (divswitch.style.display = 'none') {
        divswitch.style.display = 'flex';
    } 
}
closeswitch.onclick = function () {
    divswitch.style.display = 'none';
}

$(document).mouseup(function (e) {
    var container = $("#switch-bot-nav");
    if(!container.is(e.target) && 
    container.has(e.target).length === 0 ) {
        container.hide();
    } 
 });