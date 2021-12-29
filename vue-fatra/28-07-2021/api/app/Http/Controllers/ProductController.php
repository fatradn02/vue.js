<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    function __construct()
    {
        $this->model = new Product();
    }

    public function index()
    {
        $data = $this->model->all();

        return response()->json($data);
    }

}
