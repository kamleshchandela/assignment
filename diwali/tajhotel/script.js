var arrow1 = document.querySelector(".arrow1");
var arrow2 = document.querySelector(".arrow2");
var scrol1 = document.querySelector(".scrol1");

var count = 1;

arrow2.addEventListener("click", () => {
    if (count <= 7) {
        scrol1.style.transform = `translateX(${-count * 33}vw)`;
        count++;
    }
    else {
        count = 0;
        scrol1.style.transform = `translateX(-${count * 33}vw)`;
        count++;
    }
});

arrow1.addEventListener("click", () => {
    if (count > 1) {


        count--;
    }
    else {


        count = 8;
    }
    scrol1.style.transform = `translateX(${-(count - 1) * 33}vw)`;
});







var ok = document.querySelector(".blackimgscrol")
var arrow12 = document.querySelector(".arrow3");
var arrow22 = document.querySelector(".arrow4");
var scrol2 = document.querySelector(".scrol2");

var count1 = 1;

arrow22.addEventListener("click", () => {
    if (count1 <= 7) {
        scrol2.style.transform = `translateX(${-(count1 * 55)}vw)`;
        count1++;
    }
    else {
        count1 = 0;
        scrol2.style.transform = `translateX(-${count1 * 55}vw)`;
        count1++;
    }

    if (count1 == 1) {
        ok.style.backgroundImage = "url('https://res.cloudinary.com/dsuhb6swy/image/upload/v1761062162/fe6799b89df9ca58ec7319b1d15063dff466576c-1892x860_q5z7li.jpg')"
    }
    else if (count1 == 2) {
        ok.style.backgroundImage = "url('https://res.cloudinary.com/dsuhb6swy/image/upload/v1761062188/dabe79a747cb5c40e39d34ae9f669f9cbe7b4e56-1892x860_sa4ayo.jpg')"
    }
    else if (count1 == 3) {
        ok.style.backgroundImage = "url('https://res.cloudinary.com/dsuhb6swy/image/upload/v1761062264/2fc146494fe409217601e433644a4f8e33a3d5d9-1892x860_sjkn3l.jpg')"
    }
    else if (count1 == 4) {
        ok.style.backgroundImage = "url('https://res.cloudinary.com/dsuhb6swy/image/upload/v1761062310/f345bca0624f12d7c0f2e1f528e08f32df07388e-1892x860_g3y09r.jpg')"
    }
    else if (count1 == 5) {
        ok.style.backgroundImage = "url('https://res.cloudinary.com/dsuhb6swy/image/upload/v1761062217/f2b02a1e956f9653fef16ce8f3989149d7c3a2a8-1892x860_zaz0q5.jpg')"
    }
    else if (count1 == 6) {
        ok.style.backgroundImage = "url('https://res.cloudinary.com/dsuhb6swy/image/upload/v1761062286/3c44d2a73cec26a4a99db4b2198a642f73267ac7-1892x860_irrjpn.jpg')"
    }
    else if (count1 == 7) {
        ok.style.backgroundImage = "url('https://res.cloudinary.com/dsuhb6swy/image/upload/v1761062236/58f8418d3475dcb62f3a731c464df29d8f3e0eb1-1892x860_cwxo8a.jpg')"
    }
    else if (count1 == 8) {
        ok.style.backgroundImage = "url('https://res.cloudinary.com/dsuhb6swy/image/upload/v1761062250/16395ee8e8d07e5c2d4102198910b45f852f2d77-1892x860_acju6u.jpg')"
    }

});

