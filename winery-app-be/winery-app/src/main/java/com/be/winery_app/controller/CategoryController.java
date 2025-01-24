package com.be.winery_app.controller;

import com.be.winery_app.dto.CategoryDTO;
import com.be.winery_app.service.Impl.CategoryServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/categories")
public class CategoryController {

    @Autowired
    private CategoryServiceImpl service;

    @GetMapping("/getAllCategories")
    public List<CategoryDTO> getAllCategories() {
        return service.getAllCategoryData();
    }

    @GetMapping("/getCategoryById")
    public CategoryDTO getCategoryById(@Validated @RequestParam(name = "categoryId") Integer id) {
        return service.getCategoryObjectById(id);
    }

    @PostMapping("/newCategory")
    public CategoryDTO createCategory(@Validated @RequestBody CategoryDTO body) {
        return service.insertNewCategoryObjectData(body);
    }

    @PutMapping("/updateCategory")
    public CategoryDTO updateCategory(@Validated @RequestBody CategoryDTO body) {
        return service.updateExistingCategoryObjectData(body);
    }

    @DeleteMapping("/deleteCategory/{id}")
    public CategoryDTO deleteCategory(@Validated @PathVariable("id") Integer id) {
        return service.deleteCategoryObjectData(id);
    }
}
