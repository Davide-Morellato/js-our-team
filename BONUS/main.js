// Utilizzando i dati forniti i tabella,
// creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni:
// nome
// ruolo
// foto.
// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.


// CREO UN ARRAY DI OGGETTI
// IN CUI INSERISCO I SINGOLI MEMBRI DEL TEAM

const teamMembers = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        pic: 'wayne-barnett-founder-ceo.jpg',
    },

    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        pic: 'angela-caroll-chief-editor.jpg',
    },

    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        pic: 'walter-gordon-office-manager.jpg',
    },

    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        pic: 'angela-lopez-social-media-manager.jpg',
    },

    {
        name: 'Scott Estrada',
        role: 'Developer',
        pic: 'scott-estrada-developer.jpg',
    },

    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        pic: 'barbara-ramos-graphic-designer.jpg',
    },
]

// // console.log(teamMembers)  <- controllo di stampa in console


// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM semplicemente come stringhe

for(let i =0; i < teamMembers.length; i++){

    //CREO UNA VARIABILE PER PRENDERE IL SINGOLO ELEMENTO DELL'ARRAY DI OGGETTI
    const singleMember = teamMembers[i]

    // STAMPO IN CONSOLE LE SINGOLE PROPRIETA'
    console.log('Nome: ' + singleMember.name)
    console.log('Ruolo: ' + singleMember.role)
    console.log('Foto: ' + singleMember.pic)



    // PRENDO DALL'HTML L'ELEMENTO row
    const row = document.querySelector('.row')

    // CREO UN ELEMENTO col DA APPENDERE ALL'ELEMENTO row
    const col = document.createElement('div')

    row.append(col)

    // ASSEGNO ALLA COL LA CLASSE col-4
    col.classList.add('col-4', 'p-3')


    // CREO UN ELEMENTO CARD DA APPENDERE ALL'ELEMENTO COL
    const card = document.createElement('div')
    col.append(card)
    // ASSEGNO LE CLASSI ALL'ELEMENTO CARD
    card.classList.add('card', 'text-center')

    
    // AGGIUNGERE GLI ELEMENTI ALL CARD
    card.innerHTML = `
    <img src="../img/${singleMember.pic}" alt="...">
    <h3 class="member_name"> ${singleMember.name}</h3>
    <p class="member_role"> ${singleMember.role}</p>
    `

}