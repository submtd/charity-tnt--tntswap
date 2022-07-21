<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Eighth navbar example">
        <div class="container">
            <router-link :to="{ name: 'Buy' }" class="navbar-brand"><strong>TNT Swap</strong></router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarsExample07">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link :to="{ name: 'BuyUsdc' }" class="nav-link" active-class="active">Buy USDC</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'Buy' }" class="nav-link" active-class="active">Buy</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'Sell' }" class="nav-link" active-class="active">Sell</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'Stake' }" class="nav-link" active-class="active">Stake</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'Marketplace' }" class="nav-link" active-class="active">Marketplace</router-link>
                    </li>
                </ul>
                <div class="d-flex">
                    <Wallet/>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import Wallet from "./Wallet.vue";
export default {
    components: {
        Wallet,
    }
}
</script>
