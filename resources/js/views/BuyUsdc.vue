<template>
    <div>
        <h1 class="mb-5">Buy USDC</h1>
        <div class="mb-3">
            <label for="amount" class="form-label">Amount</label>
            <input class="form-control" id="amount"/>
            <hr/>
        </div>
        <div class="mb-3">
            <lable for="card-number" class="form-label">Card Number</lable>
            <input class="form-control" id="card-number"/>
        </div>
        <div class="row mb-3">
            <div class="col-4 mb-3">
                <lable for="card-expiry-month" class="form-label">Expiration Month</lable>
                <input class="form-control" id="card-expiry-month"/>
            </div>
            <div class="col-4 mb-3">
                <lable for="card-expiry-year" class="form-label">Expiration Year</lable>
                <input class="form-control" id="card-expiry-year"/>
            </div>
            <div class="col-4 mb-3">
                <lable for="card-cvc" class="form-label">CVC</lable>
                <input class="form-control" id="card-cvc"/>
            </div>
        </div>
        <hr/>
        <div class="mb-3">
            <label for="card-name" class="form-label">Cardholder Name</label>
            <input class="form-control" id="card-name"/>
        </div>
        <div class="mb-3">
            <label for="card-address" class="form-label">Billing Address</label>
            <input class="form-control" id="card-address"/>
        </div>
        <div class="row mb-3">
            <div class="col-4 mb-3">
                <label for="card-city" class="form-label">City</label>
                <input class="form-control" id="card-city"/>
            </div>
            <div class="col-4 mb-3">
                <label for="card-state" class="form-label">State</label>
                <input class="form-control" id="card-state"/>
            </div>
            <div class="col-4 mb-3">
                <label for="card-zip" class="form-label">Zip</label>
                <input class="form-control" id="card-zip"/>
            </div>
        </div>
        <hr/>
        <button class="btn btn-lg btn-primary col-12 mb-3">Buy</button>
    </div>
</template>
