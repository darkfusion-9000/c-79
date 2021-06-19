Array_game =[];

function submit()
{
    var vidgam_1  =  document.getElementById("first_game").value;
    var vidgam_2  =  document.getElementById("second_game").value;
    var vidgam_3  =  document.getElementById("third_game").value;
    var vidgam_4 =  document.getElementById("fourth_game").value;

    Array_game.push(vidgam_1);
    Array_game.push(vidgam_2);
    Array_game.push(vidgam_3);
    Array_game.push(vidgam_4);

    console.log(Array_game);

    document.getElementById("c=").innerHTML = Array_game;
    document.getElementById("sorton").style.display = "inline-block";
    document.getElementById("subut").style.display = "none";
}
function sorting()
{
    Array_game.sort();
    console.log(Array_game);
    document.getElementById("c=").innerHTML = Array_game;

}