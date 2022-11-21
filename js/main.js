const {createApp} = Vue;

createApp({
	data() {
		return {
			nome: '',
			cognome: '',
			src: 'https://picsum.photos/400/200',
			random: 1,
		};
	},

	methods: {
		imgChange() {
			this.src = `https://picsum.photos/400/200?random=${this.random}`;
			this.random++;
		},
	},
}).mount('#app');
