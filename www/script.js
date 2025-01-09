const departements = [
    { numero: "01", nom: "Ain", prefecture: "Bourg-en-Bresse" },
    { numero: "02", nom: "Aisne", prefecture: "Laon" },
    { numero: "03", nom: "Allier", prefecture: "Moulins" },
    { numero: "04", nom: "Alpes-de-Haute-Provence", prefecture: "Digne-les-Bains" },
    { numero: "05", nom: "Hautes-Alpes", prefecture: "Gap" },
    { numero: "06", nom: "Alpes-Maritimes", prefecture: "Nice" },
    { numero: "07", nom: "Ardèche", prefecture: "Privas" },
    { numero: "08", nom: "Ardennes", prefecture: "Charleville-Mézières" },
    { numero: "09", nom: "Ariège", prefecture: "Foix" },
    { numero: "10", nom: "Aube", prefecture: "Troyes" },
    { numero: "11", nom: "Aude", prefecture: "Carcassonne" },
    { numero: "12", nom: "Aveyron", prefecture: "Rodez" },
    { numero: "13", nom: "Bouches-du-Rhône", prefecture: "Marseille" },
    { numero: "14", nom: "Calvados", prefecture: "Caen" },
    { numero: "15", nom: "Cantal", prefecture: "Aurillac" },
    { numero: "16", nom: "Charente", prefecture: "Angoulême" },
    { numero: "17", nom: "Charente-Maritime", prefecture: "La Rochelle" },
    { numero: "18", nom: "Cher", prefecture: "Bourges" },
    { numero: "19", nom: "Corrèze", prefecture: "Tulle" },
    { numero: "2A", nom: "Corse-du-Sud", prefecture: "Ajaccio" },
    { numero: "2B", nom: "Haute-Corse", prefecture: "Bastia" },
    { numero: "21", nom: "Côte-d'Or", prefecture: "Dijon" },
    { numero: "22", nom: "Côtes-d'Armor", prefecture: "Saint-Brieuc" },
    { numero: "23", nom: "Creuse", prefecture: "Guéret" },
    { numero: "24", nom: "Dordogne", prefecture: "Périgueux" },
    { numero: "25", nom: "Doubs", prefecture: "Besançon" },
    { numero: "26", nom: "Drôme", prefecture: "Valence" },
    { numero: "27", nom: "Eure", prefecture: "Évreux" },
    { numero: "28", nom: "Eure-et-Loir", prefecture: "Chartres" },
    { numero: "29", nom: "Finistère", prefecture: "Quimper" },
    { numero: "30", nom: "Gard", prefecture: "Nîmes" },
    { numero: "31", nom: "Haute-Garonne", prefecture: "Toulouse" },
    { numero: "32", nom: "Gers", prefecture: "Auch" },
    { numero: "33", nom: "Gironde", prefecture: "Bordeaux" },
    { numero: "34", nom: "Hérault", prefecture: "Montpellier" },
    { numero: "35", nom: "Ille-et-Vilaine", prefecture: "Rennes" },
    { numero: "36", nom: "Indre", prefecture: "Châteauroux" },
    { numero: "37", nom: "Indre-et-Loire", prefecture: "Tours" },
    { numero: "38", nom: "Isère", prefecture: "Grenoble" },
    { numero: "39", nom: "Jura", prefecture: "Lons-le-Saunier" },
    { numero: "40", nom: "Landes", prefecture: "Mont-de-Marsan" },
    { numero: "41", nom: "Loir-et-Cher", prefecture: "Blois" },
    { numero: "42", nom: "Loire", prefecture: "Saint-Étienne" },
    { numero: "43", nom: "Haute-Loire", prefecture: "Le Puy-en-Velay" },
    { numero: "44", nom: "Loire-Atlantique", prefecture: "Nantes" },
    { numero: "45", nom: "Loiret", prefecture: "Orléans" },
    { numero: "46", nom: "Lot", prefecture: "Cahors" },
    { numero: "47", nom: "Lot-et-Garonne", prefecture: "Agen" },
    { numero: "48", nom: "Lozère", prefecture: "Mende" },
    { numero: "49", nom: "Maine-et-Loire", prefecture: "Angers" },
    { numero: "50", nom: "Manche", prefecture: "Saint-Lô" },
    { numero: "51", nom: "Marne", prefecture: "Châlons-en-Champagne" },
    { numero: "52", nom: "Haute-Marne", prefecture: "Chaumont" },
    { numero: "53", nom: "Mayenne", prefecture: "Laval" },
    { numero: "54", nom: "Meurthe-et-Moselle", prefecture: "Nancy" },
    { numero: "55", nom: "Meuse", prefecture: "Bar-le-Duc" },
    { numero: "56", nom: "Morbihan", prefecture: "Vannes" },
    { numero: "57", nom: "Moselle", prefecture: "Metz" },
    { numero: "58", nom: "Nièvre", prefecture: "Nevers" },
    { numero: "59", nom: "Nord", prefecture: "Lille" },
    { numero: "60", nom: "Oise", prefecture: "Beauvais" },
    { numero: "61", nom: "Orne", prefecture: "Alençon" },
    { numero: "62", nom: "Pas-de-Calais", prefecture: "Arras" },
    { numero: "63", nom: "Puy-de-Dôme", prefecture: "Clermont-Ferrand" },
    { numero: "64", nom: "Pyrénées-Atlantiques", prefecture: "Pau" },
    { numero: "65", nom: "Hautes-Pyrénées", prefecture: "Tarbes" },
    { numero: "66", nom: "Pyrénées-Orientales", prefecture: "Perpignan" },
    { numero: "67", nom: "Bas-Rhin", prefecture: "Strasbourg" },
    { numero: "68", nom: "Haut-Rhin", prefecture: "Colmar" },
    { numero: "69", nom: "Rhône", prefecture: "Lyon" },
    { numero: "70", nom: "Haute-Saône", prefecture: "Vesoul" },
    { numero: "71", nom: "Saône-et-Loire", prefecture: "Mâcon" },
    { numero: "72", nom: "Sarthe", prefecture: "Le Mans" },
    { numero: "73", nom: "Savoie", prefecture: "Chambéry" },
    { numero: "74", nom: "Haute-Savoie", prefecture: "Annecy" },
    { numero: "75", nom: "Paris", prefecture: "Paris" },
    { numero: "76", nom: "Seine-Maritime", prefecture: "Rouen" },
    { numero: "77", nom: "Seine-et-Marne", prefecture: "Melun" },
    { numero: "78", nom: "Yvelines", prefecture: "Versailles" },
    { numero: "79", nom: "Deux-Sèvres", prefecture: "Niort" },
    { numero: "80", nom: "Somme", prefecture: "Amiens" },
    { numero: "81", nom: "Tarn", prefecture: "Albi" },
    { numero: "82", nom: "Tarn-et-Garonne", prefecture: "Montauban" },
    { numero: "83", nom: "Var", prefecture: "Toulon" },
    { numero: "84", nom: "Vaucluse", prefecture: "Avignon" },
    { numero: "85", nom: "Vendée", prefecture: "La Roche-sur-Yon" },
    { numero: "86", nom: "Vienne", prefecture: "Poitiers" },
    { numero: "87", nom: "Haute-Vienne", prefecture: "Limoges" },
    { numero: "88", nom: "Vosges", prefecture: "Épinal" },
    { numero: "89", nom: "Yonne", prefecture: "Auxerre" },
    { numero: "90", nom: "Territoire de Belfort", prefecture: "Belfort" },
    { numero: "91", nom: "Essonne", prefecture: "Évry" },
    { numero: "92", nom: "Hauts-de-Seine", prefecture: "Nanterre" },
    { numero: "93", nom: "Seine-Saint-Denis", prefecture: "Bobigny" },
    { numero: "94", nom: "Val-de-Marne", prefecture: "Créteil" },
    { numero: "95", nom: "Val-d'Oise", prefecture: "Pontoise" },
    { numero: "971", nom: "Guadeloupe", prefecture: "Basse-Terre" },
    { numero: "972", nom: "Martinique", prefecture: "Fort-de-France" },
    { numero: "973", nom: "Guyane", prefecture: "Cayenne" },
    { numero: "974", nom: "La Réunion", prefecture: "Saint-Denis" },
    { numero: "976", nom: "Mayotte", prefecture: "Dzaoudzi" }
];

