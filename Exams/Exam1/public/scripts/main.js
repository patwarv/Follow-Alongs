let currentOwl = 1;

function changeOwl() {
    currentOwl++;

    if (currentOwl > 3) { 
        currentOwl = 1;
    }

    document.getElementById('owlImage').src = `images/owl${currentOwl}.jpg`;
    document.getElementById('owlName').textContent = `Owl ${currentOwl}`;
}