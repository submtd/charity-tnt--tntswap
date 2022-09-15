<template>
    <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand href="/">TNT Swap</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item to="/getusdc">Get USDC</b-nav-item>
                <b-nav-item to="/presale">Presale</b-nav-item>
                <b-nav-item to="/buy">Buy</b-nav-item>
                <b-nav-item to="/sell">Sell</b-nav-item>
                <b-nav-item to="/stake">Stake</b-nav-item>
                <b-nav-item to="/marketplace">Marketplace</b-nav-item>
            </b-navbar-nav>
            <b-navbar-nav class="ml-auto">
                <b-button
                    variant="light"
                    :disabled="!!$wallet.account"
                    @click="$wallet.connect">
                    <strong>
                        {{ !!$wallet.account ? $wallet.accountCompact : 'Connect Wallet' }}
                    </strong>
                </b-button>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>
