<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Employee;
use Faker\Factory;

class EmployeeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Employee::truncate();
        
        $f = Factory::create('id_ID');

        foreach(range(0,10) as $index){
            Employee::create([
                'name' => $f->name(),
                'nip' => $f->nik(),
                'position' => $f->randomElement(['manager','cp','sales','ob','staff']),
                'gender' => $f->randomElement(['1','p']),
                'birth_date' => $f->date()
            ]);
        }
    }
}
