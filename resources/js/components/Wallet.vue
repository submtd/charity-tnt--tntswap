<template>
    <div>
        <button v-show="!connected" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#connect">
            Connect Wallet
        </button>
        <div class="modal fade" id="connect" tabindex="-1" aria-labelledby="connectLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="connectLabel">Connect Wallet</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body px-4 py-4">
                        <div class="row gx-5 py-5">
                            <div class="col-sm-6 px-5">
                                <button @click="wallet.metamask" class="btn btn-xl btn-default col-12" data-bs-dismiss="modal">
                                    <img src="../../images/metamask.svg" class="card-img-top" alt="Metamask"/>
                                </button>
                            </div>
                            <div class="col-sm-6 px-5">
                                <button @click="wallet.walletconnect" class="btn btn-xl btn-default col-12" data-bs-dismiss="modal">
                                    <img src="../../images/walletconnect.svg" class="card-img-top" alt="WalletConnect"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import useWallet from '../composables/useWallet';

export default {
    setup () {
        const wallet = useWallet();
        const connected = ref(wallet.connected);

        return {
            wallet,
            connected,
        }
    }
}
</script>
