const restaurants = [
    {
        name: "Lord Stow's Bakery",
        cuisine: "Portuguese Egg Tarts & Cafe",
        address: "1 Rua do Tassara, Coloane Town Square, Macau",
        website: "https://www.lordstow.com"
    },
    {
        name: "The Eight Restaurant",
        cuisine: "Michelin 3-Star Chinese",
        address: "2F Grand Lisboa, Avenida de Lisboa, Macau",
        website: "https://www.grandlisboahotels.com/dining/the-8"
    },
    {
        name: "A Lorcha",
        cuisine: "Portuguese",
        address: "289 AA R/C Rua do Almirante Sérgio, Macau",
        website: "http://www.alorcha.com/"
    },
    {
        name: "Din Tai Fung",
        cuisine: "Taiwanese Dumplings",
        address: "Shop 1075, Level 1, The Boulevard at Studio City, Cotai",
        website: "https://www.studiocity-macau.com/en/dining/din-tai-fung"
    },
    {
        name: "Robuchon au Dôme",
        cuisine: "Michelin 3-Star French",
        address: "43/F, Grand Lisboa Hotel, Avenida de Lisboa, Macau",
        website: "https://www.grandlisboahotels.com/dining/robuchon-au-dome"
    },
    {
        name: "Wong Chi Kei",
        cuisine: "Traditional Cantonese Noodles",
        address: "17 Largo do Senado, Macau",
        website: "http://www.wongchikei.com.hk/"
    },
    {
        name: "Margaret's Cafe e Nata",
        cuisine: "Portuguese Egg Tarts & Cafe",
        address: "17B Rua do Comandante Mata e Oliveira, Macau",
        website: ""
    },
    {
        name: "Pizzeria Toscana",
        cuisine: "Italian",
        address: "Calcada da Barra 2-A, G/F, Macau",
        website: ""
    },
    {
        name: "Cafe Leon",
        cuisine: "Macanese",
        address: "79 Rua do Regedor, Taipa, Macau",
        website: ""
    }
];

const button = document.getElementById('chooser-button');
const display = document.getElementById('restaurant-display');

button.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * restaurants.length);
    const chosenRestaurant = restaurants[randomIndex];
    
    let websiteLink = '';
    if (chosenRestaurant.website) {
        websiteLink = `<a href="${chosenRestaurant.website}" target="_blank">Visit Website</a>`;
    }

    display.innerHTML = `
        <p>
            <strong>${chosenRestaurant.name}</strong><br>
            <small>${chosenRestaurant.cuisine}</small><br>
            <em>${chosenRestaurant.address}</em><br>
            ${websiteLink}
        </p>
    `;
});