<template>
    <div>
        <h1 class="mb-5">Stake</h1>
        <p>Current amount staked: <strong>1,523,114.77</strong></p>
        <p>Available to stake: <strong>500</strong></p>
        <div class="mb-3">
            <label for="amount" class="form-label">Amount</label>
            <input class="form-control" id="amount"/>
        </div>
        <div class="mb-3">
            <label for="charity" class="form-label">Charity Donation</label>
            <input type="range" class="form-range" id="charity" min="5" max="100">
        </div>
        <button class="btn btn-lg btn-primary col-12 mb-3">Stake</button>
    </div>
</template>
