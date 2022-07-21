import { useStore } from "vuex";
import useAlerts from "./useAlerts";
import useCookies from "./useCookies"
import useSettings from "./useSettings";
import WalletConnectProvider from "@walletconnect/web3-provider";

export default () => {
    const store = useStore();
    const alerts = useAlerts();
    const cookies = useCookies();
    const settings = useSettings();
    const wallet = {
        connected: false,
    }

    // Connect with metamask.
    const metamask = () => {
        if (typeof window.ethereum == "undefined") {
            window.location.href = "https://metamask.app.link/dapp/" + location.hostname;
        }
        cookies.set("provider", "metamask");
        web3.setProvider(window.ethereum);
        return connect();
    }

    // Connect with WalletConnect.
    const walletconnect = () => {
        const provider = new WalletConnectProvider({
            rpc: {
                [parseInt(settings.get("network_id"))]: settings.get("rpc_url"),
            },
        });
        cookies.set("provider", "walletconnect");
        web3.setProvider(provider);
        return connect();
    }

    // Connect
    const connect = async () => {
        if(wallet.connected) {
            // Already connected
            return;
        }
        if(!web3.currentProvider) {
            if(cookies.get("provider") == "metamask") {
                return metamask();
            }
            if(cookies.get("provider") == "walletconnect") {
                return walletconnect();
            }
            // No wallet selected.
            alerts.danger("You must pick a wallet in order to connect");
            return;
        }
        store.commit("ready", false);
        alerts.warning("Waiting on response from wallet");
        try {
            await web3.currentProvider.enable();
            await checkNetwork();
            await loadWallet();
            wallet.connected = true;
            store.commit("wallet", wallet);
            alerts.clear();
        } catch (error) {
            alerts.danger(error.message);
        }
        store.commit("ready", true);
    }

    // Check network
    const checkNetwork = async () => {
        if(!settings.get("network_id")) {
            return;
        }
        if(parseInt(settings.get("network_id")) != parseInt(await web3.eth.net.getId())) {
            alerts.warning("Switching to " + settings.get("network_name"));
            try {
                await web3.currentProvider.request({
                    method: "wallet_switchEthereumChain",
                    params: [{
                        chainId: web3.utils.toHex(settings.get("network_id")),
                    }],
                });
                alerts.clear();
            } catch (error) {
                alerts.danger("Incorrect network. Please connect to " + settings.get("network_name"));
            }
        }
    }

    // Load wallet
    const loadWallet = async () => {
        if(!wallet.connected) {
            await connect();
            return;
        }
        alerts.warning("Loading wallet");
        // Get address.
        let address = await web3.eth.getAccounts();
    }

    // Lookup address
    const lookupAddress = async (address) => {
        try {

        } catch (error) {

        }
    }

    // Get property
    const get = (property) => {
        if(typeof wallet[property] == "undefined") {
            return null;
        }
        return wallet[property];
    }

    return {
        metamask,
        walletconnect,
        get,
    }
}
