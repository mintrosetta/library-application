package com.luv2code.spring_boot_library.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.luv2code.spring_boot_library.entity.Book;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {

}
