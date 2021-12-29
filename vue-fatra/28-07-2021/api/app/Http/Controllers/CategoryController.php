<?php

namespace App\Http\Controllers;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    function __construct()
    {
        $this->model = new Category();
    }

    public function index()
    {
        $data = $this->model->all();

        return response()->json($data);
    }
}
