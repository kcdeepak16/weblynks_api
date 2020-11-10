
$(document).ready(function() {
	$('.carousel').carousel();
});

var $orbs = $('.orbs span');
$('.end-right').css('left' , '-10%');
$('.end-left').css('left', '110%');
$orbs.velocity({'top': '-300px', scaleX: '.2', scaleY: '.2', color: 'white'},0);
var orb = 0;
var numOrbs = $orbs.length;

$('.end-right').velocity({left : '2%'}, 'easeOutExpo', 1200);
$('.end-left').velocity({left : '50%'}, 'easeOutExpo',  1200);


dropOrbs = function(){
  $orbs.eq(orb).velocity({top: '10rem'}, 400).velocity({scaleX: 1, scaleY: 1, color: '#FBD160'}, 1000).css('position', 'relative');
  orb = orb + 1;
  if(orb < numOrbs){
    setTimeout(dropOrbs, 100);
  }
  else{
    setTimeout(function(){$('.glow').velocity({opacity: .87}, 1200);}, 1200);

  }
  
}

setTimeout(dropOrbs, 400);

function myFunction(x) {
  if (x.matches) {
    document.querySelector(".glow").innerHTML = "Web Solutions <br> Web Hosting <br> Logo Design";
  }
}



var x = window.matchMedia("(max-width: 800px)");
myFunction(x);
x.addListener(myFunction);

function scrolldown(x)
{
  closeNav();
  var elmnt = document.getElementById(x);
  elmnt.scrollIntoView({behavior: 'smooth'});
}

function changecarousel(x)
{
    $('.carousel').carousel('set', parseInt(x));
    for(i = 1;i<4;i++)
    {
        if(i == parseInt(x))
        {
            console.log(x);
            document.getElementById("service" + x).style.fontSize = "2rem";
        }
        else
        {
            console.log(x);
            document.getElementById("service" + i).style.fontSize = "1rem";
        }
    }
}


function openNav() {
  document.getElementById("myNav").style.height = "100%";
  document.getElementById("navbar_btn").style.display = "none";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
  if(x.matches)
  {
    document.getElementById("navbar_btn").style.display = "block";
  } 
}

function expandp(s)
{
    if(x.matches)
    {
        for(i = 1;i<4;i++)
        {
            if(i != parseInt(s))
            {
                document.getElementById('pc' + i).style.height = "8rem";
                document.getElementById('pc' + i).setAttribute('height','8rem');
                var clist = document.getElementsByClassName('pc')[i-1];
                clist.style.visibility = 'hidden';
            }
            else
            {
                currentelm = document.getElementById("pc"+s);
                if(currentelm.getAttribute("height") == null || currentelm.getAttribute("height") == '8rem')
                {
                    currentelm.style.height = '40rem';   
                    currentelm.setAttribute('height','40rem');
                    var clist = document.getElementsByClassName('pc')[i-1];
                    clist.style.visibility = 'visible';
                }
                else
                {
                    var clist = document.getElementsByClassName('pc')[i-1];
                    clist.style.visibility = 'hidden';
                    currentelm.style.height = '8rem';
                    currentelm.setAttribute('height','8rem');
                }
            }
        }
    }
}   

function fsubmit()
{
    var formobj = $('form').serializeArray();
    var formdata = {};
    var valid = 1;
    $.each(formobj,
    function(i, v) {
        formdata[v.name] = v.value;
        if(v.value == "" && v.name != "number")
        {
            document.getElementById(v.name).style.border = "solid 1px red";
            if(document.getElementById("response").style.opacity == "0")
            {
                document.getElementById("response").innerHTML = "Please fill the fields marked in red";
                document.getElementById("response").style.color = "#D14";
                document.getElementById("response").style.opacity = '1';
                valid = 0;  
            }
        }
    });
    if(valid == 1)
    {
        console.log(JSON.stringify(formdata));
        $.ajax({
            url: "/queries/",
            type: "POST",
            contentType: "application/json",
            headers: {'Access-Control-Allow-Origin':'*', 'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
                     'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'},
            data: JSON.stringify(formdata),
            success: function (response) {
                if(response['success'] == 'true')
                {
                    $("#response").html("Thank you for taking out time and filling the form.<br> We have recorded your response and will be contacting you within a day or two");
                    $('#response').css({'color':'#195f91'});
                    $("#response").animate({'opacity':'1'});
                }
                else
                {
                    $("#response").html("Something went wrong. <br> Please try again.");
                    $('#response').css({'color': '#D14'});
                    $("#response").animate({'opacity':'1'});
                }
            },
            error: function(error){
                $("#response").html("Something went wrong. <br> Please try again.");
                $('#response').css({'color': '#D14'});
                $("#response").animate({'opacity':'1'});
            }
        });
    }
}