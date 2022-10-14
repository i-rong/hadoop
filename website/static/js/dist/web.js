class Homepage {
    constructor(root) {
        this.root = root;
        this.$home = $(`
<div class="home">
    <div class="home-page-top">
        <div class="btn-area">
            <button>登录</button>
            <button>注册</button>
        </div>
    </div>
</div>
`)
        this.root.$web.append(this.$home);
    }
}
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
class Web {
    constructor(id) {
        this.id = id;
        this.$web = $('#' + this.id);
        this.home = new Homepage(this);
        this.login = new Log_in(this);
    }
}
