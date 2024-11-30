package com.marian.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.marian.demo.model.Address;
import com.marian.demo.service.AddressService;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class AddressController {
	
	@Autowired
	public AddressService addService;
	
	@GetMapping("/api/address")
	public List<Address> showAllAddresses(){
		return addService.getAllAddresses();
	}
	
	@PostMapping("/api/address")
	public Address addEmployee(@RequestBody Address address) {
		return addService.saveAddress(address);
	}
}
