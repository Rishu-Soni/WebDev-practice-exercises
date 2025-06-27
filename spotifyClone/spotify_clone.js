// class Template { //Class to create a card template for the Spotify clone 
//     constructor(classname, image, description) {
//         this.classname = classname;
//         this.image = image;
//         this.description = description;
//     }

//     create() {
// return `<div class="template" style=" display: inline-flexbox; width: 170px; height: 220px; padding: 5px; overflow: hidden; text-overflow: ellipsis; border-radius: 10px; display: flex; flex-direction: column; align-items: center; justify-content: center;">
//             <img src="${this.image}" alt="Template Image" style="width: 170px; height: 170px; border-radius: 10px;">
//             <p style="margin: 10px; height: 50px; overflow: hidden; text-overflow: ellipsis; font-size: 18px;">${this.description}</p>
//         </div>`;
//     }
// }
// function cardTemplate(classname, image, description) {
//     songs[i] = new Template(classname, image, description);
//     document.querySelector(classname).innerHTML += songs[i].create();
// }


// var songs = [song1, song2];
// cardTemplate(".card", "https://my.alfred.edu/zoom/_images/foster-lake.jpg", "this is the description and onword there is lorem10 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, blanditiis!");

// console.log(songs.songName.name());

var songs = [
    { className: ".card", image: "https://my.alfred.edu/zoom/_images/foster-lake.jpg", description: "this is the description and onword there is lorem10 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, blanditiis!" },
    { className: ".card", image: "https://th.bing.com/th/id/OIP.6L7shpwxVAIr279rA0B1JQHaE7?o=7rm=3&rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3", description: "this is the description and onword there is lorem10 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, blanditiis!" }
]
function insertBlock(songs) {
    songs.forEach(song => {
        document.querySelector(song.className).innerHTML +=
            `<div class="template" style=" width: 170px; height: 220px; padding: 10px; border-radius: 10px;">
                <img src="${song.image}" alt="Template Image" style="width: 170px; height: 170px; border-radius: 10px;">
                <p class="template" style="margin: 10px; height: 40px; width: 160px; overflow-y: hidden; overflow-x: clip; text-overflow: ellipsis; font-size: 18px;">
                    ${song.description.charAt(0).toUpperCase() + song.description.slice(1)}
                </p>
            </div>`;
    });
}
insertBlock(songs);