// const getClicked = (position) => {
//     let clickfromCellDiv = document.getElementsByClassName(position);
//     if (clickfromCellDiv[0].querySelector("img") !== null) {
//         clickfromCellDiv[0].querySelector("img").style.display = "none";
//     }
// }

const getClicked = (position) => {
    position = '.'+position;
    let clickfromCellDiv = document.querySelector(position);
    if (clickfromCellDiv.querySelector("img") !== null) {
        clickfromCellDiv.querySelector("img").style.display = "none";
    }
}