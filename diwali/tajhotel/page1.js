

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
        ok.style.backgroundImage = "url('https://cdn.tajhotels.com/images/ocl5w36p/prod5/2d7e2f3170c75934ccf887f8d2309836a844cc63-1440x974.jpg?w=768')"
    }
    else if (count1 == 3) {
        ok.style.backgroundImage = "url('https://cdn.tajhotels.com/images/ocl5w36p/prod5/1ce39094da274a33cbb2d7a3b283ed0ffbbf3eae-1440x974.jpg?w=768')"
    }
    else if (count1 == 4) {
        ok.style.backgroundImage = "url('https://cdn.tajhotels.com/images/ocl5w36p/prod5/804a20072c40b40ed897548950bd795419eb3af1-1440x974.jpg?w=768')"
    }
    else if (count1 == 5) {
        ok.style.backgroundImage = "url('https://res.cloudinary.com/dsuhb6swy/image/upload/v1761062217/f2b02a1e956f9653fef16ce8f3989149d7c3a2a8-1892x860_zaz0q5.jpg')"
    }
    else if (count1 == 6) {
        ok.style.backgroundImage = "url('https://cdn.tajhotels.com/images/ocl5w36p/prod5/7421e5a9f528f6956852d62614a16fbde1986adb-1440x974.jpg?w=768')"
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
        ok.style.backgroundImage = "url('https://cdn.tajhotels.com/images/ocl5w36p/prod5/2d7e2f3170c75934ccf887f8d2309836a844cc63-1440x974.jpg?w=768')"
    }
    else if (count1 == 3) {
        ok.style.backgroundImage = "url('https://cdn.tajhotels.com/images/ocl5w36p/prod5/1ce39094da274a33cbb2d7a3b283ed0ffbbf3eae-1440x974.jpg?w=768')"
    }
    else if (count1 == 4) {
        ok.style.backgroundImage = "url('https://cdn.tajhotels.com/images/ocl5w36p/prod5/804a20072c40b40ed897548950bd795419eb3af1-1440x974.jpg?w=768')"
    }
    else if (count1 == 5) {
        ok.style.backgroundImage = "url('https://res.cloudinary.com/dsuhb6swy/image/upload/v1761062217/f2b02a1e956f9653fef16ce8f3989149d7c3a2a8-1892x860_zaz0q5.jpg')"
    }
    else if (count1 == 6) {
        ok.style.backgroundImage = "url('https://cdn.tajhotels.com/images/ocl5w36p/prod5/7421e5a9f528f6956852d62614a16fbde1986adb-1440x974.jpg?w=768')"
    }
    else if (count1 == 7) {
        ok.style.backgroundImage = "url('https://res.cloudinary.com/dsuhb6swy/image/upload/v1761062236/58f8418d3475dcb62f3a731c464df29d8f3e0eb1-1892x860_cwxo8a.jpg')"
    }
    else if (count1 == 8) {
        ok.style.backgroundImage = "url('https://res.cloudinary.com/dsuhb6swy/image/upload/v1761062250/16395ee8e8d07e5c2d4102198910b45f852f2d77-1892x860_acju6u.jpg')"
    }


    scrol2.style.transform = `translateX(${-(count1 - 1) * 55}vw)`;
});




// upar tak bottot errow se top tak scrol karneke liye

document.querySelector("#arrowt").addEventListener("click", function() {
  window.scrollTo({
    top: 0,           // page ke top tak scroll karo
    behavior: "smooth" ,// smooth animation ke saath
    
  });
});


























