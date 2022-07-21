<template>
    <div>
        <h1 class="mb-5">Marketplace</h1>
        <div class="card text-bg-secondary mb-3">
            <h3 class="card-header">Sell Your Stake</h3>
            <div class="card-body">
                <div class="mb-3">
                    <label for="stake-id" class="form-label">Stake ID</label>
                    <select class="form-select" id="stake-id">
                        <option value="1">122: $2,000 USDC</option>
                        <option value="2">314: $555 USDC</option>
                        <option value="3">420: $12.50 USDC</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="amount" class="form-label">Asking Price</label>
                    <input class="form-control" id="amount"/>
                </div>
                <button class="btn btn-lg btn-primary col-12 mb-3">List Stake</button>
            </div>
        </div>
        <hr/>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="column">Stake ID</th>
                    <th scope="column">Value</th>
                    <th scope="column">Price</th>
                    <th scope="column">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td scope="row">12</td>
                    <td>$2,500 USDC</td>
                    <td>$1999.99 USDC</td>
                    <td><button class="btn btn-primary btn-sm">Buy</button></td>
                </tr>
                <tr>
                    <td scope="row">120</td>
                    <td>$100 USDC</td>
                    <td>$89 USDC</td>
                    <td><button class="btn btn-primary btn-sm">Buy</button></td>
                </tr>
                <tr>
                    <td scope="row">121</td>
                    <td>$5,000 USDC</td>
                    <td>$3,500 USDC</td>
                    <td><button class="btn btn-primary btn-sm">Buy</button></td>
                </tr>
                <tr>
                    <td scope="row">211</td>
                    <td>$50 USDC</td>
                    <td>$35 USDC</td>
                    <td><button class="btn btn-primary btn-sm">Buy</button></td>
                </tr>
                <tr>
                    <td scope="row">333</td>
                    <td>$333 USDC</td>
                    <td>$1 USDC</td>
                    <td><button class="btn btn-primary btn-sm">Buy</button></td>
                </tr>
                <tr>
                    <td scope="row">420</td>
                    <td>$500 USDC</td>
                    <td>$375 USDC</td>
                    <td><button class="btn btn-primary btn-sm">Buy</button></td>
                </tr>
                <tr>
                    <td scope="row">666</td>
                    <td>$20,000 USDC</td>
                    <td>$15,000 USDC</td>
                    <td><button class="btn btn-primary btn-sm">Buy</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
