const Epub = require("epub-gen");
const fs = require("fs");
const path = require('path');
const data = fs.readFileSync("./example.html")

const option = {
    title: "Alice's Adventures in Wonderland", // *Required, title of the book.
    author: "Krypton", // *Required, name of the author.
    publisher: "Twindle",
    cover: "https://blog.madhusudan.live/_nuxt/img/cover.3fabf47.jpg", // Url or File path, both ok.
    content: [
        {
            title: "Twindle ebook test", // Optional
            author: "krypton", // Optional
            data: data
        },
    ]
};

new Epub(option, "./example.epub");