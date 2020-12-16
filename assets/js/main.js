// Istruzioni:
// Create una todo list usando VueJS.

// Funzionalitá:
// Attenzione: l'utente non deve inserire tasks vuote ma almeno un tot di caratteri.

let app = new Vue({
  el:'#app',
  data:{
    image : "https://www.boolean.careers/images/misc/logo.png",
    newTask: '',
    // La nostra todo list avrá alcune tasks di default predefinite
    tasks: [
      { text: 'Do somthing' },
      { text: 'Do else' },
      { text: 'Do somthing else' }
    ],
    // Se non ci sono piu task nella lista, mostrate un messaggio tipo "Nulla da fare"
    // meggase : 'Nothing to do'
  },
  methods: {
    // L'utente puó inserire nuove tasks
    addTask(){                // funzione associata: pulsante add (button) o taso Enter della tastiera (input).
      let newText = this.newTask.trim();        //Remove whitespace from both sides of a string
      if (newText){
        this.tasks.push({ text: newText });     //Add a new item to the end of an array:
        this.newTask = '';
      }
    },
    // Cliccando sulla "X" l'utente puó cancellare una task
    removeTask(index){
      this.$delete(this.tasks, index);
    }
  }
})
