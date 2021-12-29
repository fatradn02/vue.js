<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class TodosTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        DB::table('todos')->truncate();
        
        DB::table('todos')->insert([
            'name' => 'Membersihkan Kamar',
            'is_finish' => false
        ]);
        
        DB::table('todos')->insert([
            'name' => 'Merapikan tempat tidur',
            'is_finish' => true
        ]);
    }
}
