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
