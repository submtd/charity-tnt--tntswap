import Vue from 'vue'
import { ethers } from 'ethers'
import MetaMaskOnboarding from '@metamask/onboarding'

export default async ({env}, inject) => {

    const wallet = Vue.observable({
        account: null,
        accountCompact: null,
        network: null,
        balance: null,
        provider: null,

        get hexChainId() {
            return '0x' + this.network?.chainId.toString(16)
        },

        async init() {
            if(!window.ethereum) return

            this.provider = new ethers.providers.Web3Provider(window.ethereum) //prefably diff node like Infura, Alchemy or Moralis
            this.network = this.provider.getNetwork()
            const [account] = await this.provider.listAccounts()

            !!account && this.setAccount(account)
        },

        async setAccount(newAccount) {
            if(newAccount) {
                this.account = newAccount
                this.accountCompact = `${newAccount.substring(0, 4)}...${newAccount.substring(newAccount.length - 4)}`

                const balance = (await this.provider.getBalance(newAccount)).toString()
                this.balance = (+ethers.utils.formatEther(balance)).toFixed(3)
            }
            else {
                this.account = null
                this.accountCompact = null
                this.balance = null
            }
        },

        async connect() {
            if(!MetaMaskOnboarding.isMetaMaskInstalled()) {
                const onboarding = new MetaMaskOnboarding()
                onboarding.startOnboarding()
                return
            }

            wallet.network = wallet.provider.getNetwork()

            const [account] = await wallet.provider.send('eth_requestAccounts')
            console.log('wallet connect', {account})

            if(account) {
                await wallet.setAccount(account)
            }
        },

        async switchNetwork(config) {
            if(this.network?.chainId === config.chainId || `0x${this.network?.chainId.toString(16)}` === config.chainId) {
                return //since we are on correct network
            }

		try {
			await this.provider.send('wallet_switchEthereumChain', [
				{ chainId: config.chainId },
			])
		} catch (err) {
			// This error code indicates that the chain has not been added to MetaMask.
			if (err.code === 4902) {
	    		await this.provider.send('wallet_addEthereumChain', [config])
                } else {
                    throw err
                }
	     }
	},
    })

    if(window.ethereum) {

        window.ethereum.on('accountsChanged', ([newAddress]) => {
            console.log('accountsChanged', newAddress)
            wallet.setAccount(newAddress)
        })

        window.ethereum.on('chainChanged', (chainId) => {
            console.log('chainChanged', chainId)
            window.location.reload()
        })

        wallet.init()
    }

    inject('wallet', wallet)
}
