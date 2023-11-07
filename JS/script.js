const { createApp } = Vue

createApp({
    data() {
        return {
            apiBody : 'https://flynn.boolean.careers/exercises/api',
            endPoint : '',
            mailList: [],

        }
    },
    methods: {
        getData() {
            this.endPoint = '/random/mail'
            for (let i = 0; i < 10; i++) {
                axios.get(`${this.apiBody}${this.endPoint}`).then((resp) => {
                    console.log(resp)
                    const result = resp.data.response;
                    this.mailList.push(result);
                })
            }
        }
    },
    mounted() {
        this.getData()
    }
}).mount('#app')