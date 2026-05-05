function expand(gridId) {
    var i, grid, btn, hd;

    grid = document.getElementsByClassName("flex-grid");
    btn = document.getElementsByClassName("season-btn");
    hd = document.getElementsByClassName("season");

    for (i=0; i < grid.length; i++) {
        grid[i].classList.remove("active");
    }

    for (i=0; i < btn.length; i++) {
        btn[i].classList.remove("active");
    }

    for (i=0; i < hd.length; i++) {
        hd[i].classList.remove("active");
    }
    document.getElementById(gridId).classList.add("active");
    
    x = document.getElementsByClassName(gridId);
    for (i=0; i < x.length; i++) {
        x[i].classList.add("active");
    }
    
}