const mostrarDatos = () => {

    // Aquí mostramos los datos de la categoría nombre
    let userName = document.getElementById("name").value;
    let userSurnameP = document.getElementById("apellidoP").value;
    let userSurnameM = document.getElementById("apellidoM").value;
    alert("Nombre Completo: " + userName + " " + userSurnameP + " " + userSurnameM);

    // Esta mother solo es una prueba de salto de linea en alert xd
    alert("Esto que lo escriba en la 1ª línea," + "\n" + "y esto en la 2ª")

    //Aquí mostramos los datos de la categoría dirección
    let userStreet = document.getElementById("street").value;
    let userNumber = document.getElementById("number").value;
    let userSuburb = document.getElementById("suburb").value;
    let userPC = document.getElementById("pc").value;
    let userCity = document.getElementById("city").value;
    alert("Dirección Completa: " + userStreet + " " + userNumber + " " + userSuburb + " " + userPC + " " + userCity);

    // Aquí mostramos los datos personales del usuario
    let userGenderM = document.getElementById("male").value;
    let userGenderF = document.getElementById("female").value;
    let userGenderO = document.getElementById("other").value;
    let userMonth = document.getElementById("month").value;
    let userDay = document.getElementById("day").value;
    let userYear = document.getElementById("year").value;
    let userCurp = document.getElementById("curp").value;
    alert("Datos Personales: " + userGenderM + " " + userGenderF + " " + userGenderO + " " + userMonth + " " + userDay + " " + userYear + " " + userCurp);

    // Aquí mostramos los lenguajes de programación del usuario
    let userLC = document.getElementById("c").value;
    let userLRuby = document.getElementById("ruby").value;
    let userLCplus = document.getElementById("c++").value;
    let userLPerl = document.getElementById("perl").value;
    let userLJava = document.getElementById("java").value;
    let userLR = document.getElementById("r").value;
    let userLPython = document.getElementById("python").value;
    let userLOther = document.getElementById("otherLanguage").value;
    alert("Lenguajes de Programación: " + userLC + " " + userLRuby + " " + userLCplus + " " + userLPerl + " " + userLJava + " " + userLR + " " + userLPython + " " + userLOther);

    // Aquí mostramos los pasatiempos del usuario 
    let userHBooks = document.getElementById("books").value;
    let userHVideogames = document.getElementById("videogames").value;
    let userHTV = document.getElementById("tv").name; // creo que puedo mostrar los valores con .name y dejar el .value para validar si el usuario lo clicó con "on" y así decidir si mostrar eso o no
    let userHMovies = document.getElementById("movies").value;
    let userHOther = document.getElementById("otherStuff").value;
    let userHInternet = document.getElementById("internet").value;
    let userHNetflix = document.getElementById("netflix").value;
    alert("Pasatiempos: " + userHBooks + " " +  userHVideogames + " " + userHTV + " " + userHMovies + " " + userHOther + " " + userHInternet + " " + userHNetflix);

    // Aquí mostramos los comentarios del usuario
    let userComments = document.getElementById("comments").value;
    alert("Comentarios: " + userComments);
}
