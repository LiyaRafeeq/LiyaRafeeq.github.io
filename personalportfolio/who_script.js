function navigate(url) {
    window.location.href = url;
}

function showDescription(boxId) {
    const box = document.getElementById('box' + boxId);
    const description = document.getElementById('desc' + boxId);

    box.classList.toggle('active');
    description.classList.toggle('active');
  }
  