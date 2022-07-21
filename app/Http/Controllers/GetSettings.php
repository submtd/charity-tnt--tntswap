<?php

namespace App\Http\Controllers;

use App\Services\SettingsService;
use Illuminate\Routing\Controller;

class GetSettings extends Controller
{
    /**
     * Invoke.
     */
    public function __invoke()
    {
        return response()->json(SettingsService::get());
    }
}