arrow12.addEventListener("click", () => {
    if (count1 > 1) {


        count1--;
    }
    else {


        count1 = 8;
    }

    if (count1 == 1) {
        ok.style.backgroundImage = "url('https://res.cloudinary.com/dsuhb6swy/image/upload/v1761062162/fe6799b89df9ca58ec7319b1d15063dff466576c-1892x860_q5z7li.jpg')"
    }
    else if (count1 == 2) {
        ok.style.backgroundImage = "url('https://res.cloudinary.com/dsuhb6swy/image/upload/v1761062188/dabe79a747cb5c40e39d34ae9f669f9cbe7b4e56-1892x860_sa4ayo.jpg')"
    }
    else if (count1 == 3) {
        ok.style.backgroundImage = "url('https://res.cloudinary.com/dsuhb6swy/image/upload/v1761062264/2fc146494fe409217601e433644a4f8e33a3d5d9-1892x860_sjkn3l.jpg')"
    }
    else if (count1 == 4) {
        ok.style.backgroundImage = "url('https://res.cloudinary.com/dsuhb6swy/image/upload/v1761062310/f345bca0624f12d7c0f2e1f528e08f32df07388e-1892x860_g3y09r.jpg')"
    }
    else if (count1 == 5) {
        ok.style.backgroundImage = "url('https://res.cloudinary.com/dsuhb6swy/image/upload/v1761062217/f2b02a1e956f9653fef16ce8f3989149d7c3a2a8-1892x860_zaz0q5.jpg')"
    }
    else if (count1 == 6) {
        ok.style.backgroundImage = "url('https://res.cloudinary.com/dsuhb6swy/image/upload/v1761062286/3c44d2a73cec26a4a99db4b2198a642f73267ac7-1892x860_irrjpn.jpg')"
    }
    else if (count1 == 7) {
        ok.style.backgroundImage = "url('https://res.cloudinary.com/dsuhb6swy/image/upload/v1761062236/58f8418d3475dcb62f3a731c464df29d8f3e0eb1-1892x860_cwxo8a.jpg')"
    }
    else if (count1 == 8) {
        ok.style.backgroundImage = "url('https://res.cloudinary.com/dsuhb6swy/image/upload/v1761062250/16395ee8e8d07e5c2d4102198910b45f852f2d77-1892x860_acju6u.jpg')"
    }


    scrol2.style.transform = `translateX(${-(count1 - 1) * 55}vw)`;
});







var arrow5 = document.querySelector(".arrow5");
var arrow6 = document.querySelector(".arrow6");
var scrol3 = document.querySelector(".scrol3");

var count3 = 1;

arrow6.addEventListener("click", () => {
    if (count3 <= 7) {
        scrol3.style.transform = `translateX(${-count3 * 33}vw)`;
        count3++;
    }
    else {
        count3 = 0;
        scrol3.style.transform = `translateX(-${count3 * 33}vw)`;
        count3++;
    }
});

arrow5.addEventListener("click", () => {
    if (count3 > 1) {


        count3--;
    }
    else {


        count3 = 8;
    }
    scrol3.style.transform = `translateX(${-(count3 - 1) * 33}vw)`;
});



// 44444444444444444444444444




var ok1 = document.querySelector(".blackimgscrolqq")
var arrow13 = document.querySelector(".arrow7");
var arrow23 = document.querySelector(".arrow8");
var scrol4 = document.querySelector(".scrol4");

var count2 = 1;

