let currentOwl = 1;

function changeOwl() {
    currentOwl++;

    if (currentOwl > 3) { // Assuming 3 owl images
        currentOwl = 1;
    }

    document.getElementById('owlImage').src = `images/owl${currentOwl}.jpg`;
    document.getElementById('owlName').textContent = `Owl ${currentOwl}`;
}