$(document).ready(() => {

    const SD31 = [
        "David",
        "Rakhin",
        "Tymani",
        "Harvey",
        "Frank",
        "Dylan",
        "Ethan",
        "Caspar",
        "Zane",
        "Matus",
        "Stephen",
        "Connor",
        "Baylie",
        "Arber",
        "Muhiyadin"
    ];

    const SD32 = [
        "Lucy",
        "Jake",
        "Giedrius",
        "Ethan",
        "Brian",
        "Adrian",
        "Sonny",
        "Oliver R",
        "Valentin",
        "Milo",
        "David",
        "Ben",
        "Oliver W",
        "Pawel",
        "Krzysztof",
        "Vitali"
    ];

    $(".SD31").click((e) => {
        let name = SD31[Math.floor(Math.random()*SD31.length)]

        $("h1").html(name);
    });

    $(".SD32").click((e) => {
        let name = SD32[Math.floor(Math.random()*SD32.length)]

        $("h1").html(name);
    });

});