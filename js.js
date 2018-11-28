window.onload = function() {
    changePic('img1');
    changePic('img2');
    changePic('img3');
    changePic('img4');
    changePic('img5');
}
let random = function () {
    return Math.floor((Math.random() * 3) + 1);

}

function changePic(img) {
    let picSelect = document.getElementById(img);
    let num;
    let noRepe;
    do {
        num = random();
    } while (noRepe == num || num == picSelect.alt.substring(4, 3))
    noRepe = random;
    let a = img.substring(img.length, img.length - 1);
    picSelect.src = `./img${num}/img_00${a}.jpg`;
    picSelect.alt = `pic${num}`;
    let part1 = document.getElementById('img1').alt;
    let part2 = document.getElementById('img2').alt;
    let part3 = document.getElementById('img3').alt;
    let part4 = document.getElementById('img4').alt;
    let part5 = document.getElementById('img5').alt;
    if (part1 == part2 && part1 == part3 && part1 == part4 && part1 == part5)
        for (let i = 0; i < 5; i++)
            $('img').css('box-shadow', 'red 4px 4px 9px');
    else $('img').css('box-shadow', 'none');
}