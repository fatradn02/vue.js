<?php

namespace Database\Seeders;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Database\Seeder;
use Database\Factories\CategoryFactory;
use Illuminate\Support\Facades\DB;
class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');

        Category::truncate();
        Category::factory(4)->create();
        
        Product::truncate();
        Product::factory(4)->create();
        
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');

    }
}
