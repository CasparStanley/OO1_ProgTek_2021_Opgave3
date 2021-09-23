const app = Vue.createApp({
    data() {
        return {
            input: null,
            msg: null,
            msgLower: null,
            msgUpper: null
        }
    },
    methods: {
        showMessage(input) {
            if (!input) {
                input = "";
            }
            
            this.msg = input;
            this.msgLower = input.toLowerCase();
            this.msgUpper = input.toUpperCase();
        }

    }
})