// Lista de hobbies con los elementos y sus respectivas imágenes
const hobbies = [
    { 
        nombre: "Videojuegos Favoritos", 
        elementos: [
            { nombre: "Halo Reach", imagen: "img/games/halor.jpg" },
            { nombre: "Gears of War 3", imagen: "img/games/gears.jpg" },
            { nombre: "Skyrim", imagen: "img/games/skyrim.png" },
            { nombre: "Dante's Inferno", imagen: "img/games/dantes.jpg" }
        ]
    },
    { 
        nombre: "Series", 
        elementos: [
            { nombre: "Jujutsu Kaisen", imagen: "img/anime/jjk.jpg" },
            { nombre: "Kimetsu no Yaiba", imagen: "img/anime/kimetsu.jpg" },
            { nombre: "Saint Seiya", imagen: "img/anime/ss.jpg" },
            { nombre: "Dragon Ball Z", imagen: "img/anime/dbz.png" }
        ]
    },
    { 
        nombre: "Deporte", 
        elementos: [
            { nombre: "Calistenia", imagen: "img/deportes/calistenia.jpg" },
            { nombre: "Armwrestling", imagen: "img/deportes/armw.jpg" }
        ]
    },
    { 
        nombre: "Música", 
        elementos: [
            { nombre: "Linkin Park", imagen: "img/music/linkin.jpg" },
            { nombre: "From Ashes to New", imagen: "img/music/fatn.jpg" }
        ]
    }
];

// Contenedor donde se agregarán las tarjetas
const container = document.getElementById('hobbies-cards');

// Función para crear las tarjetas
function crearTarjetas() {
    hobbies.forEach(hobby => {
        const cardRow = document.createElement('div');
        cardRow.classList.add('row'); // Nueva fila para cada categoría

        // Crear el encabezado para cada categoría de hobbies
        const cardHeader = document.createElement('h5');
        cardHeader.classList.add('col-12', 'mb-3');
        cardHeader.textContent = hobby.nombre;
        
        // Agregar el encabezado a la fila
        cardRow.appendChild(cardHeader);

        hobby.elementos.forEach(elemento => {
            // Crear cada tarjeta dentro de la fila
            const cardCol = document.createElement('div');
            cardCol.classList.add('col-md-3', 'mb-4'); // Cada tarjeta ocupará un cuarto de la fila (4 col)
            
            const cardDiv = document.createElement('div');
            cardDiv.classList.add('card');
            
            // Crear la imagen para el elemento
            const elementoImg = document.createElement('img');
            elementoImg.src = elemento.imagen;
            elementoImg.alt = elemento.nombre;
            elementoImg.classList.add('card-img-top', 'img-fluid'); // Clases Bootstrap para imagen fluida

            const cardBody = document.createElement('div');
            cardBody.classList.add('card-body');
            
            const elementoTexto = document.createElement('p');
            elementoTexto.textContent = elemento.nombre;
            
            // Agregar imagen y texto a la tarjeta
            cardBody.appendChild(elementoTexto);
            cardDiv.appendChild(elementoImg);
            cardDiv.appendChild(cardBody);

            cardCol.appendChild(cardDiv);
            cardRow.appendChild(cardCol);
        });

        // Agregar la fila con las tarjetas al contenedor
        container.appendChild(cardRow);
    });
}

// Llamar a la función para agregar las tarjetas al DOM
crearTarjetas();
