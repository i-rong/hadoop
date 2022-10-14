class Log_in {
    constructor(root) {
        this.root = root;
        this.$log_in_page = $(`
<div class="log-in-page">
</div>
`)
        this.root.$web.append(this.$log_in_page);
    }
}
