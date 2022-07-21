<?php

namespace App\Http\Controllers;

use App\Services\SettingsService;
use Illuminate\Routing\Controller;

class GetAddress extends Controller
{
    /**
     * Invoke.
     * @param string $address
     */
    public function __invoke($address)
    {
        return response()->json(SettingsService::get());
    }
}
