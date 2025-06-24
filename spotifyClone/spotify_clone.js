class Template {
    constructor(image, description, ...tags) {
        this.image = image;
        this.description = description;
        this.tags = tags;
    }

    create() {
        return `<div class="template" style="width: 170px; height: 220px; padding: 5px; overflow: hidden; text-overflow: ellipsis; border-radius: 10px; display: flex; flex-direction: column; align-items: center; justify-content: center;">
                    <img src="${this.image}" alt="Template Image" style="width: 170px; height: 170px; border-radius: 10px;">
                    <p style="margin: 10px; height: 50px; overflow: hidden; text-overflow: ellipsis; font-size: 18px;">${this.description}</p>
                </div>`;
    }
}

function cardTemplate(image, description, ...tags) {
    const flatTags = tags.flat(); // Flatten nested arrays if needed

    const templateInstance = new Template(image, description, ...flatTags);

    const cardElements = document.getElementsByClassName("card");

    // Add the template to all matching elements
    for (let el of cardElements) {
        el.innerHTML = templateInstance.create();
    }
}

// Usage
let imagea = "https://www.bing.com/th/id/OIP.ShDMVFbdsBcORh_GCwAqmAHaEc?w=240&h=211&c=8&rs=1&qlt=90&o=6&cb=ircwebpc1&pid=3.1&rm=2";
let descriptiona = "This is a sample description for the Spotify clone card. It can be longer than the container to test overflow handling.";
let tagsa = ["tag1", "tag2", "tag3"];

cardTemplate(imagea, descriptiona, tagsa);
