<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        DB::table('companies')->insert([
            'cnpj' => '04818433000100',
            'social_name' => 'Empresa Seed 1',
            'email' => 'admin@caramatti.com.br',
            'phone_number' => '31993065447',
            'postal_code' => '32041770',
            'street'=> 'Rua Tiradentes',
            'number' => '31',
            'neighborhood' => 'Santa Efigênia',
            'state' => 'MG',
        ]);

        DB::table('users')->insert([
            'name' => 'Gabriel Caramatti',
            'cpf' => '22710281082',
            'email' => 'admin@caramatti.com.br',
            'password' => bcrypt(123),
            'phone_number' => '31993065447',
            'postal_code' => '32041770',
            'street'=> 'Rua Tiradentes',
            'number' => '31',
            'neighborhood' => 'Santa Efigênia',
            'state' => 'MG',
            'company_id' => 1
        ]);
    }
}