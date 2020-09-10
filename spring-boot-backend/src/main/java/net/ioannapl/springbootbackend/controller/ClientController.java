package net.ioannapl.springbootbackend.controller;

import net.ioannapl.springbootbackend.exception.ResourceNotFoundException;
import net.ioannapl.springbootbackend.model.Client;
import net.ioannapl.springbootbackend.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("api/v1/")
@CrossOrigin(origins = "http://localhost:3000")
public class ClientController {

    @Autowired
    private ClientRepository clientRepository;

    @GetMapping("/clients")
    public List<Client> getClients(){
        return clientRepository.findAll();
    }

    @PostMapping("/clients")
    public Client createClient(@RequestBody Client client) {
        return clientRepository.save(client);
    }

    @GetMapping("clients/{id}")
    public ResponseEntity<Client> getClientById(@PathVariable Long id) {
        Client client = clientRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Client with id " + id + " does not exist!"));
        return ResponseEntity.ok(client);
    }

    @PutMapping("clients/{id}")
    public ResponseEntity<Client> updateClient(@PathVariable Long id, @RequestBody Client clientDetails) {
        Client client = clientRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Client with id " + id + " does not exist!"));
        client.setFirstName(clientDetails.getFirstName());
        client.setLastName(clientDetails.getLastName());
        client.setEmail(clientDetails.getEmail());

        Client updatedClient = clientRepository.save(client);
        return ResponseEntity.ok(updatedClient);
    }

    @DeleteMapping("/clients/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteClient(@PathVariable Long id) {
        Client client = clientRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Client with id " + id + " does not exist!"));
        clientRepository.delete(client);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", true);
        return ResponseEntity.ok(response);
    }

}