arrow23.addEventListener("click", () => {
    if (count2 <= 7) {
        scrol4.style.transform = `translateX(${-(count2 * 36)}vw)`;
        count2++;
    }
    else {
        count2 = 0;
        scrol4.style.transform = `translateX(-${count2 * 35}vw)`;
        count2++;
    }

    if (count2 == 1) {
        ok1.style.backgroundImage = "url('https://res.cloudinary.com/dsuhb6swy/image/upload/v1761144539/69c467744f7f1694331768d6d611bfc77582e36a-906x972_s6mfgh.jpg')"
    }
    else if (count2 == 2) {
        ok1.style.backgroundImage = "url('https://res.cloudinary.com/dsuhb6swy/image/upload/v1761144558/c0401c93116df10e12fea3bf9ea9662394fc9b80-906x972_zxo6ze.jpg')"
    }
    else if (count2 == 3) {
        ok1.style.backgroundImage = "url('https://res.cloudinary.com/dsuhb6swy/image/upload/v1761144573/df050e0b9d06c94045cdbdacce64d23993a69f7a-950x1020_d48hgl.jpg')"
    }
    else if (count2 == 4) {
        ok1.style.backgroundImage = "url('https://res.cloudinary.com/dsuhb6swy/image/upload/v1761144589/2011d590b040d304174b5985c5027d65b176aeb0-906x972_w7htz6.jpg')"
    }
    else if (count2 == 5) {
        ok1.style.backgroundImage = "url('https://res.cloudinary.com/dsuhb6swy/image/upload/v1761144600/6f2a11fe4c3f74aebb344e214c359ba6b7a303b3-906x972_ecaomi.jpg')"
    }
    else if (count2 == 6) {
        ok1.style.backgroundImage = "url('https://res.cloudinary.com/dsuhb6swy/image/upload/v1761144539/69c467744f7f1694331768d6d611bfc77582e36a-906x972_s6mfgh.jpg')"
    }
    else if (count2 == 7) {
        ok1.style.backgroundImage = "url('https://res.cloudinary.com/dsuhb6swy/image/upload/v1761144558/c0401c93116df10e12fea3bf9ea9662394fc9b80-906x972_zxo6ze.jpg')"
    }
    else if (count2 == 8) {
        ok1.style.backgroundImage = "url('https://res.cloudinary.com/dsuhb6swy/image/upload/v1761144573/df050e0b9d06c94045cdbdacce64d23993a69f7a-950x1020_d48hgl.jpg')"
    }

});

arrow13.addEventListener("click", () => {
    if (count2 > 1) {


        count2--;
    }
    else {


        count2 = 8;
    }

    if (count2 == 1) {
        ok.style.backgroundImage = "url('https://res.cloudinary.com/dsuhb6swy/image/upload/v1761062162/fe6799b89df9ca58ec7319b1d15063dff466576c-1892x860_q5z7li.jpg')"
    }
    else if (count2 == 2) {
        ok.style.backgroundImage = "url('https://res.cloudinary.com/dsuhb6swy/image/upload/v1761062188/dabe79a747cb5c40e39d34ae9f669f9cbe7b4e56-1892x860_sa4ayo.jpg')"
    }
    else if (count2 == 3) {
        ok.style.backgroundImage = "url('https://res.cloudinary.com/dsuhb6swy/image/upload/v1761062264/2fc146494fe409217601e433644a4f8e33a3d5d9-1892x860_sjkn3l.jpg')"
    }
    else if (count2 == 4) {
        ok.style.backgroundImage = "url('https://res.cloudinary.com/dsuhb6swy/image/upload/v1761062310/f345bca0624f12d7c0f2e1f528e08f32df07388e-1892x860_g3y09r.jpg')"
    }
    else if (count2 == 5) {
        ok.style.backgroundImage = "url('https://res.cloudinary.com/dsuhb6swy/image/upload/v1761062217/f2b02a1e956f9653fef16ce8f3989149d7c3a2a8-1892x860_zaz0q5.jpg')"
    }
    else if (count2 == 6) {
        ok.style.backgroundImage = "url('https://res.cloudinary.com/dsuhb6swy/image/upload/v1761062286/3c44d2a73cec26a4a99db4b2198a642f73267ac7-1892x860_irrjpn.jpg')"
    }
    else if (count2 == 7) {
        ok.style.backgroundImage = "url('https://res.cloudinary.com/dsuhb6swy/image/upload/v1761062236/58f8418d3475dcb62f3a731c464df29d8f3e0eb1-1892x860_cwxo8a.jpg')"
    }
    else if (count2 == 8) {
        ok.style.backgroundImage = "url('https://res.cloudinary.com/dsuhb6swy/image/upload/v1761062250/16395ee8e8d07e5c2d4102198910b45f852f2d77-1892x860_acju6u.jpg')"
    }


    scrol4.style.transform = `translateX(${-(count2 - 1) * 35}vw)`;
});




// upar tak bottot errow se top tak scrol karneke liye

document.querySelector("#arrowt").addEventListener("click", function() {
  window.scrollTo({
    top: 0,           // page ke top tak scroll karo
    behavior: "smooth" ,// smooth animation ke saath
    
  });
});














