<?php

namespace Database\Seeders;

use App\Models\Student;
use Faker\Factory;
use Illuminate\Database\Seeder;

class StudentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Student::truncate();

        $faker = Factory::create('id_ID');

        foreach(range(0,10) as $index){
            Student::create([
                'name' => $faker->name(),
                'nis' => $faker->randomNumber(),
                'kelas' => $faker->randomElement(['X','XI','XII']),
                'gender' => $faker->randomElement(['L','P']),
                'birth_date' => $faker->date(),
                'alamat' => $faker->address()
            ]);
        }
    }
}
