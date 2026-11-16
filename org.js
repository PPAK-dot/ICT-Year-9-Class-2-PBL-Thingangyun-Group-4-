function showMore(id, button) {

    const info = document.getElementById(id);

    info.classList.toggle("show");

    if (info.classList.contains("show")) {

        button.innerHTML =
            'See Less';

    } else {

        button.innerHTML =
            'See More';

    }

}
