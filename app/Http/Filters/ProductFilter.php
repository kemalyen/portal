<?php

namespace App\Http\Filters;

class ProductFilter extends QueryFilter {

    protected $sortable = [
        'name',
        'sku',
        'barcode',
        'status',
        'publishedAt' => 'published_at',
        'createdAt' => 'created_at',
        'updatedAt' => 'updated_at'
    ];

    public function createdAt($value) {
        $dates = explode(',', $value);

        if (count($dates) > 1) {
            return $this->builder->whereBetween('created_at', $dates);
        }

        return $this->builder->whereDate('created_at', $value);
    }

    public function include($value) {
        return $this->builder->with($value);
    }
 
    public function name($value) {
        $likeStr = str_replace('*', '%', $value);
        return $this->builder->where('name', 'like', $likeStr);
    }

    public function sku($value) {
        $likeStr = str_replace('*', '%', $value);
        return $this->builder->where('sku', 'like', $likeStr);
    }

    public function barcode($value) {
        $likeStr = str_replace('*', '%', $value);
        return $this->builder->where('barcode', 'like', $likeStr);
    }


    public function status($value) {
        return $this->builder->where('status', $value);
    }

    public function category($value) {
        return $this->builder->where('category_id', $value);
    }

    public function updatedAt($value) {
        $dates = explode(',', $value);

        if (count($dates) > 1) {
            return $this->builder->whereBetween('updated_at', $dates);
        }

        return $this->builder->whereDate('updated_at', $value);
    }

    
}