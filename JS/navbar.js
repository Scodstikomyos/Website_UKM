// navbar.js
document.addEventListener("DOMContentLoaded", function () {
  const navbar = `
    <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div class="container-fluid">
            <img class="logo" src="gambar/UKM_Pemrog.png" alt="Logo UKM">
            <a class="navbar-brand" href="index.html">UKM Pemrograman</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="pendaftaran.html">Pendaftaran</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="tentang.html">Tentang</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="project.html">Project</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="informasi.html">Informasi</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    `;

  document.querySelector("header").innerHTML = navbar;
});