// génère la liste de tous les numéros de département
let list_num = [];
for (let e of departements) {
    list_num.push(e.numero);
}

let departementCourant;

function debut() {
    const inf = parseInt(document.getElementById("inf").value) || list_num[0];
    const sup = parseInt(document.getElementById("sup").value) || list_num[list_num.length - 1];

    const filtres = departements.filter(dep => dep.numero >= inf && dep.numero <= sup);
    if (filtres.length === 0) {
        document.getElementById("resultat").textContent = "Aucun département trouvé dans cette plage.";
        return;
    }

    departementCourant = filtres[Math.floor(Math.random() * filtres.length)];
    document.getElementById("num_departement").textContent = departementCourant.numero;
};

function check() {
    const nomDepartement = document.getElementById("nom_departement").value.trim();
    const prefecture = document.getElementById("prefecture").value.trim();

    if (!departementCourant) {
        document.getElementById("resultat").textContent = "Veuillez d'abord lancer une révision.";
        return;
    }

    let resultat = "Département : " + departementCourant.numero + " :";

    if (nomDepartement.toLowerCase() === departementCourant.nom.toLowerCase()) {
        resultat += "<br>Nom correct ! ";
    } else {
        resultat += `<br>Nom incorrect. La bonne réponse était : ${departementCourant.nom}. `;
    }

    if (prefecture.toLowerCase() === departementCourant.prefecture.toLowerCase()) {
        resultat += "<br>Préfecture correcte !";
    } else {
        resultat += `<br>Préfecture incorrecte. La bonne réponse était : ${departementCourant.prefecture}.`;
    }

    document.getElementById("resultat").innerHTML = resultat;

    // efface les champs
    document.getElementById("nom_departement").value = "";
    document.getElementById("prefecture").value = "";
    debut();
};


document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("valider").addEventListener("click", check);
    // si entrer
    document.getElementById("nom_departement").addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            check();
        }
    });
    document.getElementById("prefecture").addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            check();
        }
    });

    const inf = document.getElementById("inf");
    const sup = document.getElementById("sup");

    inf.addEventListener("change", debut);
    sup.addEventListener("change", debut);

    for (let e of departements) {
        const option = document.createElement("option");
        option.value = e.numero;
        option.textContent = e.numero;
        inf.appendChild(option.cloneNode(true));
        sup.appendChild(option.cloneNode(true));
    }
    
    inf.value = list_num[0];
    sup.value = list_num[list_num.length - 1];

    debut();
});