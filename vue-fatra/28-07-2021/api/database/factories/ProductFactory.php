<?php

namespace Database\Factories;

use App\Models\Product;
use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProductFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Product::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' =>$this->faker->words(3,true),
            'price' =>rand(10, 100) * 1000,
            'image' => 'https://source.unsplash.com/800x600/?food',
            'category_id' => rand(1, Category::count())
        ];
    }
}
