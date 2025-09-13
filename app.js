const toggleBtn = document.querySelector("#toggleBtn");
let cardContainer = document.querySelector(".card-container");

let obj = [{
    pro: "Basic",
    doller: "&dollar;19.99",
    doller2: "&dollar;199.99",
    gb: "500 GB Storage",
    userAllow: "2 Users Allowed",
    sendup: "Send up to 3 GB",
    btn: "Learn More",
},
{
    pro: "Professional",
    doller: "&dollar;24.99",
    doller2: "&dollar;249.99",
    gb: "1 TB Storage",
    userAllow: "5 Users Allowed",
    sendup: "Send up to 10 GB",
    btn: "Learn More",
},
{
    pro: "Master",
    doller: "&dollar;39.99",
    doller2: "&dollar;399.99",
    gb: "2 TB Storage",
    userAllow: "10 Users Allowed",
    sendup: "Send up to 20 GB",
    btn: "Learn More",
}
]

function addCards() {
    cardContainer.innerHTML = "";
    obj.forEach((plan) => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
          <h2>${plan.pro}</h2>
          <p class="price">${plan.doller}</p>
          <p class="b">${plan.gb}</p>
          <p class="b">${plan.userAllow}</p>
          <p class="b">${plan.sendup}</p>
          <button>${plan.btn}</button>
        `;
        cardContainer.appendChild(card);
    });
}

toggleBtn.addEventListener("change", function () {
    const priceEls = cardContainer.querySelectorAll(".price");
    if (toggleBtn.checked) {
        obj.forEach((plan, index) => {
            priceEls[index].innerHTML = plan.doller2;
        });
    } else {
        obj.forEach((plan, index) => {
            priceEls[index].innerHTML = plan.doller;
        });
    }
});

// Initialize
addCards();