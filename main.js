const API = "https://node-js-on-azure-azure-dice-roller1-czfhb6evcgecgpez.canadacentral-01.azurewebsites.net";

document.getElementById("pingBtn").onclick = async () => {
    const res = await fetch(API + "/api/ping");
    show(await res.json());
};

document.getElementById("rollBtn").onclick = async () => {
    const res = await fetch(API + "/api/roll?sides=6&count=2");
    show(await res.json());
};

document.getElementById("noCorsBtn").onclick = async () => {
    try {
        const res = await fetch(API + "/api/roll-nocors?sides=6&count=2");
        show(await res.json());
    } catch (err) {
        show({ error: "Expected CORS failure", details: err.toString() });
    }
};

function show(data) {
    document.getElementById("output").textContent = JSON.stringify(data, null, 2);
}

