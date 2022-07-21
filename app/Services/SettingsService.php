<?php

namespace App\Services;

class SettingsService
{
    public static function get(): array
    {
        return config('settings');
    }
}
