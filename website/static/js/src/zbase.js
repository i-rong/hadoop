class Web {
    constructor(id) {
        this.id = id;
        this.$web = $('#' + this.id);
        this.home = new Homepage(this);
        this.login = new Log_in(this);
    }
}
