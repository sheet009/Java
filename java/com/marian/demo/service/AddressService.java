package com.marian.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.marian.demo.model.Address;
import com.marian.demo.repository.AddressRepository;


@Service
public class AddressService {
	@Autowired
	public AddressRepository addRepository;
	
	public List<Address> getAllAddresses(){
		return addRepository.findAll();
	}
	
	public Address saveAddress(Address address) {
		return addRepository.save(address);
	}
	

}
