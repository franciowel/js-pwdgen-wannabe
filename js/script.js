//GENERIAMO UNA PASSWORD IN BASE AI DATI UTENTE E UN NUM (21)

//chiedo il nome all'utente
const userName = prompt('Dimmi il tuo nome');

//chiedo il cognome all'utente
const secondName = prompt('Ora dimmi il tuo cognome');

//chiedo il suo colore preferito
const userColor = prompt('Qual è il tuo colore preferito?')

//costruisco la password finale dell'utente aggiungendo 21
const yourPassword = 'La tua nuova password è ' + userName + secondName + userColor + '21'

//scrivo un messaggio all'user comunicando la sua nuova Pass
document.getElementById('passwordnew').innerHTML = yourPassword;