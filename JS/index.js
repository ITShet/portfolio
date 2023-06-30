let rows = Math.floor(document.body.clientHeight / 50);
let columns = Math.floor(document.body.clientWidth / 50);

const wrapper = document.getElementById("tiles");

const handleOnClick = (index) => {
    const tiles = Array.from(wrapper.querySelectorAll(".tile"));
    anime({
        targets: tiles[index],
        scale: [
            { value: 1.2, duration: 200, easing: "easeOutQuad" },
            { value: .5, duration: 200, easing: "easeInQuad" },
            { value: 1, duration: 200, easing: "easeOutQuad" },
        ],
    });
};

const createTile = (index) => {
    const tile = document.createElement("div");
    tile.classList.add("tile");
    tile.onclick = (e) => handleOnClick(index);
    return tile;
};

const createGrid = () => {
    wrapper.innerHTML = "";
    rows = Math.floor(document.body.clientHeight / 50);
    columns = Math.floor(document.body.clientWidth / 50);

    wrapper.style.setProperty("--columns", columns);
    wrapper.style.setProperty("--rows", rows);

    for (let index = 0; index < columns * rows; index++) {
        wrapper.appendChild(createTile(index));
    }
};

window.onresize = createGrid;

const animateTiles = (event) => {
    const tiles = Array.from(wrapper.querySelectorAll(".tile"));
    const index = tiles.indexOf(event.target);

    anime({
        targets: tiles,
        scale: [
            { value: 1.5, duration: 200, easing: "easeOutQuad" },
            { value: .5, duration: 200, easing: "easeInQuad" },
            { value: 1, duration: 200, easing: "easeOutQuad" },
        ],
        delay: anime.stagger(30, { grid: [columns, rows], from: index }),
    });
};

wrapper.addEventListener("click", animateTiles);

createGrid();
