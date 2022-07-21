<template>
    <div>
        <h1 class="mb-5">Swap</h1>
        <p>Current TNT Price: <strong>$0.25</strong></p>
        <div class="input-group mb-3">
            <span class="input-group-text" style="width: 5em;"><strong>USDC</strong></span>
            <input class="form-control" id="from"/>
            <span class="input-group-text"><a href="#">max</a></span>
        </div>
        <div class="text-center mb-3">
            <button class="btn btn-info text-light">TO <i class="bi bi-arrow-down-up"></i></button>
        </div>
        <div class="input-group mb-3">
            <span class="input-group-text" style="width: 5em;"><strong>TNT</strong></span>
            <input class="form-control" disabled id="to"/>
        </div>
        <button class="btn btn-lg btn-primary col-12 mb-3">Swap</button>
    </div>
</template>
